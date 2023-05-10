const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243" ,// IP address here,
    port:50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  //Note the syntax here data is passed into the callback and populated by the server
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

console.log("Connecting ...");
connect();