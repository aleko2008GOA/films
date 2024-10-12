function FilmList(props){
    return (
        <div style = {{
                display:'grid', 
                gridTemplateColumns: 'auto auto auto', 
                padding: '20px', 
                gap: '20px'
            }}>
            {props.movies.Search ? props.movies.Search.map((movie, i) =>(
                <section key = {i} style = {{
                        border: '2px dashed', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        backgroundColor: 'white',
                    }}>
                    <h1 style = {{margin: '5px', maxWidth: '300px'}}>{movie.Title}</h1>
                    <h2 style = {{margin: '5px', maxWidth: '300px'}}>{movie.Year}, {movie.Type}</h2>
                    <a href = {`https://www.imdb.com/title/${movie.imdbID}/`}>
                        <img src = {movie.Poster} width = '300px' height = '450px' />
                    </a>
                </section>
            )) : <h1 style = {{
                    color: 'white',
                    margin: 0
                }}>Search for a movie</h1>}
        </div>
    )
}

export default FilmList;