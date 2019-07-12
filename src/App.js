import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [nasaPhotos, setNasaPhotos] = useState(null);
  useEffect( () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14")
    .then( res => {
      console.log(res)
      setNasaPhotos(res.data)
     })
    .catch( err => {
      console.log(err)
    })
  },[])


  return (
    <div className="App">
      <p>
        {nasaPhotos && <img src={nasaPhotos.url} />}
        {nasaPhotos === null ? 'Hold your horses...' : nasaPhotos.explanation}
        {nasaPhotos === null ? 'Hold your horses...' : nasaPhotos.url}
        "!!!!"
      </p>
      
    </div>
  );
}

export default App;
