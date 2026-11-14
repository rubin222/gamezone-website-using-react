import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header />
    <main>
      <section className="hero-section">
        <h1>Welcome to GameZone!</h1>
        <p>This is the first stage of your gaming journey.</p>
        <button className="play-button">Play Now</button>
      </section>

      <section className="games-section">
        <h2>Ready to Play?</h2>
        <p>Your gaming experience starts here!</p>
      </section>
    </main>
    <Footer />
    </>
  );
}

export default App
