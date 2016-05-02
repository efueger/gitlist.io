#!/usr/bin/env node

"use strict";

const Tilda = require("tilda")

let parser = new Tilda(`${__dirname}/package.json`)

parser.action({
    name: "start"
  , desc: "Starts the app."
});

parser.on("start", action => {
    console.log("Start");
});
