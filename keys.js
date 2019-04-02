const command = progress.argv[2];
const searchText = process.argv[3];
updatedSearchText = slice().
//everything from argv[3] afterward and then combine into one string

function homeworkAssign(command, updatedSearchText){

    
    


//create variables that 'require' axios and the other APIs
//node spotify api -- look at npmjs.com to look at package (use callback instead of promise)

//create an if, else if and else statements that correspond to process.argv[2] to go to the corresponding function if it's movie, song, or concert

//create an if and else statement inside whatever category you're in to account for blank inputs which default 

//then, for each, create a queryURL where you input the name of whatever you're looking for

//then, do an axios request on that queryURL and set up a promise that will pull the data you're looking for

//?? what does the second bullet point up from the Bonus section mean?

'spotify-this-song, i want it that way'


const fs = require('fs');
var content;
// First I want to read the file
fs.readFile('./random.txt', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;

    const doWhatSays = content.split(",");
    homeworkAssign(doWhatSays[0],doWhatSays[1]);


});


}
homeworkAssign(command, searchText);

//with searchText, use slice command to get any values after a certain point in the array