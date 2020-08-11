const fetch = require('node-fetch');
const Raspi = require('raspi-io').RaspiIO;

const five = require("johnny-five");
const board = new five.Board({
    io: new Raspi()
});


const key = "2cf1a5736af3359c73a7f38aea1c9965";
const zip = "40601"


/* raspi.init(async () => {
    const weather = await getWeather();
    const shower = new gpio.DigitalOutput(7);
    shower.write(0);
});
 */

// Run Board 
board.on('ready', function() { 
    // LED Pin variable 
    const led = new five.Led(7); 
    led.on(); 
    this.repl.inject({ 
        test: function() {
                led.on();
                led.brightness(1);
                led.off();
        }
    }); 
});
async function getWeather(){
    const weatherAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${key}&units=imperial`);
    const weather = await weatherAPI.json();
    console.log(weather);
}

