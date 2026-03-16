import "./CommonListCard.css";

export default function CommonListCard({ title, items, type }) {
  return (
    <div className="common-card">

      <h2>{title}</h2>

      <ul className={`list ${type}`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}