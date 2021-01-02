const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const colors = require('colors');
var cors = require('cors');
const connectDB = require('./config/db');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Router files
const postRoute = require('./routes/postRoute');

// Initializing express
const app = express();

app.use(cors());

app.use(bodyParser.json());

// Mount routers
app.use('/', postRoute);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log("server running"));