import {React,useState,useEffect} from 'react'
import '../recommendedmovie/Recommovi.css'
import axios from 'axios';
import MovieCard from '../Movies/MovieCard';
import { Link } from 'react-router-dom';

const Recommovie = () => {
  
  const [recommendedMovies, setData] = useState([]);

  useEffect(() => {

      axios.get("https://api.themoviedb.org/3/movie/popular?api_key=32bf24f3ab713486ef6bf6f5cf0ea18f&language=en-US&page=1").then((res)=>{
        setData(res.data.results);
      }).catch((err)=>{console.log(err)});

  }, []);
  return (
    <div className='recomm_movie_container'>
      <div  className='heading'>
      <h2><strong>Recommended Movies</strong></h2>
        <h5 className='seeAll'> <strong><a href="/"><Link to="/all_movies">See All</Link></a>&gt;</strong></h5>
      </div>
      <div className='movieCardSection'>
          {recommendedMovies.map((movie,index)=>{
             return <MovieCard key={index} {...movie}/>
          })}
      </div>
    </div>
  )
}

export default Recommovie
