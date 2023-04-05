// requiring the express to be in this file
const express = require('express');
// initiating the express library
const app = express();
// the spot we want it to run on
const PORT = 5000;

// list of artist objects with properties to be 
// used as data for a function
const artistListArray = [
    {
        name: 'Miles Davis',
        born: 1926,
        died: 1990,
    },
    {
        name: 'Duke Ellington',
        born: 1899,
        died: 1974,
    },
    {
        name: 'John Coltrane',
        born: 1926,
        died: 1987,
    },
    {
        name: 'Louis Daniel Armstrong',
        born: 1901,
        died: 1971,
    },
];


// list of song objects with properties to be used
// as data for a function 
const songListArray = [
    {
        title: 'Take Five',
        artist: 'The Dave Brubeck Quartet',
    },
    {
        title: 'So What',
        artist: 'Miles Davis',
    },
    {
        title: 'Sing Sing Sing',
        artist: 'Benny Goodman',
    },
    {
        title: 'Take the "A" Train',
        artist: 'The Dave Brubeck Quartet',
    },
];

//teaching our server where to get our front end files
// ie html,css,js,etc
app.use(express.static('server/public'));

//teaching are server to take in http request and send back
// the artistListArray
app.get('/artist', (req, res) => {
    res.send(artistListArray);
});

// TODO - Add GET for songs

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});