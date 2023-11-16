const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = require('express').Router();
const bcrypt = require("bcrypt");


const generateVerificationToken = (user) => { // Pass 'user' as a parameter
  return jwt.sign({
    id: user.id,
  }, "semih", {
    expiresIn: '1d',
  });
}

const validateToken = (req, res, next) => {
  const accessToken = req.header('accessToken');

  if (!accessToken) {
    return res.status(400).json({ message: 'User not authenticated' });
  }

  try {
    const validToken = jwt.verify(accessToken, "semih");

    req.user = validToken;

    if (validToken) {
      return next();
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

router.post('/register', async (req, res) => {
  try {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const { userName, email, profilePicture } = req.body;

    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
      profilePicture
    });

    const token = generateVerificationToken(user); // Pass 'user' as a parameter

    return res.status(200).json({ message: 'User created', token, user });
    
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  console.log(req.body)
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")
   

    const token = jwt.sign({ id: user._id }, "semih" , { expiresIn: "5d" });

    console.log(validPassword)
    return res.status(200).json({result:user, token: token});
  } catch (err) {
    console.log(err)
    return res.status(500)
  }
});

//get all users
router.get('/all', async (req, res) => {
  try {
    const users = await User.find({});

    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//get user by id
 router.get('/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
  
      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  });

module.exports = router;