import MovieCard from './MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const MovieList = (props) => {

    return <div >
        {console.log("stars = " + props.searchrate)}
        {console.log(props.searchrate!==0?props.searchrate:true)}
        {props.items.map(function(item){
            {console.log(item.rate == (props.searchrate!==0?props.searchrate:item.rate))}
            if(item.title.includes(props.searchtext) && item.rate == (props.searchrate!==0?props.searchrate:item.rate)){
               return <div className="row container">
                    <MovieCard className="col-sm-4" title={item.title} description={item.description} url={item.url} rate={item.rate}/>
                </div>;
            }
            }
        )}
        
    </div>
}

export default MovieList;