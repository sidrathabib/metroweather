import React from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/search.png'
import clear from '../Assets/clear.png'
import cloud from '../Assets/cloud.png'
import drizzle from '../Assets/drizzle.png'
import rain from '../Assets/rain.png'
import snow from '../Assets/snow.png'
import wind from '../Assets/wind.png'
import humidity from '../Assets/humidity.png'




export const WeatherApp = () => {
  
  let api_key ="46dd8c6a1b5d341de5815963f8c14496";
  const search = () => {
    const element = document.getElementsByClassName("cityInput");
    if(element[0].value==="") {
      return 0;
    }
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&appid=46dd8c6a1b5d341de5815963f8c14496`;
  
  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='Search'/>
       
        <div className="search-icon" onClick={()=>{search()}}>
          <img src={search_icon} alt=""/>
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud} alt=""/>
      </div>

      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>
      
      <div className="data-container">
        <div className="element">
          <img src={humidity} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default WeatherApp