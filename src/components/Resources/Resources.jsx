import "./Resources.css";
import { resources } from "../../data/alumni";

export default function Resources() {
  return (
    <section id="resources" className="resources-section">

      <div className="resources-header">

        <span className="section-tag">
          Learning Resources
        </span>

        <h2>
          Explore Our Digital <span>Resource Library</span>
        </h2>

        <p>
          Download premium study materials, alumni guides,
          leadership resources, and career development content
          prepared exclusively for our institute community.
        </p>

      </div>

      <div className="resources-grid">

        {resources.map((item) => (

          <div className="resource-card" key={item.id}>

            <div className="resource-top">

              <span className="resource-badge">
                {item.type}
              </span>

            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <div className="resource-footer">

              <span>{item.size}</span>

              <button>Download</button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}