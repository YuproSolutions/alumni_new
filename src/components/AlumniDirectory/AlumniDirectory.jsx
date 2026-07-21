import "./AlumniDirectory.css";
import { alumniData } from "../../data/alumni";

export default function AlumniDirectory() {
  return (
    <section id="directory" className="directory-section">

      <div className="directory-header">

        <span className="directory-tag">
          Alumni Directory
        </span>

        <h2>
          Meet Our <span>Global Alumni</span>
        </h2>

        <p>
          Connect with experienced professionals from various industries,
          discover mentors, and expand your professional network.
        </p>

        <input
          type="text"
          placeholder="Search by name, company, location..."
          className="directory-search"
        />

      </div>

      <div className="directory-grid">

        {alumniData.map((alumni) => (

          <div className="directory-card" key={alumni.id}>

            <div className="profile-header">

              <div className="profile-circle">
                {alumni.initials}
              </div>

              <div>

                <h3>{alumni.name}</h3>

                <span className="domain">
                  {alumni.domain}
                </span>

              </div>

            </div>

            <div className="profile-details">

              <div className="detail-row">
                <strong>Role</strong>
                <span>{alumni.role}</span>
              </div>

              <div className="detail-row">
                <strong>Company</strong>
                <span>{alumni.company}</span>
              </div>

              <div className="detail-row">
                <strong>Location</strong>
                <span>{alumni.location}</span>
              </div>

              <div className="detail-row">
                <strong>Experience</strong>
                <span>{alumni.experience}</span>
              </div>

              <div className="detail-row">
                <strong>Email</strong>
                <span>{alumni.email}</span>
              </div>

            </div>

            <div className="card-buttons">

              <button className="view-btn">
                View Profile
              </button>

              <button className="connect-btn">
                Connect
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}