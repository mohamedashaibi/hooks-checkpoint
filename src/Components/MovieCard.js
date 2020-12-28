//title, description, posterUrl, rate
//add trailer link to view trailer in a new page
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import Trailer from './Trailer';
import data from './data';


const MovieCard = (props) => {
    const [title, setTitle] = useState(props.title);
    const [id, setId] = useState(props.id?props.id:data[data.length-1].id+1);
    const [description, setDescription] = useState(props.description);
    const [postUrl, setPostUrl] = useState(props.url);
    const [rate, setRate] = useState(props.rate);
    const history = useHistory();

    return <div className="movie">
        <Router>
               <img src={logo} className="movie-img-top" alt="..."/>
                <div className="movie-body">
                    <h5 className="movie-title">{title}</h5>
                    <p className="movie-text">{description}</p>
                    <button onClick={() => history.push(`/Movies/${id}`, { from: "App" })}>
                        Read more &gt;&gt;
                    </button>
                    {/* <Link to={`/Movies/${id}`} target='_blank'>Read More &gt;&gt;</Link> */}
                </div>
                </Router>  
            </div>
}

export default MovieCard;