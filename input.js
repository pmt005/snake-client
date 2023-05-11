// Stores the active TCP connection object.
let connection;

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
    connection.write("Move: up");
    break;
  case "a":
    connection.write("Move: left");
    break;
  case "d":
    connection.write("Move: right");
    break;
  case "s":
    connection.write("Move: down");
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