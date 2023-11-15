const Matches = require('../models/matches.js');
const router = require('express').Router();

router.post('/create', async (req, res) => {
  try {
    const { name, image, description, startDate, endDate } = req.body;

    const matches = await Matches.create({
      name,
      image,
      description,
      startDate,
      endDate,
    });

    return res.status(200).json({ message: 'Matches created', matches });
  } catch (error) {
    throw error;
    
  }
}
);

router.get('/all', async (req, res) => {
  try {
    const matches = await Matches.find({});

    return res.status(200).json({ matches });
  } catch (error) {
    throw error;
  }  
}
);

router.get('/:id', async (req, res) => {
  try {
    const matches = await Matches.findById(req.params.id);

    return res.status(200).json({ matches });
  } catch (error) {
    throw error;
  }
}
);

router.put('/update/:id', async (req, res) => {
  try {
    const { name, image, description, startDate, endDate } = req.body;

    const matches = await Matches.findByIdAndUpdate(req.params.id, {
      name,
      image,
      description,
      startDate,
      endDate,
    });

    return res.status(200).json({ message: 'Matches updated', matches });
  } catch (error) {
    throw error;
  }
}
);

module.exports = router;