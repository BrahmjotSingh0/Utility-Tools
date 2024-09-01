// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      // Fetch location data
      const locationResponse = await axios.get(`https://www.metaweather.com/api/location/search/?query=${city}`);
      if (locationResponse.data.length === 0) {
        throw new Error('City not found');
      }
      const woeid = locationResponse.data[0].woeid;

      // Fetch weather data using the woeid
      const weatherResponse = await axios.get(`https://www.metaweather.com/api/location/${woeid}/`);
      setWeather(weatherResponse.data);
      setError('');
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      width: '300px',
      margin: '20px auto',
    },
    input: {
      padding: '5px',
      margin: '5px',
      width: '100%',
    },
    button: {
      padding: '5px',
      margin: '5px',
      width: '100%',
      backgroundColor: 'dodgerblue',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    error: {
      color: 'red',
    },
    weather: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      margin: '10px 0',
    },
    para: {
        color: 'red',
        fontSize: '8px',
        textAlign: 'center',
        },
  };


  return (
    <div className={styles.container}>
        <p style={styles.para}>Please note: This sometimes works and sometimes doesn't because of the free API.</p>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city or locality name"
        style={styles.input}
      />
      <button onClick={fetchWeather} className={styles.button}>Get Weather</button>
      {error && <p style={styles.err}>{error}</p>}
      {weather && (
        <div className={styles.weather}>
          <h2>{weather.title}</h2>
          <p>Temperature: {weather.consolidated_weather[0].the_temp.toFixed(1)}°C</p>
          <p>Weather: {weather.consolidated_weather[0].weather_state_name}</p>
          <p>Humidity: {weather.consolidated_weather[0].humidity}%</p>
          <p>Wind Speed: {weather.consolidated_weather[0].wind_speed.toFixed(1)} m/s</p>
        </div>
      )}
    </div>
  );
}

export default Weather;