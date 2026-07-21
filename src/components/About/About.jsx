import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}

      <section className="about-hero">

        <div className="hero-left">

          <span className="tag">
            ABOUT THE NETWORK
          </span>

          <h1>
            A trust professional community built on institute relationships.
          </h1>

          <p>
            Our alumni network connects graduates, faculty, students,
            and professionals through collaboration, mentorship,
            knowledge sharing, and lifelong friendships.
          </p>
{/* 
          <button>Join Our Community</button> */}

        </div>

        <div className="hero-right">
{/* 
          <div className="circle">
            🎓
          </div> */}

        </div>

      </section>

      {/* Statistics */}

      <section className="stats">

        <div className="stat-card">
          <h2>12K+</h2>
          <p>Alumni Members</p>
        </div>

        <div className="stat-card">
          <h2>300+</h2>
          <p>Events Conducted</p>
        </div>

        <div className="stat-card">
          <h2>95%</h2>
          <p>Career Support</p>
        </div>

        <div className="stat-card">
          <h2>150+</h2>
          <p>Mentors</p>
        </div>

      </section>

      {/* Features */}

      <section className="features">

        <div className="feature-card">
          <h3>Purposeful connection</h3>

          <p>
            Find alumni by industry, location, seniority
            and shared professional interests. Build practical
            relationships with people who understand your
            institute journey.
          </p>
        </div>

        <div className="feature-card">
          <h3>Knowledge exchange</h3>

          <p>
           Access articles, resources, and member-led forums
           that support leadership, governance, business growth,
           and lifelong learining.
          </p>
        </div>

        <div className="feature-card">
          <h3>Meaningful contribution</h3>

          <p>
            Mentor emerging talent, speak at events, support
            chapters, and help strengthen the institute's 
            professional reputation
          </p>
        </div>

      </section>

      {/* Mission */}

      <section className="mission">

        <div className="mission-box">

          <h2>Our Mission</h2>

          <p>
            We aim to create a lifelong relationship between
            alumni and the institution by encouraging collaboration,
            innovation, leadership, and continuous learning.
          </p>

        </div>

      </section>

    </div>
  );
}

export default About;