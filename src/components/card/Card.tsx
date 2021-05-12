import "./Card.css";
import DefaultImage from '../../../src/brewdog.jpeg';


interface CardData {
  name: string;
  tagline?: string;
  alcohol?: number;
  tips?: string;
  description?: string;
  image?: string;
  firstBrew?: string;
}

export default function Card({
  name = "",
  tagline = "",
  alcohol = 0,
  tips = "",
  description = "",
  image = "",
  firstBrew = "",
}: CardData) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card__front">
          <span className="card__heading">{name}</span>
          <div
            className="card__image"
            style={{ backgroundImage: `url(${image !== null ? image : DefaultImage})` }}
          />
          <div className="card__footer">
            {tagline} {alcohol !== 0 && alcohol}
          </div>
        </div>
        <div className="card__back">
          <span className="card__heading">Details</span>
          <div className="card__back-info">
            <p>
              <strong>Description</strong> {description.substring(0, 450)}
            </p>
            <p>
              <strong>First Brewed:</strong> {firstBrew}
            </p>
            <p>
              <strong>Brewers Tips:</strong> {tips}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
