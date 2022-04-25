const express = require('express');
const taskController = require('../controllers/TaskController');

const router = express.Router();

router.get('/', taskController.taskIndex);
router.post('/', taskController.taskSave);
router.post('/update-task', taskController.taskUpdate);
router.get('/delete-task', taskController.taskDelete);
router.get('/delete-all', taskController.taskDeleteAll);

module.exports = router;