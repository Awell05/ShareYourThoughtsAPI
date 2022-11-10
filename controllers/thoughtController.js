const { ObjectId } = require('mongoose').Types;
const { Thought } = require('../models');

module.exports = {
    getThoughts(  req, res) {
        Thought.find()
        .then((thoughtsInfo) => res.json(thoughtsInfo))
        .catch((err) => res.status(500).json(err));
    },
    getSingleThought( req, res) {
        Thought.findOne({_id: req.params.thoughtId})
        .then((thought) =>
        !thought
        ? res.status(400).json({ message: 'No matching thought id'})
        : res.json(thought))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)});
    },
    postThoughts( req, res) {
        Thought.create(req.body)
        .then((dbThoughtInfo) => res.json(dbThoughtInfo))
        .catch((err) => {res.status(500).json(err)});
    },
    updateThoughts(res, req) {
        Thought.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body},
            { runValidators: true, new: true})
            .then((thought) => 
            !thought
            ? res.status(404).json({ message: 'No thought matches!'})
            : res.json(thought))
            .catch((err) => {res.status(500).json(err)});
    },
};