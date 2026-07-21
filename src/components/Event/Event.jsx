import "./Event.css";

export default function Events() {
  return (
    <section id="events" className="events-section">

      <div className="events-header">
        <p className="section-tag">UPCOMING EVENTS</p>

        <h2>
          Join our alumni events and <br />
          expand your professional network.
        </h2>

        <p>
          Participate in leadership forums, networking sessions,
          career workshops, and alumni meetups.
        </p>
      </div>

      <div className="timeline">

        {/* Event 1 */}

        <div className="timeline-item">

          <div className="timeline-date">
            <h3>18</h3>
            <span>AUG</span>
          </div>

          <div className="timeline-line"></div>

          <div className="timeline-card">

            <h3>Annual Alumni Leadership Forum</h3>

            <p>
              Meet industry leaders and successful alumni for an
              inspiring leadership conference.
            </p>

            <div className="event-details">

              <span>📍 Convention Centre</span>

              <span>🕘 10:00 AM</span>

              <span>👥 250 Members</span>

            </div>

            <button>Register Now</button>

          </div>

        </div>

        {/* Event 2 */}

        <div className="timeline-item">

          <div className="timeline-date">
            <h3>06</h3>
            <span>SEP</span>
          </div>

          <div className="timeline-line"></div>

          <div className="timeline-card">

            <h3>Global Finance Alumni Meetup</h3>

            <p>
              Connect with finance professionals and discuss
              emerging investment opportunities.
            </p>

            <div className="event-details">

              <span>💻 Virtual Event</span>

              <span>🕒 2:00 PM</span>

              <span>👥 180 Members</span>

            </div>

            <button>Register Now</button>

          </div>

        </div>

        {/* Event 3 */}

        <div className="timeline-item">

          <div className="timeline-date">
            <h3>11</h3>
            <span>OCT</span>
          </div>

          <div className="timeline-line"></div>

          <div className="timeline-card">

            <h3>Healthcare Innovation Circle</h3>

            <p>
              Learn from healthcare experts about innovation,
              research, and future technologies.
            </p>

            <div className="event-details">

              <span>📍 Mumbai Chapter</span>

              <span>🕙 11:00 AM</span>

              <span>👥 300 Members</span>

            </div>

            <button>Register Now</button>

          </div>

        </div>

      </div>

    </section>
  );
}