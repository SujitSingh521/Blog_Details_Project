// src/components/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import BlogDetails from './components/BlogDetails';
import "./App.css";


const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<BlogList />} />
                <Route path="/add" element={<BlogForm />} />
                <Route path="/edit/:id" element={<BlogForm />} />
                <Route path="/posts/:id" element={<BlogDetails />} />
            </Routes>
        </div>
    );
};

export default App;
