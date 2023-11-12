const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = require('express').Router();

const generateVerificationToken = (user) => { // Pass 'user' as a parameter
  return jwt.sign({
    id: user.id,
    email: user.email,
  }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
}

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.create({
      email,
      password,
    });

    const token = generateVerificationToken(user); // Pass 'user' as a parameter

    return res.status(200).json({ message: 'User created', token });
    
  } catch (error) {
    throw error;
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

module.exports = router;