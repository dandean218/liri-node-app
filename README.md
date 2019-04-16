# liri-node-app

Use liri node app to search Spotify for songs, Bands in Town for concerts, and OMDB for movies. 

Depending on which, a user will type in the terminal one of the following:
  -spotify-this-song
  -movie-this
  -concert-this
  
Followed by the song, movie, or name of the artist they're looking for more information about. 

For example, if one types node liri.js spotify-this-song Heartache Tonight in the terminal, they will see this:
<img width="1035" alt="Screen Shot 2019-04-12 at 12 04 35 AM" src="https://user-images.githubusercontent.com/42423647/56178372-a7366000-5fc7-11e9-9751-69fb0fc997b0.png">


For example, if one types node liri.js movie-this Groundhog Day in the terminal, they will see this:
<img width="758" alt="Screen Shot 2019-04-12 at 12 05 07 AM" src="https://user-images.githubusercontent.com/42423647/56178374-a8678d00-5fc7-11e9-8f14-b6fed987cc4c.png">

And for the concert information, if you type node liri.js concert-this Jimmy Buffett, you get this:
<img width="662" alt="Screen Shot 2019-04-12 at 12 05 34 AM" src="https://user-images.githubusercontent.com/42423647/56178375-aa315080-5fc7-11e9-9857-8430dea37daf.png">

I hardcoded the concert-this to only bring up one result. However a slight tweak in using a for-loop will give you all the concert listings for a singer. The drawback to using BandsInTown was if they didn't have a particular artist (i.e. The Eagles) in their database, the code would error out. 
