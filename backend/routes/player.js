const Player = require('../models/player');
const router = require('express').Router();

router.post('/create', async (req, res) => {
  try {
    const { name, image, description, startDate, endDate } = req.body;

    const player = await Player.create({
      name,
      image,
      description,
      startDate,
      endDate,
    });

    return res.status(200).json({ message: 'Player created', player });
  } catch (error) {
    throw error;
    
  }
}
);

router.get('/all', async (req, res) => {
  try {
    const players = await Player.find({});

    return res.status(200).json({ players });
  } catch (error) {
    throw error;
  }  
}
);

router.get('/:id', async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);

    return res.status(200).json({ player });
  } catch (error) {
    throw error;
  }
}
);

router.put('/update/:id', async (req, res) => {
  try {
    const { name, image, description, startDate, endDate } = req.body;

    const player = await Player.findByIdAndUpdate(req.params.id, {
      name,
      image,
      description,
      startDate,
      endDate,
    });

    return res.status(200).json({ message: 'Player updated', player });
  } catch (error) {
    throw error;
  }
}
);

//add a player to a team
router.put('/add/:id', async (req, res) => {
  try {
    const { name, image, description, startDate, endDate } = req.body;

    const player = await Player.findByIdAndUpdate(req.params.id, {
      name,
      image,
      description,
      startDate,
      endDate,
    });

    return res.status(200).json({ message: 'Player updated', player });
  } catch (error) {
    throw error;
  }
}
);

//remove a player from a team
router.put('/remove/:id', async (req, res) => {
  try {
    const { name, image, description, startDate, endDate } = req.body;

    const player = await Player.findByIdAndUpdate(req.params.id, {
      name,
      image,
      description,
      startDate,
      endDate,
    });

    return res.status(200).json({ message: 'Player updated', player });
  } catch (error) {
    throw error;
  }
}
);

//get a player with a team
router.get('/team/:id', async (req, res) => {
  try {
    const player = await Player.findById(req.params.id).populate('team');

    return res.status(200).json({ player });
  } catch (error) {
    throw error;
  }
}
);


module.exports = router;