import "./Hero.css";

export default function Hero({ onAuthOpen }) {
  return (
    <section id="home" className="hero">

      {/* Decorative Background */}
      <div className="hero-bg-circle hero-bg-one"></div>
      <div className="hero-bg-circle hero-bg-two"></div>

      <div className="hero-wrapper">

        {/* Hero Content */}

        <div className="hero-content">

          <span className="hero-tag">
            PROFESSIONAL ALUMNI NETWORKING PLATFORM
          </span>

          <h1>
            Welcome to the PSG College Alumni Network
            
          </h1>

          <p className="hero-description">
            Reconnect with fellow alumni, expand your professional network, participate in exclusive alumni events, mentor future graduates, and stay connected with the PSG community for life.
          </p>

          <div className="hero-buttons">

            <button
              className="join-btn"
              onClick={() => onAuthOpen("register")}
            >
              Join Network
            </button>

            <a
              href="#directory"
              className="explore-btn"
            >
              Explore Alumni
            </a>

          </div>

        </div>

        {/* Statistics */}

        <div className="stats-section">

          <div className="stat-card">

            <h2>18K+</h2>

            <p>Verified Alumni</p>

          </div>

          <div className="stat-card">

            <h2>42</h2>

            <p>Global Chapters</p>

          </div>

          <div className="stat-card">

            <h2>120+</h2>

            <p>Annual Programs</p>

          </div>

        </div>

        {/* Featured Card */}

        <div className="featured-card">

          <span className="featured-tag">
            FEATURED CIRCLE
          </span>

          <h3>
            Executive Mentorship Forum
          </h3>

          <p>
            Senior alumni mentoring professionals through
            career transitions and board readiness.
          </p>

        </div>

      </div>

    </section>
  );
}