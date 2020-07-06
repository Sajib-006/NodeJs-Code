console.log("app.js is connected");

// import express module
var express = require("express");
// set express to variable
var app = express();

// set listen port
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Listening on PORT: " + process.env.PORT + " at IP: " + process.env.IP);
});

// ***************************
// ROUTES
// ***************************
app.get("/", function(req, res){
    res.send("Welcome to Assignment 1");
});

// /speak/:animal    pig cow dog
app.get("/speak/:animal", function(req, res){
    // set animal to lowercase to sanitize input for matching to object sounds
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof",
    }
    
    res.send("The " + animal + " says " + sounds[animal])
});

// print :word x :times 
app.get("/repeat/:word/:times", function(req, res){
    
    // capturing word
    var word = req.params.word;
    // capturing times and converting times to number from string input
    var times = Number(req.params.times);
    // placeholder variable for final string to be sent
    var result = "";
    
    console.log("The Word is " + word);
    console.log("The Number is " + times);
    
    // building the string that will be sent
    for(var i=1;i<=times;i++){
        result += " " + word;
    }

    
    // res.send can only be used 1 time, so it cannot be put inside the loop
    res.send(result);
});

// wildcard
app.get("*", function(req, res){
    res.send("404 Page Not Found")
});