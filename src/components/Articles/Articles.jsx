import "./Articles.css";

export default function Articles() {
  return (
    <section id="articles" className="articles-section">

      <div className="articles-header">

        <span className="articles-tag">
          Featured Articles
        </span>

        <h2>
          Learn From <span>Experienced Alumni</span>
        </h2>

        <p>
          Explore expert insights, career guidance, leadership stories,
          and practical knowledge shared by our accomplished alumni.
        </p>

      </div>

      <div className="articles-container">

        {/* Article 1 */}

        <article className="article-card">

          <div className="article-top">

            <span className="category">
              Career Growth
            </span>

            <span className="read-time">
              6 min read
            </span>

          </div>

          <h3>
            How Senior Professionals Build Strong Professional Networks
          </h3>

          <p>
            Learn practical strategies used by experienced alumni to
            develop lasting professional relationships and expand their
            career opportunities.
          </p>

          <div className="article-footer">

            <div>
              <strong>Editorial Board</strong>
              <small>Published July 2026</small>
            </div>

            <button className="read-btn">
              Read →
            </button>

          </div>

        </article>

        {/* Article 2 */}

        <article className="article-card">

          <div className="article-top">

            <span className="category">
              Leadership
            </span>

            <span className="read-time">
              8 min read
            </span>

          </div>

          <h3>
            From Mentorship to Leadership: Lessons From Alumni Experts
          </h3>

          <p>
            Discover how alumni mentors have guided thousands of students
            and professionals toward successful careers.
          </p>

          <div className="article-footer">

            <div>
              <strong>Dr. Leena Thomas</strong>
              <small>Published June 2026</small>
            </div>

            <button className="read-btn">
              Read →
            </button>

          </div>

        </article>

        {/* Article 3 */}

        <article className="article-card">

          <div className="article-top">

            <span className="category">
              Community
            </span>

            <span className="read-time">
              5 min read
            </span>

          </div>

          <h3>
            Building Institute Impact Through Alumni Collaboration
          </h3>

          <p>
            Explore how alumni networks contribute to innovation,
            mentorship programs and stronger institute communities.
          </p>

          <div className="article-footer">

            <div>
              <strong>Alumni Office</strong>
              <small>Published May 2026</small>
            </div>

            <button className="read-btn">
              Read →
            </button>

          </div>

        </article>

      </div>

    </section>
  );
}