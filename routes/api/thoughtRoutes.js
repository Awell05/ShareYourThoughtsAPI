const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    postThoughts,
    updateThoughts,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(postThoughts).put(updateThoughts);
router.route('/:thoughtId').get(getSingleThought);
// router.route('/:thoughtId/reactions').post().delete();

module.exports = router;