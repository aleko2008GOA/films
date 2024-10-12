import { useState } from "react";
import FilmList from "./films";

function GetFilmData(){
    const [data, setData] = useState('no data');

    function get(api){
        fetch(api)
            .then(res => res.json())
            .then(films => setData(films))
            .catch(err => setData('not found'))
            .finally(console.log('data fetched sucsessfuly'));
    }

    function handleChange(e){
        let movie = e.target.value;
        get(`http://www.omdbapi.com/?s=${movie}&apikey=92b6082f`);
    }

    return (
        <div>
            <label style = {{fontSize: '20px', color: 'white', margin: '10px'}} htmlFor="movie">Search for a movie or film:</label>
            <input style = {{
                border: '1px, solid',
                fontSize: '20px',
                borderRadius: '5px',
                padding: '10px',
                margin: '10px'
            }} type = 'text' placeholder = 'Search for a movie' id = 'movie' onChange = {handleChange} />
            <FilmList movies = {data} />
        </div>
    )
}

export default GetFilmData;