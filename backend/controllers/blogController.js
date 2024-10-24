const BlogPost = require('../models/blog');

// Create a new blog post
exports.createBlogPost = async (req, res) => {
    try {
        const blogPost = new BlogPost(req.body);
        await blogPost.save();
        res.status(201).json(blogPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all blog postss
exports.getAllBlogPosts = async (req, res) => {
    try {
        const blogPosts = await BlogPost.find();
        res.json(blogPosts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a blog post
exports.updateBlogPost = async (req, res) => {
    try {
        const { id } = req.params;
        const blogPost = await BlogPost.findByIdAndUpdate(id, req.body, { new: true });
        res.json(blogPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a blog post
exports.deleteBlogPost = async (req, res) => {
    try {
        const { id } = req.params;
        await BlogPost.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
