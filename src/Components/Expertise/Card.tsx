import "./Expertise.css";

interface CardProps {
  title: string;
  info: string;
  className: string;
}

function Card({ title, info, className }: CardProps) {
  return (
    <div className={`card ${className}`}>
      <div className="card-inner">
        <div className="card-front">
          <div className="card-title">{title}</div>
        </div>
        <div className="card-back">
          <div className="card-info">{info}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
