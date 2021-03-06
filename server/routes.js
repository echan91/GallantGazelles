const router = require('express').Router();
const Users = require('./routes/Users');
const Followers = require('./routes/Followers');
const Pitches = require('./routes/Pitches');
const Categories = require('./routes/Categories');
const Comments = require('./routes/Comments');
// const Categories = require('./routes/Categories');

// Rest API to /api

// USERS
//Get all users
router.get('/users', Users.getUsers);

//Create new User
router.post('/users', Users.postUsers);

//Edit User information
router.put('/users', Users.putUsers);

//Remove User from DB
router.delete('/users', Users.deleteUsers);

// COMMENTS
router.get('/comments', Comments.getComments);
// router.post('/comments', Comments.createCommentInComments);
// router.put('/comments', comments.something.put);
// router.delete('/comments', comments.something.delete);

// PITCHES
router.get('/pitches', Pitches.getPitches);
router.post('/pitches', Pitches.postPitches);
router.put('/pitches', Pitches.putPitches);
router.delete('/pitches', Pitches.deletePitches);

// CATEGORIES

router.get('/categories', Categories.getCategories);

// FOLLOWERS
router.get('/followers', Followers.getFollowers);
router.post('/followers', Followers.postFollower);
router.delete('/followers', Followers.removeFollower);


module.exports = router;