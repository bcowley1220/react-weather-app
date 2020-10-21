import React, { useState } from 'react';
import './App.css';
import LocationSearch from './Location-Search/Location-Search.js';
import WeatherCard from './Weather-Card/Weather-Card.js';

const App = (props) => {

  let newsState = useState({
    newsForm: [
      
    ]
  })
  let days = useState({
    day: [
      {num: 1},
      {num: 2},
      {num: 3},
      {num: 4},
      {num: 5},
      {num: 6},
      {num: 7}
    ]
  })

  const [cardVisibilityState, setCardVisibilityState] = useState(false);

  const [weatherLocationState, setWeatherLocationState] = useState({
    default: 'Commerce Twp, MI',
    inputLocation: null,
  })

  let visibleCards = null;
  if (cardVisibilityState) {
    visibleCards = (
      <div>
        {days[0].day.map((d, index) => {
          return <WeatherCard stuff={d.num}/>
        })}
      </div>
    )
  }
  console.log(days[0].day)


      
  return (
    <div>
      <LocationSearch defaultLocation={weatherLocationState.default}/>
      {visibleCards}
    </div>
  )
}

export default App;
