import "./News.css";

export default function News() {
  return (
    <section id="news" className="news-section">

      <div className="news-heading">

        <span className="news-tag">
          Latest News & Updates
        </span>

        <h2>
          Stay Updated With <span>Alumni</span> and
          <br />
          Institute Activities
        </h2>

        <p>
          Discover recent alumni achievements, institute announcements,
          networking opportunities, and important community updates.
        </p>

      </div>

      <div className="news-layout">

        {/* Featured News */}

        <div className="featured-news">

          <span className="badge">
            Featured
          </span>

          <h3>
            Alumni Chapters Expand Across Five New International Cities
          </h3>

          <p className="news-date">
            July 02, 2026
          </p>

          <p className="news-description">
            The Alumni Association has successfully launched five new
            international chapters to strengthen global networking and
            collaboration among graduates.
          </p>

          <button className="news-btn">
            Read Full Story
          </button>

        </div>

        {/* Right Side */}

        <div className="news-side">

          <div className="news-card">

            <span className="card-tag">
              Institute
            </span>

            <h4>
              Executive Mentorship Program Opens for New Applications
            </h4>

            <p>
              Applications are now open for alumni mentors and student
              mentees for the upcoming academic year.
            </p>

            <small>
              June 21, 2026
            </small>

          </div>

          <div className="news-card">

            <span className="card-tag">
              Achievement
            </span>

            <h4>
              Four Alumni Receive National Innovation Awards
            </h4>

            <p>
              Distinguished alumni were recognized for outstanding
              contributions in technology, healthcare and research.
            </p>

            <small>
              June 10, 2026
            </small>

          </div>

        </div>

      </div>

    </section>
  );
}