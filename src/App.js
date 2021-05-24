import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    })

    console.log('Latitude is: ', lat )
    console.log('Longitute is: ', long )
  }, [lat, long])


  return (
    <div className="App">
      <h1>Weather Application</h1>
    </div>
  );
}

export default App;
