const Author = require ('../models/author.models')

module.exports = {
    //Note:---------------FIND ALL-------------------------//
    findAll : (req,res)=>{
        Author.find()
        .then(dbResponse=>{
            console.log("DATABASE RESPONSE TO FIND ALL :",dbResponse);
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR TO FIND ALL :",dbError);
            res.status(400).json(dbError)
        })
    },
    //Note:---------------FIND ONE-------------------------//
    findOne : (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then(dbResponse => {
                console.log("DATABASE RESPONSE TO FIND ONE :",dbResponse);
                res.status(200).json(dbResponse)
            })
            .catch(dbError => {
                console.log("DATABASE ERROR TO FIND ONE :",dbError);
                res.status(400).json(dbError)
            })
    },
    //Note:---------------CREATE-------------------------//
    create : (req, res) => {
        Author.create(req.body)
            .then(dbResponse => {
                console.log("DATABASE RESPONSE TO CREATE :",dbResponse);
                res.status(201).json(dbResponse)
            })
            .catch(dbError => {
                console.log("DATABASE ERROR TO CREATE :",dbError.errors);
                res.status(400).json(dbError.errors)
            })
    },
    //Note:---------------UPDATE-------------------------//
    update : (req,res) => {
        Author.findByIdAndUpdate(req.params.id, req.body,{new:true,runValidators:true})
        .then(dbResponse=> {
            console.log("DATABASE RESPONSE TO UPDATE :",dbResponse);
            res.status(200).json(dbResponse)
        })
        .catch(dbError=> {
            console.log("DATABASE ERROR TO UPDATE :",dbError.errors);
            res.status(400).json(dbError.errors)
        })
    },
    //Note:---------------DELETE-------------------------//
    delete : (req,res) => {
        Author.findByIdAndDelete(req.params.id)
        .then(dbResponse=> {
            console.log("DATABASE RESPONSE TO DELETE :",dbResponse);
            res.status(200).json(dbResponse)
        })
        .catch(dbError=> {
            console.log("DATABASE ERROR TO DELETE :",dbError);
            res.status(400).json(dbError)
        })
    }
}