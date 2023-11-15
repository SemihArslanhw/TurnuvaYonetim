const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = require('express').Router();

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
    const { userName, email, password, profilePicture } = req.body;

    const user = await User.create({
      userName,
      email,
      password,
      profilePicture
    });

    const token = generateVerificationToken(user); // Pass 'user' as a parameter

    return res.status(200).json({ message: 'User created', token, user });
    
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isMatch = await user.comparePassword(req.body.password);

  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

  return res.status(200).json({ message: 'User logged in', token });
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