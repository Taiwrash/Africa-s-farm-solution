const Chat = require("./models/chat");

const initializesocket = (io) => {
  io.on("connection", (socket) => {
    console.log("user connected");

    // Join a chat
    socket.on("join", ({ name }) => {
      socket.broadcast.emit("join", { joined: `${name} just joined` });

      Chat.find({}, (err, res) => {
        if (err) {
          throw err;
        }
        socket.emit("output", res);
      });
    });

    socket.on("input", (data) => {
      const chat = {
        username: data.name,
        message: data.message,
      };
      Chat.create(chat, (err, res) => {
        io.emit("output", res);
      });
    });
  });
};

module.exports = initializesocket;
