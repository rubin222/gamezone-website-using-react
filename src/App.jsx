import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {

  return (
    <>
    <Header />
    <main>
      <h1>Welcome to GameZone!</h1>
      <p>This is the first stage of your gaming journey.</p>
    </main>
    <Footer />
    </>
  );
}

export default App
