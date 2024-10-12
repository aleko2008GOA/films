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
                        padding: '20px'
                    }}>
                    <h1 style = {{margin: '5px', maxWidth: '300px'}}>{movie.Title}</h1>
                    <h2 style = {{margin: '5px', maxWidth: '300px'}}>{movie.Year}, {movie.Type}</h2>
                    <a href = {`https://www.imdb.com/title/${movie.imdbID}/`}>
                        <img src = {movie.Poster} width = '300px' height = '450px' />
                    </a>
                </section>
            )) : <img style = {{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }} width = '300px' height = "300px" src = "https://cdni.iconscout.com/illustration/premium/thumb/nothing-here-yet-illustration-download-in-svg-png-gif-file-formats--404-page-not-found-planet-space-empty-state-pack-science-technology-illustrations-6763412.png?f=webp" />}
        </div>
    )
}

export default FilmList;