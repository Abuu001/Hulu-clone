import React from 'react'
import "./Nav.css"
import request from "../request"

function Nav({setSelectedOption}) {
    return (
        <div  className="nav">
            <h2  onClick={()=> setSelectedOption(request.fetchTrending)}>Trending</h2>
            <h2  onClick={()=> setSelectedOption(request.fetchTopRated) }>Top rated</h2>
            <h2  onClick={()=> setSelectedOption(request.fetchActionMovies)}>Action</h2>
            <h2  onClick={()=> setSelectedOption(request.fetchComedyMovies)}>Comedy</h2>
            <h2  onClick={()=> setSelectedOption(request.fetchHorrorMovies)}>Horror</h2>
            <h2  onClick={()=> setSelectedOption(request.fetchRomanceMovies)}>Romance</h2>
            <h2  onClick={()=> setSelectedOption(request.fetchMystery)}>Mystery</h2>
            <h2  onClick={()=> setSelectedOption(request.fetchSciFi)}>Sci-fi</h2>
            <h2  onClick={()=> setSelectedOption(request.fetchWestern)}>Western</h2>
            <h2  onClick={()=> setSelectedOption(request.fetchAnimation)}>Animation</h2>
            <h2  onClick={()=> setSelectedOption(request.fetchTv)}>Movie</h2>
        </div>
    )
}

export default Nav
