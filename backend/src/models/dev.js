const mongoose = require('mongoose');
const PointSchema = require('./utils/PointsSchema');

const DevSchema = new mongoose.Schema({
    nome : String,
    github_username : String,
    bio : String,
    avatar : String,
    techs : [String],
    location : {
        type: PointSchema,
        index : '2dsphere'
    }
});

module.exports = mongoose.model('Dev', DevSchema);