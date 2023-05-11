// Stores the active TCP connection object.
let connection;
const { snekUP, snekRIGHT, snekLEFT, snekDOWN } = require("./constants");

// setup interface to handle user input from stdin

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", key => {
    handleUserInput(key);
  });

  return stdin;
};



const handleUserInput = function(key) {
  // your code here
  switch (key) {
  case '\u0003':
    process.exit();
    break;
  case "w":
    connection.write(snekUP);
    break;
  case "a":
    connection.write(snekLEFT);
    break;
  case "d":
    connection.write(snekRIGHT);
    break;
  case "s":
    connection.write(snekDOWN);
    break;
  case "b":
    connection.write("Say: BUMBLEBEETUNA!");
    break;
  case "q":
    process.exit();
    break;
  default:
    break;
  }

};



module.exports = { setupInput };