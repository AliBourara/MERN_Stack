const express = require('express') 
const app = express()
const cors = require('cors')

// GlOBAL VARIABLES
const PORT = 8000;
const DB = "productManager_db"


app.use(express.json(),express.urlencoded({extended : true}),cors());
require('./config/mongoose.config')(DB)
require('./routes/Product.routes')(app)                           //---REQUIRE ROUTES----

app.listen(PORT ,() => console.log(`>>> SERVER IS RUNNING ON PORT ${PORT} <<<`));