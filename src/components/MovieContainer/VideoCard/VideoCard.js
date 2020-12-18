import React ,{forwardRef}from 'react';
import "./VideoCard.css";
import Truncate from "react-text-truncate";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
const baseUrl ="https://image.tmdb.org/t/p/original/";

const  VideoCard=  forwardRef(({movie}, ref) =>{
    return (
        <div ref={ref} className="videoCard">
            <img src= {`${baseUrl}${movie.backdrop_path }`} alt="movie poster" />
            <Truncate 
                 line={3}
                 element="p"
                 truncateText="…"
                text={movie.overview}
            />
            <h2>{movie.title}</h2>
            <p  className="videoCard__stats">
                {movie.media_type &&  `${movie.media_type} • `}
                {movie.release_date ||  movie.first_air_date} •   {"    "}
                < ThumbUpIcon /> {"    "}
                {movie.vote_count}</p>
        </div>
    )
}
)
export default VideoCard
