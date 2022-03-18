const express = require("express");
const {initializeDB} = require("./lib/db")

const App = express() ;
const port = 3000 ;

App.listen(port,()=>{
    console.log(`Hello World from port: ${port}`);
    initializeDB().then(()=>{
        // console.log("Se inicio");
    })
})