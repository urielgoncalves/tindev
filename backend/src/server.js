const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
mongoose.connect('mongodb+srv://omnistack:123@cluster0-kxyyz.mongodb.net/oministack8?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

const server = express();
server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);