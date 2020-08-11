const fetch = require('node-fetch');

const key = "2cf1a5736af3359c73a7f38aea1c9965";
const zip = "40601";
const lat = "38.2481";
const lon = "-84.8985";

//var date = new Date(weather.current.dt * 1000).toLocaleString("en-US", {timeZone: "America/New_York"});

async function getWeather() {
    const weatherAPI = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`);

    const weather = await weatherAPI.json();
    //console.log(weather);
    return weather;
}
