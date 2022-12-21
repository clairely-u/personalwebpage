import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import {Modal} from "./Modal"

function App() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <div className="App">
      <Main/>
      <h4>claire m. utrecht 2022 🤍</h4>
    </div>
  );
}

export default App;
