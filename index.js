//import express module
const express = require('express');
//import helmet
const helmet = require('helmet');
//port
const PORT = process.env.PORT || 8000;
//node moduels
const path = require('path');
const fetch = require('node-fetch');

const app = express();

// middleware and security
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(helmet());

//get method for movies
app.get("/movie/:query", async(req, res) => {
    const query = req.params.query;
    const url = `https://itunes.apple.com/search?term=${query}&media=movie&limit=32`;
    const fetch_response = await fetch(url);
    const json = await fetch_response.json();
    res.json(json);
});


//get method for music
app.get("/music/:query", async(req, res) => {
    const query = req.params.query;
    const api_url = `https://itunes.apple.com/search?term=${query}&media=music&limit=32`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    res.json(json);
});

//get method for audioBook
app.get("/audiobooks/:query", async(req, res) => {
    const query = req.params.query;
    const url = `https://itunes.apple.com/search?term=${query}&media=audiobook&limit=32`;
    const fetch_response = await fetch(url);
    const json = await fetch_response.json();
    res.json(json);
});

//get method for musicVideos
app.get("/musicVideo/:query", async(req, res) => {
    const query = req.params.query;
    const url = `https://itunes.apple.com/search?term=${query}&media=musicVideo&limit=32`;
    const fetch_response = await fetch(url);
    const json = await fetch_response.json();
    res.json(json);
});

//get method for podcast
app.get("/podcast/:query", async(req, res) => {
    const query = req.params.query;
    const url = `https://itunes.apple.com/search?term=${query}&media=podcast&limit=32`;
    const fetch_response = await fetch(url);
    const json = await fetch_response.json();
    res.json(json);
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    //if folder is built
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//Report errors
app.use(() => (req, res, next) => {
    let err = new Error('Oh no! Something broke :(');
    err.status = 404;
    next(err);
});

//set up port 8000 to listen
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));