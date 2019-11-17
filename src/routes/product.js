'use strict';

const express = require('express');
const controller = require('../controllers/products');

const router = express.Router();

router.post('/', controller.post);
router.get('/', controller.get);
router.get('/:id', controller.getbyId);
router.delete('/:id', controller.delete);
router.put('/:id', controller.put);
router.patch('/:id', controller.patch);

module.exports = router;