import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components';

const Home = () => {
  return (
    <div>
      <Header/>
      <div className="container">
          <h3>Home</h3>
          <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Home;