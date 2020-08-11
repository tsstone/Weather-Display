const five = require('johnny-five');
const Raspi = require('raspi-io').RaspiIO;
const rotaryEncoder = require('./rotaryController');

const board = new five.Board({
    io: new Raspi()
});

board.on('ready', () => {
    const upButton = new five.Button("GPIO17");
    const downButton = new five.Button("GPIO27");
    const pressButton = new five.Button("GPIO22");
  
    rotaryEncoder({
      upButton,
      downButton,
      pressButton,
      onUp: () => {
        console.log('up');
      },
      onDown: () => {
        console.log('down');
      },
      onPress: () => {
        console.log('press');
      },
    });
  });