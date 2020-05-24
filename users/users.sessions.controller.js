const express = require('express');
const router = express.Router();
const userService = require('./user.service');

router.get('/', getSessions);
router.post('/', recordSession);
router.get('/current', getCurrentSessions);

module.exports = router;
function getSessions(req, res, next){
    userService.getAllSessions()
    .then(usersession => res.json(usersession))
    .catch(err => next(err));
}

function getCurrentSessions(req, res, next){
    userService.getCurrentSessions()
    .then(usersession => res.json(usersession))
    .catch(err => next(err));
}

function recordSession(req, res, next) {
    userService.recordSession(req.user.sub, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
