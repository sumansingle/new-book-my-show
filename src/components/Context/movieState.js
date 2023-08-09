const MovieState = (props) =>{
    const [movieState, setMoviestate] = useState({});
    return(
        <MovieContext.Provider value={{movieState, setMoviestate}}>
        {props.children}
        </MovieContext.Provider>
    )
}
export default MovieState;