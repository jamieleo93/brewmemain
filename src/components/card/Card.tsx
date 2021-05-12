import './Card.css';


interface CardData {
  name: string;
  tagline?: string;
  alcohol?: number;
  tips?: string;
  description?: string;
  image?: string;
}

export default function Card(card: CardData) {

  return (
      <div className="card">
        <div className="card-inner">
        <div className="card__front">
        <span className="card__heading">{card.name}</span>
        <div className="card__image" style={{ backgroundImage: `url(${card.image})` }} />
        </div>
        <div className="card__back">
          hey
        </div>
        </div>
      </div>
  );
}
