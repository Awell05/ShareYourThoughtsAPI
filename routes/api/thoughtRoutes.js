const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    postThoughts,
    updateThoughts,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(postThoughts);
router.route('/:thoughtId').get(getSingleThought).put(updateThoughts);
// router.route('/:thoughtId/reactions').post().delete();

module.exports = router;