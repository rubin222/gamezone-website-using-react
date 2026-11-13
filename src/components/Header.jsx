function Header(){
    return (
        <header className="header">
        <div className="logo">
            GameZone<span>.</span>
        </div>

        <nav className="nav-links">
            <a href="/">Home</a>
            <a href="/games">Games</a>
            <a href="/about">About</a>
        </nav>

        <div className="auth-buttons">
            <a href="/login" className="login-button">Login</a>
            <a href="/signup" className="signup-button">Sign Up</a>
        </div>


    </header>
    );



}
export default Header;