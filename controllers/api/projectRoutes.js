const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

// update route
router.put('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.update({
      name: req.body.name,
      artist_bio: req.body.artist_bio,
      spotify_embed_code: req.body.spotify_embed_code,
      artist_img: req.body.artist_img
    },
    {where: {
      id: req.params.id,
    }}
    );

    res.status(200).json(projectData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;