// 1-  Bring express Here
const express = require("express")

// - DEFINE THE PORT AS GLOBAL VARIABLE
const PORT = 8000
/* 
2- invoke the function express (execute the function express) 
and save the return in variable called app 
*/

const app = express()

app.get( "/" , (req,res) => {console.log("here")
res.send("Heroooo")}
)

app.listen(PORT)