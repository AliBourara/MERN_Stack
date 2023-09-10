const jokesModel = require('../models/jokes.model');

//*-----------------GET ALL----------------------//
module.exports.findAllJokes = (req, res) => {
    jokesModel.find()
        .then(result => {
            console.log("ALL JOKES FROM DB : ", result, "🎈🎈🎈🎈🎈")
            res.status(200).json(result)
        })
        .catch(error => res.status(400).json(error))
}

//*--------------------Create------------------//
module.exports.createJokes = (req, res) => {
    jokesModel.create(req.body)
        .then(createResult => {
            res.status(201).json(createResult)
        })
        .catch(error => res.status(400).json(error))
}
//*--------------------Get By ID------------------//
module.exports.findOneJokes = (req, res) => {
    jokesModel.findById({ _id: req.params.id })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => res.status(400).json(error))
}
//*----------------------Update--------------------//
module.exports.updateJokes = (req,res) => {
    jokesModel.findOneAndUpdate({_id:req.params.id}, req.body,{new:true})
    .then(result=> res.status(200).json(result))
    .catch(error=> res.status(400).json(error))
}
//*----------------------Delete------------------//
module.exports.deleteJokes = (req,res) => {
    jokesModel.deleteOne({_id:req.params.id})
    .then(result=> res.status(200).json(result))
    .catch(error=> res.status(400).json(error))
}

//return a random joke
module.exports.getRandomJoke = async (req, res) => {
    try {
        const count = await Joke.countDocuments();
        const randomNum = Math.floor(Math.random() * count);
        const randomObject = await Joke.findOne().skip(randomNum);
        res.send(randomObject);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
//!----- after fininshing Go to => ROUTES ----------//