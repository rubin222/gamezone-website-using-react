function LatestNews() {
    return (
        <section className="latest-news">
            <h2>Latest News</h2>

            <div className="news-container">
                <div className="news-card">
                    <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e"alt="Gaming event"/>

                    <span>NEWS</span>
                    <h3>Latest Gaming Events</h3>
                    <p>Check out what's happening in the gaming world.</p>
                </div>

                <div className="news-card">
                    <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420" alt="Gaming setup"/>
                    <span>NEWS</span>
                    <h3>New Game Releases</h3>
                    <p> Take a look at some of the newest games.</p>
                </div>
                 <div className="news-card">
          <img
            src="https://images.unsplash.com/photo-1493711662062-fa541023f43d"
            alt="Video game controller"
          />
          <span>NEWS</span>
          <h3>Gaming Updates</h3>
          <p>Stay updated with the latest gaming news.</p>
        </div>
      </div>
            

        </section>

    )
}