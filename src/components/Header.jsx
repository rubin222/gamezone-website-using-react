
function Header() {
  return (
    <header className="header">

      {/* Website Logo */}
      <div className="header-logo">
        GAME<span>ZONE</span>
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <a href="/" className="active">Home</a>
        <a href="/news">News</a>
        <a href="/games">Games</a>
        <a href="/reviews">Reviews</a>
        <a href="/esports">Esports</a>
        <a href="/videos">Videos</a>
        <a href="/community">Community</a>
      </nav>

      {/* Header Actions */}
      <div className="header-actions">
        <button className="search-button" aria-label="Search">
          ⌕
        </button>

        <button className="notification-button" aria-label="Notifications">
          ♧
        </button>

        <a href="/login" className="login-button">
          Login
        </a>
      </div>

    </header>
  );
}

export default Header;
