// src/components/BlogDetails.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const BlogDetails = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
            setPost(response.data);
        };
        fetchPost();
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div className="blog-details">
            <h2>{post.title}</h2>
            <p><strong>Author:</strong> {post.author}</p>
            <p>{post.content}</p>
            <p className="tags">Tags: {post.tags.join(', ')}</p>
            <Link to={`/edit/${post._id}`}>Edit</Link>
        </div>
    );
};

export default BlogDetails;
