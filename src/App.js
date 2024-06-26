import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import MovixHomePage from './home/Home';
import ImageSlider from './streaming/Slider';
import Shows from './Shows';

function App() {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="mb-4">
        <ImageSlider />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <MovixHomePage />
          </div>
            <div className="col-md-6"> 
            <Shows /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
