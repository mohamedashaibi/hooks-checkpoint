import React from 'react';
import {
    BrowserRouter as Router,
    withRouter,
    useParams,
    useRouteMatch,
    useHistory
  } from "react-router-dom";
import data from './data';
import ReactPlayer from 'react-player'


const Trailer = () => {
  let { id } = useParams();
  let d = data.find(f=>f.id === Number.parseInt(id));
  const history = useHistory();
  // let d = data.find(f=>f.id == id);

  return <div>Requested movie ID: {id} 
  <br/>
   Description: {d.description}
   <br/>
   Video:(might not work because the link is giberish if you need to make it work please change the posturl in the data file)
   <br/>
    <ReactPlayer url={d.postUrl}/>

    <button onClick={()=>{history.goBack()}}>Go back</button>

  </div>;
}

export default Trailer;