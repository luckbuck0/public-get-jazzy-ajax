//-----------------initializingJquery------------------
//telling jquery to run onready function once document is ready
$(document).ready(onReady);

// on ready function is like a staging area for all
// other functions
function onReady() {
// built in function that retrieves the information
// we want from the server
    $.ajax({
        type: 'GET',
        url: '/artist'
// the .then built in function gives us the response 
//and then it allows us to do various things
    }).then(function (response) {
// a for loop that is going through the data retrieved
// from server.js 
        for (let i = 0; i < response.length; i++) {
// variable that is containing the data from server.js file
            let artist = response[i];
// hey jquery! from the id that is given please append the following
// table
            $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);
        }
    });

    // TODO Add ajax request for /songs and display on DOM

    $.ajax({
        type: 'GET',
        url: '/song'
    }).then( function (response) {
        for(let i=0; i<response.length; i++) {
            let songs = response[i];
            $('#songTableBody').append(`
                <tr>
                    <td>${songs.title}</td>
                    <td>${songs.artist}</td>
                </tr>
            `);
        }
    });
}
    
