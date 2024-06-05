import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";

function Demo() {
  const [apiData, setApiData] = useState(null);
  const [city, setCity] = useState("chennai");

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=519ccf24734a92f0db3b93df8e8b9eca`)
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
      })
 }, [city]);

 const submittingForm = (event) => {
  console.dir(event.target[0].value);
  setCity(event.target[0].value);
  event.preventDefault();
 }
console.log(apiData,city)
  return (
    <>
      <div className="overall">
        <div className="card">
          <h1>Weather App</h1>
          <form className="wrap" onSubmit={(e) => submittingForm(e)}>
            <input type="text" placeholder="Enter your city name" />
            <button type="submit" className="icon">
              <FcSearch />
            </button>
          </form>

          {apiData && (
            <>
              <h1 id="city">{apiData.name}</h1>
              <h1>
                <span>
                  <FaCloudShowersHeavy />
                </span>{" "}
                {console.log(apiData)}
                <span>{apiData.weather[0].main}</span>
              </h1>
              <div className="box">
                <div className="sec1">
                  <p>Humidity</p>
                  <span>
                    <WiHumidity />
                  </span>
                  <span id="humidity">{apiData.main.humidity}%</span>
                </div>

                <div className="sec1">
                  <p>Wind Speed</p>
                  <span>
                    <FaWind />
                  </span>
                  <span id="wind">{apiData.wind.speed} m/s</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Demo;
