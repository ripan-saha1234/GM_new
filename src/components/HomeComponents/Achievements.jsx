import "./Achievements.css";

export default function Achievements({ title, buttonText, data }) {
  return (
    <section className="achievements-section">

      {/* Header */}
      <div className="achievements-header">
        <h2>{title}</h2>
        <button className="view-btn">{buttonText}</button>
      </div>

      {/* Cards */}
      <div className="achievements-grid">
        {data.map((item, index) => (
          <div className="achievement-card" key={index}>
            <img src={item.image} alt="achievement" />
          </div>
        ))}
      </div>

    </section>
  );
}