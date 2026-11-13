function Footer(){
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>GameZone<span>.</span></h2>
                    <p>This is your ultimate gaming destination!</p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <a href="/">Home</a>
                    <a href="/games">Games</a>
                    <a href="/about">About</a>
                </div>

                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>

                    
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 GameZone. All rights reserved.</p>
            </div>

        </footer>
    );
}
export default Footer;