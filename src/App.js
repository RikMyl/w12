import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="business-card">
      <img src="Vamk_logo.png" alt="Logo" className="logo" />
      <span className="name">Riku Myllymaa</span>
      <span className="student">Opiskelija</span>
      <span className="company">Vaasan Ammattikorkeakoulu</span>
      <span className="experties">Tietotekniikan insinööri</span>
      <span className="email">e2202951@edu.vamk.fi</span>
      <span className="phone">+358456253630</span>
      <span className="address">Wolffintie 30, 65200 Vaasa</span>
    </div>
  );
};

export default App;
