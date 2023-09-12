const jokesController = require("../controllers/jokes.controller")

module.exports = app => {
    app.get("/api/jokes",jokesController.findAllJokes)
    app.post("/api/jokes",jokesController.createJokes)
    app.get("/api/jokes/random", jokesController.getRandomJoke);
    app.get("/api/jokes/:id", jokesController.findOneJokes);
    app.put("/api/jokes/update/:id", jokesController.updateJokes);
    app.delete("/api/jokes/delete/:id", jokesController.deleteJokes);
}

//!---after finishing go to ==> server.js -------------------//