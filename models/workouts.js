const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: 'Enter type of exercise.'
        },
        name: {
            type: String,
            required: 'Enter name of exercise.'
        },
        duration: {
            type: Number,
            required: 'Enter duration in minutes of exercise'
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
});

const workouts = mongoose.model("workout", workoutsSchema);

module.exports = workouts;