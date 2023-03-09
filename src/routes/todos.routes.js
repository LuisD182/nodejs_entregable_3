const { Router } = require('express');
const { creatingATask } = require('../controllers/todos.controllers');
const router = Router();


router.post('/api/v1/todos', creatingATask);

module.exports = router