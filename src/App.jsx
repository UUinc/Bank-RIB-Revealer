import { useState } from 'react'
import styles from './App.module.css';

//Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Converter from './components/Converter/Converter';

function App() {

  return (
    <div className={styles.container}>
      <Navbar />
      <Home />
      <Converter />
    </div>
  )
}

export default App
