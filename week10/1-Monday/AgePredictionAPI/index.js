
const express = require('express')
const app = express()
const port = 3001

app.get('/age/:name?', (req, res) => {
  const age = getRndInteger(0,100) ; 
  const days = convertYearsToDays(age)
  
  const name = req.params.name ;
  console.log(name);
  if(!req.params.name) {
    res.json({
      "error" : "Missing parameter 'name' was expected."
    })
  } else {
    res.json({
      "name:" : name ,
      "age" : age,
      "days" : days
    })
    
  }
  // res.send(`The age is ${getRndInteger(0,100)}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function convertYearsToDays(age) {
  return days = age*365 ; 
}