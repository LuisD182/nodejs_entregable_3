const { Router } = require('express');
const { creatingNewUser, gettinAllUsers } = require('../controllers/users.controllers');
const router = Router();

router.post('/api/v1/users', creatingNewUser);
router.get('/api/v1/users', gettinAllUsers);

module.exports = router