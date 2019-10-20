import React from 'react';
import Routes from './routes';

import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import './styles/datepicker.css';

const App = () => {
  return (
      <div className="App main-container">        
        <Routes/>
      </div>
  );
}

export default App;