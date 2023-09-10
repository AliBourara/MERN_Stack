const mongoose = require('mongoose')

const JokesSchema = new mongoose.Schema({
    setup : String,
    punchline : String
}, {timestamps:true})

const Jokes = mongoose.model('Jokes',JokesSchema)
module.exports = Jokes ;

// !--------- After finishing with the model we ne to GO TO THE ====> CONTROLLERS------------//

