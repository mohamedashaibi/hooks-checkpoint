//title, description, posterUrl, rate

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.svg';

const MovieCard = (props) => {
    
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [postUrl, setPostUrl] = useState(props.url);
    const [rate, setRate] = useState(props.rate);
    return <div className="movie col-sm-4">
               <img src={logo} className="movie-img-top" alt="..."/>
                <div className="movie-body">
                    <h5 className="movie-title">{title}</h5>
                    <p className="movie-text">{description}</p>
                    <a href="#" className="btn btn-primary">Read more &gt;&gt;</a>
                </div>
            </div>
}

export default MovieCard;