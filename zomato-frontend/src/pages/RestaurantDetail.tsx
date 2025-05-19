import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api';
import { Restaurant } from '../types';

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    api.get<Restaurant>(`/restaurants/${id}/`)
      .then(res => setRestaurant(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{restaurant.name}</h1>
      <p><strong>City:</strong> {restaurant.city}</p>
      <p><strong>Cuisines:</strong> {restaurant.cuisines}</p>
      <p><strong>Rating:</strong> {restaurant.aggregate_rating}</p>
      <p><strong>Votes:</strong> {restaurant.votes}</p>
      <p><strong>Address:</strong> {restaurant.address}</p>
    </div>
  );
};

export default RestaurantDetail;
