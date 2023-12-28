const Tournament = require('../models/tournament');
const User = require('../models/user');
const router = require('express').Router();

router.post('/create', async (req, res) => {
  console.log(req.body);
  try {
    const { name, image, description, startDate, endDate, teams, schedule } = req.body;

    const tournament = await Tournament.create({
      name,
      image,
      description,
      startDate,
      endDate,
      teams,
      schedule,
    });

    return res.status(200).json({ message: 'Tournament created', tournament });
  } catch (error) {1
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
  console.log(req.params.id);
  try {
    const tournament = await Tournament.findById(req.params.id);

    if (!tournament) {
      return res.status(404).json({ error: 'No tournament found' });
    }

    tournament.followers.push(req.body.user._id);

    await tournament.save();

    return res.status(200).json({ message: 'Followed tournament', tournament });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
});

router.get('/getFollowedTournaments/:id', async (req, res) => {
  try {
    const tournaments = await Tournament.find({ followers: req.params.id });

    return res.status(200).json({ tournaments });
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

router.post('/comment/:id', async (req, res) => {
  console.log(req.body);
  try {
    const tournament = await Tournament.findById(req.params.id);

    if (!tournament) {
      return res.status(404).json({ error: 'No tournament found' });
    }

    const user = await User.findById(req.body.comment.userId);

    if (!user) {
      return res.status(404).json({ error: 'No user found' });
    }

    const comment = {
      text: req.body.comment.text,
      user: user,
      date: Date.now(),
    };

    tournament.comments.push(comment);
    await tournament.save();

    return res.status(200).json({ message: 'Added comment', tournament });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}
);


module.exports = router;
