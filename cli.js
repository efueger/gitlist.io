#!/usr/bin/env node

"use strict";

const Tilda = require("tilda")

let parser = new Tilda(`${__dirname}/package.json`)

parser.action({
    name: "gitlist"
  , desc: "Starts the app."
});

parser.on("gitlist", action => {
    console.log("Start");
});