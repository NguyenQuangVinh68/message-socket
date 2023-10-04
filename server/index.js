const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connect", (socket) => {
  console.log("connected " + socket.id);

  socket.on("send_message", (data) => {
    console.log("this is data save: " + data.message);
    socket.emit("recieve_message", data);
  });
});

server.listen(3000, () => {
  console.log(`server is run with localhost 3000`);
});
