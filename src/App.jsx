import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header />
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <p className="game-category">Action</p>
          <h1>Subway Surfers</h1>

          <p>Join the excitement and run through the subway tunnels in this thrilling endless runner!</p>
        </div>

        <div className="hero-buttons">

          <button className="read-more-button">Read More</button>
          <button className="trailer-button">Watch Trailer</button>
          </div>
        
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
