const fetch = require('node-fetch');
const raspi = require('raspi');
const gpio = require('raspi-gpio');

const five = require("johnny-five");
const board = new five.Board({
    io: new raspi()
});



const ON = 1;
const OFF = 0;
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
            on: () => { 
                    led.on(); 
            }, 
            off: () => { 
                    led.stop().off(); 
            }, 
            strobe: () => { 
                    led.stop().off(); 
                    led.strobe(); 
            }, 
            blink: () => { 
                    led.stop().off(); 
                    led.blink(500); 
            }, 
    }); 
});
async function getWeather(){
    const weatherAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${key}&units=imperial`);
    const weather = await weatherAPI.json();
    console.log(weather);
}

