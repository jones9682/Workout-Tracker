const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

var PORT = process.env.PORT || 3000;

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workoutdb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// require routes



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});