import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { cities } from "../data/cities";

export default function CityDetails() {
  const { id } = useParams();
  const city = cities.find(c => c.id === parseInt(id));

  const unit = useSelector(state => state.unit.unit);


  let displayTemp = city.temp;
  if (unit === "f") displayTemp = city.temp * 9/5 + 32;
  else if (unit === "k") displayTemp = city.temp + 273.15;

  return (
    <div className="city-details">
      <h2>{city.name}</h2>
      <p>temperatura: {Math.round(displayTemp)}°{unit.toUpperCase()}</p>
      <p>Warunki pogodowe: {city.icon}</p>
      <p>Prędkość wiatru: {city.wind} km/h</p>
      <p>deszcze: {city.rain}%</p>
      <p>chmury: {city.cloud}</p>

      <h3>Prognoza na 5 dni</h3>
      <div className="forecast">
        {city.forecast.map(day => {
          let dayTemp = day.temp;
          if (unit === "f") dayTemp = day.temp * 9/5 + 32;
          else if (unit === "k") dayTemp = day.temp + 273.15;

          return (
            <div key={day.day} className="forecast-day">
              <span>{day.day}</span>
              <span>{Math.round(dayTemp)}°{unit.toUpperCase()}</span>
              <span>{day.icon}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
