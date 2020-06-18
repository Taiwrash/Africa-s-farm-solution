const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const socketIo = require("socket.io");
const path = require("path");

const port = process.env.PORT || 4000;

const dbConnect = require("./dbConnect");
const initializeSocketIo = require("./socket");
const app = express();

const productRoutes = require("./routes/productRoute");
const userRoutes = require("./routes/user");
const handleRoutes = require("./routes/handleUser");

// Database connection
dbConnect();

app.use(cors());
app.use(bodyParser.json());
// Routes
app.use("/api", productRoutes);
app.use("/api", handleRoutes);
app.use("/api", userRoutes);

// Serving static folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static("afs-frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "afs-frontend", "build", "index.html")
    );
  });
}
// Server Connection
const server = app.listen(port, () => {
  console.log("Server is listening");
});

const io = socketIo(server);

initializeSocketIo(io);
