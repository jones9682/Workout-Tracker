const Workout = require("../models/workouts")

module.exports = function (app) {
    app.get("/api/workouts", function (req, res) {
        Workout.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    });


    app.post("/api/workouts", function (req, res) {
        Workout.create({})
            .then(data => res.json(data))
            .catch(err => {
                res.json(err)
            })
    });

    app.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { new: true, runValidators: true }
        )
            .then(data => res.json(data))
            .catch(err => {
                res.json(err)
            })
    });
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    app.get("/api/workouts/range", (req, res) => {
        Workout.find({ day: { $gte: sevenDaysAgo } })
            .then(data => {
                console.log(sevenDaysAgo);
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });
}