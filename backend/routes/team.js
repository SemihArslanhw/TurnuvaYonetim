const Team = require('../models/team');
const router = require('express').Router();

router.post('/create', async (req, res) => {
  try {
    const { name, image, description, startDate, endDate } = req.body;

    const team = await Team.create({
      name,
      image,
      description,
      startDate,
      endDate,
    });

    return res.status(200).json({ message: 'Team created', team });
  } catch (error) {
    throw error;
    
  }
}
);

router.get('/all', async (req, res) => {
  try {
    const teams = await Team.find({});

    return res.status(200).json({ teams });
  } catch (error) {
    throw error;
  }  
}
);

router.get('/:id', async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);

    return res.status(200).json({ team });
  } catch (error) {
    throw error;
  }
}
);

router.put('/update/:id', async (req, res) => {
  try {
    const { name, image, description, startDate, endDate } = req.body;

    const team = await Team.findByIdAndUpdate(req.params.id, {
      name,
      image,
      description,
      startDate,
      endDate,
    });

    return res.status(200).json({ message: 'Team updated', team });
  } catch (error) {
    throw error;
  }
}
);


module.exports = router;