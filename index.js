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
    // I2C LCD, PCF8574T
        const lcd = new five.LCD({ 
                controller: "PCF8574T",
                rows: 2,
                cols: 16
        });
        led.on(); 
        lcd.clear();
        lcd.print("STARTING...");
        this.repl.inject({ 
                display: function(text) {
                        lcd.clear();
                        lcd.print(text);  
        }
    }); 
});
async function getWeather(){
    const weatherAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${key}&units=imperial`);
    const weather = await weatherAPI.json();
    console.log(weather);
}

