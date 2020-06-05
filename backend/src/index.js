require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require("./routes");
const { setupWebSocket } = require("./websocket");

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect(process.env.mongodbCredential, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
