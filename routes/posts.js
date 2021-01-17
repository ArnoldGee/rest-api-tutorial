const express = require('express');
const Post = require('../model/Post');

const router = express.Router();

router.get('/', (_req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(404).json(`Error fetching user data: ${err}`));
});

router.post('/', (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({
        message: "Ooops, we couldn't save the data to the database",
        err,
      });
    });
});

router.delete('/:postId', (req, res) => {
  Post.remove({_id: req.params.postId}).then((removedPost) => {
    res.json(removedPost)
  }).catch(err => res.json({'error message': err}))
})

module.exports = router;
