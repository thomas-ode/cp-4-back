const router = require('express').Router();
const jerseyRouter = require('./jersey.routes.js');
const presentationRouter = require('./presentation.routes.js');
const rosterRouter = require('./roster.routes.js');
const scheduleRouter = require('./schedule.routes.js');
const stadiumRouter = require('./stadium.routes.js');

router.use('/jerseys', jerseyRouter);
router.use('/presentations', presentationRouter);
router.use('/rosters', rosterRouter);
router.use('/schedules', scheduleRouter);
router.use('/stadiums', stadiumRouter);

module.exports = router;