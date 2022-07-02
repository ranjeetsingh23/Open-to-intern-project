
const express = require('express');
const router = express.Router();
const { createCollege,getIntern } = require("../controller/collegeController");
const { createIntern } = require("../controller/internController");


//===================================================[COLLEGE ROUTE HANDLER]===========================================================

router.route('/functionup/colleges').post(createCollege);

router.route('/functionup/collegeDetails').get(getIntern);

//===================================================[INTERN ROUTE HANDLER]===========================================================

router.route('/functionup/interns').post(createIntern);

module.exports = router;

