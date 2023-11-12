const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    teamId: {
        type: mongoose.Schema.Types.ObjectId,ref: "Team",
    },
    image: {
        type: String,
        required: true
    },
    goals: {
        type: Number,
        required: true
    },
    assists: {
        type: Number,
        required: true
    },
    redCards: {
        type: Number,
        default: 0
    },
    yellowCards: {
        type: Number,
        default: 0
    },
}
, {
    timestamps: true
}
);

module.exports = mongoose.model("Player", PlayerSchema);