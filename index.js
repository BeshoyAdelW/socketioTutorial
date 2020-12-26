const express = require("express");

//App Setup
const app = express();
const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

//Static files
app.use(express.static("public"));

//Socket.io setup
var io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  // Handle chat event
  socket.on("chat", function (data) {
    console.log(data);
    io.sockets.emit("chat", data);
  });

  // Handle typing event
  socket.on("typing", function (data) {
    socket.broadcast.emit("typing", data);
  });
});
