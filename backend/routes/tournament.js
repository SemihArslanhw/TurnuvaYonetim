const Tournament = require('../models/tournament');
const router = require('express').Router();

router.post('/create', async (req, res) => {
  console.log(req.body);
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
    console.log(error);
    return res.status(500).json({ error: error.message });
    
  }
}
);

router.get('/all', async (req, res) => {
  try {
    const tournaments = await Tournament.find({})
      .sort({ startDate: 'desc' }) // Sort by startDate in descending order
      .exec();

    return res.status(200).json({ tournaments });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

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

router.post('/follow/:id', async (req, res) => {
  console.log(req.body);
  try {
    const tournament = await Tournament.findById(req.params.id);

    if (!tournament) {
      return res.status(404).json({ error: 'No tournament found' });
    }

    tournament.followers.push(req.body.user.user._id);

    await tournament.save();

    return res.status(200).json({ message: 'Followed tournament', tournament });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get('/getPopularTournaments/5', async (req, res) => {

  try {
    const tournaments = await Tournament.find({}).sort({ followers: 'desc' }).limit(5).exec();
    

    return res.status(200).json({ tournaments });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});



module.exports = router;
