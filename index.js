const fetch = require('node-fetch');
const Raspi = require('raspi-io').RaspiIO;

const five = require("johnny-five");
const board = new five.Board({
    io: new Raspi()
});


const key = "2cf1a5736af3359c73a7f38aea1c9965";
const zip = "40601";

// Run Board 
board.on('ready', function() { 
    // LED Pin variable 
        const led = new five.Led(7); 
    // I2C LCD, PCF8574T
        const lcd = new five.LCD({ 
                controller: "PCF8574T",
                rows: 2,
                cols: 16
        });
        led.on(); 
        getWeather().then(weather => {
            lcd.print(`T:${Math.round(weather.main.temp)}° | FL:${Math.round(weather.main.feels_like)}°`);
        });
        this.repl.inject({ 
                led: led,
                lcd: lcd,
                display: function(text) {
                        lcd.clear();
                        lcd.home()
                        lcd.print(text);
                        lcd.cursor(1,20)
        }
    }); 
});
async function getWeather(){
    const weatherAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${key}&units=imperial`);
    const weather = await weatherAPI.json();
    console.log(weather);
    return weather;
}

