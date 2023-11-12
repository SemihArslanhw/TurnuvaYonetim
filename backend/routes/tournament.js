const Tournament = require('../models/tournament');
const router = require('express').Router();

router.post('/create', async (req, res) => {
  try {
    const { name, image, description, startDate, endDate } = req.body;

    const tournament = await Tournament.create({
      name,
      image,
      description,
      startDate,
      endDate,
    });

    return res.status(200).json({ message: 'Tournament created', tournament });
  } catch (error) {
    throw error;
    
  }
}
);

router.get('/all', async (req, res) => {
  try {
    const tournaments = await Tournament.find({});

    return res.status(200).json({ tournaments });
  } catch (error) {
    throw error;
  }  
}
);

router.get('/:id', async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.id);

    return res.status(200).json({ tournament });
  } catch (error) {
    throw error;
  }
}
);

router.put('/update/:id', async (req, res) => {
  try {
    const { name, image, description, startDate, endDate } = req.body;

    const tournament = await Tournament.findByIdAndUpdate(req.params.id, {
      name,
      image,
      description,
      startDate,
      endDate,
    });

    return res.status(200).json({ message: 'Tournament updated', tournament });
  } catch (error) {
    throw error;
  }
}
);

router.delete('/delete/:id', async (req, res) => {
  try {
    const tournament = await Tournament.findByIdAndDelete(req.params.id);

    return res.status(200).json({ message: 'Tournament deleted', tournament });
  } catch (error) {
    throw error;
  }
}
);

module.exports = router;
