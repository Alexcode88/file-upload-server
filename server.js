const express = require( 'express' );
const cors = require( 'cors' );
const path = require( 'path' );
const { UploadRouter } = require( './routes/uploadRouter' );

const app = express();

app.use( express.static(path.join(__dirname, "/public/images")) );
app.use( express.urlencoded({extended:true}) );
app.use( express.json() );
app.use( cors() );

app.use( '/upload', UploadRouter );


app.listen( 8080, function(){
    console.log( "The users server is running in port 8080." );
});