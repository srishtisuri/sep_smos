const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');
const session = require('express-session');
const passport = require('passport');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Set up database connection
const db = require('./config/key').url;
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => { console.log("MongoDB successfully connected...");})
    .catch(err => console.log(err));

// Express session initialize
app.use(session({
    secret: 'x594rva264grtff5',
    resave: true,
    saveUninitialized: true
}));

// Set up body parser to be able to view body of requests
app.use(bodyParser.json());

// Passport initialize
app.use(passport.initialize());
app.use(passport.session());


// Set up routes
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
    // Setup static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}

// Initialise the application
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});