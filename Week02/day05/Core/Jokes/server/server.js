const express = require("express")

const app =  express()

//  * Middleware = Json
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
require('./config/mongoose.config')

// * ---------Routes--------
const jokesRoutes = require('./routes/jokes.routes')
jokesRoutes(app)


// Run server 
app.listen(8000, ()=> {console.log("SERVER IS RUNNING ON PORT 8000");}
)