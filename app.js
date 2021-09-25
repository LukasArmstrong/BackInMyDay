//jshint esversion:11

/* Startup
install nodeJS then open
cd to webpage folder
npm init
npm install express body-parser mongoose node-exif
y
copy app.js to webpage folder
node app.js
browse to http://localhost:3000/
*/

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//const ExifImage = require('exif').ExifImage;  //for .jpg image Exif metadata extraction
const _ = require('lodash');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


/* Mongoose --> MongoDB Setup
const mongoose = require('mongoose');
const connectionURI = mongodb://localhost:27017;
mongoose.connect(connectionURI, {    //local install instead?
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("DB connected.");
})

//just for now:
var imageSchema = new mongoose.Schema({
    imageName: String
});
var Image = mongoose.model("Image", imageSchema);
*/

/* later on:
var imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    image:
    {
        Make: String,
        Model: String
    },
    exif: {
        FNumber: Int,
        ExposureProgram: Int,
        ISO: Int,
        DateTimeOriginal: Date,
        ShutterSpeedValue: Float,
        ApertureValue: Int,
        BrightnessValue: Float,
        MaxApertureValue: Int,
        Flash: Int,
        FocalLength: Float,
        ExifImageWidth: Int,
        ExifImageHeight: Int
    },
    gps: {} //see https://exiftool.org/TagNames/GPS.html
});
*/

//HOMEPAGE:
//app.get("/", (req, res) => {
//    res.status(200).sendFile(__dirname + "/index.html");
//});


//IMAGE-UPLOAD:
app.get("/imageUpload", (req, res)=>{
    res.status(200).sendFile(__dirname + "/imageUpload.html");
});
app.post("/imageUpload", (req, res)=>{
    const postRequest = req.body;
    console.log(postRequest);

    /* To upload to MongoDB:
    var myData = new Image(req.body);
    // Exif processing here?
    myData.save()
        .then(item => {
            res.send("Image saved to database");
        })
    */
});


/* GET/POST Templates:
app.get("/pageName", (req, res)=>{
    //res.status(200).sendFile(__dirname + "/pageName.html");
});
app.post("/imageUpload", (req, res)=>{
    //res.send("Post request");
});

*/


//keep 404 handlers last
app.get("*", (req, res)=>{
    res.status(404).send("<h1>Page is not found <h1>");
});
/*app.use(function(req, res, next){ //if the above doesn't work, try this
    res.status(404).render('404_error_template', {title: "Sorry, page not found"});
});
*/


const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Successfully served on port: ${PORT}.`);
})
