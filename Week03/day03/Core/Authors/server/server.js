const express = require('express') 
const app = express()
const cors = require('cors')

// GlOBAL VARIABLES
const PORT = 8000;
const DB = "authors_db"


app.use(express.json(),express.urlencoded({extended : true}),cors());
require('./config/mongoose.config')(DB)
require('./routes/authors.routes')(app)//---REQUIRE ROUTES----

app.listen(PORT ,() => console.log(`>>> SERVER IS RUNNING ON PORT ${PORT} <<<`));