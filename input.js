let connection;

const handleUserInput = function (key) {
  console.log(key);
  if (key === "w"){
    connection.write("Move: up")
  } else if (key === "a"){
    connection.write("Move: left")
  } else if (key === "s"){
    connection.write("Move: down")
  } else if (key === "d"){
    connection.write("Move: right")
  } else if (key === "z"){
    connection.write("Say: AYYOOO")
  }else if (key === "x") {
    process.exit();
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;