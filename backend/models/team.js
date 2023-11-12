const mongoose = require("mongoose");

const TeamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
    ,
    description : {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    ,
    updatedAt: {
        type: Date,
        default: Date.now
    },
    groupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Groups",
        default: null
    },
    point: {
        type: Number,
        default: 0
    },
    O: {
        type: Number,
        default: 0
    },
    G:{
        type: Number,
        default: 0
    },
    B:{
        type: Number,
        default: 0
    },
    M:{
        type: Number,
        default: 0
    },
    AG:{
        type: Number,
        default: 0
    },
    YG:{
        type: Number,
        default: 0
    }
}
, {
    timestamps: true
}
);

module.exports = mongoose.model("Team", TeamSchema);