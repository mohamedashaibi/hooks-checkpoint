
// Create  the following component:
// MovieCard
// MovieList
// Filter ( title, rate)
// Every movie should have the following attributes:title, description, posterUrl, rate
// The user should be:
// Able to add a new movie 
// Filter the movies with title/ rate
import ReactStars from "react-rating-stars-component";
import React, { useState } from 'react';
import './App.css';
import MovieList from  './Components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './Components/data';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  BrowserRouter
} from "react-router-dom";
import Trailer from "./Components/Trailer";


const App = () => {
  

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Movies/:id">
          <Trailer/>
        </Route>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>    
  );
}

const Home = () =>{
  const [items, setItems] = useState(data);
  const [title, setTitle] = useState('');
  const [postUrl, setPostUrl] = useState('');
  const [rate, setRate] = useState('');
  const [description, setDesc] = useState('');
  const [searchText, setSearchText] = useState('');
  const [searchRate, setSearchRate] = useState(0);

  const AddBtnClick = () => {
    var newItem = {
      title: title,
      description: description,
      url: postUrl,
      rate: rate 
    }
    const newItems = [...items, newItem];
    setItems(newItems);
    console.log("new items = "+newItems);
    console.log("items = "+items);
  }

  const ratingChanged = (newRating) => {
    setSearchRate(newRating);
  };
  return <div className="App">
        <input className="form-control" placeholder="Search" value={searchText} onChange={(event)=>setSearchText(event.target.value)}/>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
      <div className="movie-input">
        <input className="form-control" placeholder="Title" value={title} onChange={(event)=>setTitle(event.target.value)}/>
        <input className="form-control" placeholder="Post Url" value={postUrl} onChange={(event)=>setPostUrl(event.target.value)}/>
        <input className="form-control" placeholder="Description" value={description} onChange={(event)=>setDesc(event.target.value)}/>
        <input className="form-control" placeholder="Rate" value={rate} onChange={(event)=>setRate(event.target.value)}/>
        <button onClick={AddBtnClick} className="btn btn-primary">Add</button>
      </div>
      <div className="movie-list">
        <MovieList items={items} searchtext={searchText} searchrate={searchRate}/>
      </div>
      {/* <Router>
        <Route exact path="/" component={App} />
        <Route path="/movies/:id" component={MovieCard} />
      </Router> */}
    </div>;
}

export default App;
