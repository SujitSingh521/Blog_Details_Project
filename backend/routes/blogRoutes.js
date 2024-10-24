const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Define routes
router.post('/posts', blogController.createBlogPost);
router.get('/posts', blogController.getAllBlogPosts);
router.put('/posts/:id', blogController.updateBlogPost);
router.delete('/posts/:id', blogController.deleteBlogPost);

module.exports = router;
