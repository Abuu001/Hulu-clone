import React,{useState,useEffect} from 'react'
import "./MovieContainer.css"
import VideoCard from "./VideoCard/VideoCard"
import axios from "../../axios"
import FlipMove from "react-flip-move"

function MovieContainer({selectedOption}) {
    const [movies,setMovies]=useState([]);              

  useEffect(()=>{
   const  fetchData= async()=>{ 
        const request = await  axios.get(selectedOption)
        setMovies(...movies,request.data.results)
        console.log(request.data.results);
        return request;
        }
        fetchData()
        return()=>{
            fetchData()
        }
    },[selectedOption])
  
    const movieList= movies.map(movie=><VideoCard movie={movie} key={movie.id} /> )
  
    return (
        <div className="MovieContainer">
            <FlipMove>
              {movieList}
            </FlipMove>
        </div>
    )
}

export default MovieContainer
 