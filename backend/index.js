const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");

// models
const user = require("./routes/user");
const tournament = require("./routes/tournament");
const team = require("./routes/team");
const player = require("./routes/player");
const matches = require("./routes/matches");

const app = express();
app.use(cors());

dotenv.config();

app.use(express.json());

app.use("/api/user", user);
app.use("/api/tournament", tournament);
app.use("/api/team", team);
app.use("/api/player", player);
app.use("/api/matches", matches);

// İmage Upload
app.use("/images", express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    }, filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
})

const upload = multer({storage: storage});

app.post("/api/upload",upload.single("file"),(req,res)=>{
    console.log(req.body);
    res.status(200).json("File has been uploaded!");
})
// Connect to MongoDB
mongoose.connect(
    "mongodb://127.0.0.1:27017/turnuvam"
  ).then(() => console.log("MongoDB connected")).catch(err => console.log(err));
  
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

