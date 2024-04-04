import { Offer } from '../types/offer';
import CityCard from './city-card';

type FavouritesCityBlockProps = {
  city: string;
  places: Offer[];
};

function FavouritesCityBlock({ city, places }: FavouritesCityBlockProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {places.map((place) => (
          <CityCard key={place.id} cardInfo={place} />
        ))}
      </div>
    </li>
  );
}

export default FavouritesCityBlock;
