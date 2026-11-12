import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>GameZone</h1>
      <p>This is my first game UI development using react.</p>
      <p>This is in the process of being built. So please stay tuned and also make sure to like subscribe and follow me!</p>
    </main>
  );
}

export default App
