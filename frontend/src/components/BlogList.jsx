// src/components/BlogList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('http://localhost:5000/api/posts');
            setPosts(response.data);
        };
        fetchPosts();
    }, []);

    return (
        <div className="blog-container">
            <h1>Blog Posts</h1>
            <ul className="blog-list">
                {posts.map((post) => (
                    <li key={post._id}>
                        <Link to={`/posts/${post._id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
