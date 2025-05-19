import { Link } from 'react-router-dom';
import { Restaurant } from '../types';

interface Props {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: Props) => (
  <div className="border p-4 rounded shadow">
    <h2 className="text-lg font-semibold">{restaurant.name}</h2>
    <p>{restaurant.city}</p>
    <p>{restaurant.cuisines}</p>
    <p>Rating: {restaurant.aggregate_rating}</p>
    <Link to={`/restaurant/${restaurant.id}`} className="text-blue-600">View Details</Link>
  </div>
);

export default RestaurantCard;
