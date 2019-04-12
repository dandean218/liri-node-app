require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var axios = require("axios");
const fs = require('fs');
var moment = require("moment");

var spotify = new Spotify(keys.spotify);

let command = process.argv[2];
let searchText = process.argv[3];
updatedSearchText = process.argv.slice(3).join(" ");
//everything from argv[3] afterward and then combine into one string

switch(command){
    case 'spotify-this-song':
    spotifySearch();
    break;
    case 'movie-this':
    movie();
    break;
    case 'concert-this':
    concert();
    break;
    case 'do-what-it-says':
    randomCommand();
    break;
    default:
    console.log("What's your problem?");
}

function spotifySearch(searchValue){
    let song = ""; 
    if(!searchValue){
    if(!searchText){
        song = "The Sign Ace of Base";
    }
    else{
        song = updatedSearchText;
    }
}
else{
    song = searchValue;
}

    spotify.search({type: 'track', query: song, limit: 1}, function(err, data){
        if(err){
            console.log("error, error, that's not good:" + err);
        }
        else{
            for(let i = 0; i < data.tracks.items.length; i++){
                const songInfo = data.tracks.items[i];
                console.log(`Artist: ${songInfo.artists[0].name}`);
                console.log(`Song: ${songInfo.name}`);
                console.log(`Preview URL: ${songInfo.preview_url}`);
                console.log(`Album: ${songInfo.album.name}`)
            }
        }
    })
}

function movie(){

    let movie = "";

    if(!updatedSearchText){
        movie = "Mr.Nobody";
    }
    else{
        movie = updatedSearchText;
    }

    
    
    let queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    // console.log(queryUrl);

    axios.get(queryUrl).then(
        function(response) {
          console.log(`Title: ${response.data.Title}`);
          console.log(`Release Year: ${response.data.Year}`);
          console.log(`IMdB rating: ${response.data.imdbRating}`);
          console.log(`Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}`);
          console.log(`Country: ${response.data.Country}`);
          console.log(`Language: ${response.data.Language}`);
          console.log(`Plot: ${response.data.Plot}`);
          console.log(`Actors: ${response.data.Actors}`);
        }
      );
}

function concert(){

    let artist = "";

    if(!updatedSearchText){
        artist = "Jimmy Buffett";
    }
    else{
        artist = updatedSearchText;
    }

    
    
    let queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    // console.log(queryUrl);

    axios.get(queryUrl).then(
        function(response) {
            if(!response.data[0]){
                console.log("Sorry the database sucks - Find a better artist! Hint: Become a parrot head...");
            }
            else{
          console.log(`Name of the Venue: ${response.data[0].venue.name}`);
          console.log(`Venue Location: ${response.data[0].venue.city}`);
          console.log(`Date of Concert: ${moment(response.data[0].datetime).format("MM/DD/YYYY")}`);
            }
        }
      );
}
    


function randomCommand(){

// First I want to read the file
fs.readFile('./random.txt', "utf8", function read(err, data) {
    if (err) {
        throw err;
    }
    // else{
    // content = data;
    // }

    var doWhatSays = data.split(',');
    //doWhatSays = content.
    // console.log(doWhatSays[1]);
    spotifySearch(doWhatSays[1]);
    

});
}




//with searchText, use slice command to get any values after a certain point in the array