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
},
    {
        toJSON: {
            virtuals: true
        }
    }
);
// this will add up the duration of exercises entered during a workout
workoutsSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const workouts = mongoose.model("workouts", workoutsSchema);

module.exports = workouts;