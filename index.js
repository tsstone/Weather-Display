const fetch = require('node-fetch');
const raspi = require('raspi');
const gpio = require('raspi-gpio');


const key = "2cf1a5736af3359c73a7f38aea1c9965";
const zip = "40601"

// var Gpio = require('onoff').Gpio;
// var LED = new Gpio(4, 'out');
// LED.writeSync(1);


raspi.init(() => {
    getWeather();
    const shower = new gpio.DigitalOutput(7);
    console.log(shower);
    shower.write(1);
    // const shower = new gpio.DigitalOutput(11);
    // shower.write(HIGH);
});


async function getWeather(){
    const weatherAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${key}&units=imperial`);
    const weather = await weatherAPI.json();
    console.log(weather);
}

