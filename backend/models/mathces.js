const mongoose = require("mongoose");

const MatchSchema = new mongoose.Schema({
  team1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true
},
team2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true
},
matchType: {
    type: String,
    required: true
},
tagedPlayers1:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player"
}],
tagedPlayers2:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player"
}],
redCardedPlayers1:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player"
}],
redCardedPlayers2:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player"
}],
yellowCardedPlayers1:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player"
}],
yellowCardedPlayers2:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player"
}],
assistPlayers1:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player"
}],
assistPlayers2:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player"
}],
date: {
    type: Date,
    required: true
},
time: {
    type: String,
    required: true
},
group: {
    type: String,
    
},
referee: {
    type: String,
    required: true
},
stadium: {
    type: String,
    required: true
} 

}
);  

module.exports = mongoose.model("Match", MatchSchema);