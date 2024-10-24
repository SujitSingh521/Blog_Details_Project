// src/components/BlogForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const fetchPost = async () => {
                const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
                setTitle(response.data.title);
                setAuthor(response.data.author);
                setContent(response.data.content);
                setTags(response.data.tags.join(', '));
            };
            fetchPost();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const tagsArray = tags.split(',').map(tag => tag.trim());
        const newPost = { title, author, content, tags: tagsArray };

        if (id) {
            await axios.put(`http://localhost:5000/api/posts/${id}`, newPost);
        } else {
            await axios.post('http://localhost:5000/api/posts', newPost);
        }

        navigate('/');
    };

    return (
        <form className="blog-form" onSubmit={handleSubmit}>
            <h1>{id ? 'Update' : 'Create'} Blog Post</h1>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
            <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Tags (comma separated)" />
            <button type="submit">{id ? 'Update' : 'Submit'}</button>
        </form>
    );
};

export default BlogForm;
