// Import the mongoose module
const mongoose = require('mongoose');

// Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/my_database';
// eslint-disable-next-line no-console
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('MongoDB Database Connected!'));

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
