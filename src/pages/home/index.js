import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
        <h3>Home</h3>
        <Link to="/login">Login</Link>
    </div>
  );
}

export default Home;