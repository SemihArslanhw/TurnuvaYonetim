const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    },
    startDate:{
        type: String,
        required: true
    },
    followers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    endDate:{
        type: String,
        required: true
    },
    teams:{
        type: Array,
        required: true
    },
    schedule:
        {
            type: Array,
            required: true
        },  
    })

module.exports = mongoose.model('Tournament', tournamentSchema);