#!/usr/bin/env node



"use strict";

const Tilda = require("tilda")

let parser = new Tilda(`${__dirname}/package.json`)

parser.action({
    name: "gitlist"
  , desc: "Starts the app."
  , description: "Gitlist.io OS - Open Source Gitlist App"
  , documentation: "https://github.com/SpaceG/gitlist.io"
    , examples: [
        "gitlist'Hello there!'"
      , "gitlist --help"
      , "gitlist - list the App on localhost 127.0.0.1"
    ]
});

parser.on("gitlist", action => {
    console.log("Start The Gitlist App");
        console.log("press c to stop the app");

});



/*

var http = require("http");
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  console.log("The Gitlist App reload the Site/Page")
  response.end();
}).listen(80,"127.0.0.1");



*/