const { ObjectId } = require('mongoose').Types;
const { User } = require('../models');

module.exports = {
   getUsers( req, res) {
     User.find()
     .then((user) => res.json(user))
     .catch((err) => res.status(500).json(err));
   },
   getSingleUser(req, res) {
    User.findOne({ _id: req.params.id})
    .then((user) => 
    !user 
    ? res.status(400).json({ message: 'User id is not found'})
    : res.json(user))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err)});
   },
   createUser(req, res) {
    User.create(req.body)
    .then((dbUserInfo) => res.json(dbUserInfo))
    .catch((err) => res.status(500).json(err));
    },
   };