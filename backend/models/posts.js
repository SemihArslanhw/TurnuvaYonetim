const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    youtubeLink: {
        type: String,
        required: true
    },
    teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
        required: true
    },
    tagedsId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
    
},
{timestamps: true}
)

module.exports = mongoose.model("Post", PostSchema);