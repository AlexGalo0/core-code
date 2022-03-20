const express = require('express');
const {initializeDB} = require('./lib/db')

const App = express () ; 

App.use(express.json()) //Todo lo que venga del cliente pasara por aca,Y a todo lo pondra en JSON



App.listen(3000,()=>{
  console.log("Estoy escuchando ");
  initializeDB().then(()=>{
      console.log(`Database is Ready`);
  })
})

