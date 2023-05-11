const net = require("net");
const { IP, PORT, userNAME } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP  ,// IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  //Note the syntax here data is passed into the callback and populated by the server
  conn.on("connect", () => {
    console.log("Connection established ");
    conn.write(userNAME);
    /*setInterval(() => {
      conn.write("Move: up");
    }, 500);
    */
  });
  
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};



module.exports = { connect };