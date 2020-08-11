const five = require('johnny-five');
const Raspi = require('raspi-io').RaspiIO;
const rotaryEncoder = require('johnny-five-rotary-encoder');

const board = new five.Board({
    io: new Raspi()
});

board.on('ready', () => {
    const upButton = new five.Button(31);
    const downButton = new five.Button(29);
    const pressButton = new five.Button(32);
  
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