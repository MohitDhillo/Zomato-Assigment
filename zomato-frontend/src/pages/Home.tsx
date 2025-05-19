import { useEffect, useState } from 'react';
import api from '../api';
import type { Restaurant } from '../types';
import RestaurantCard from '../components/RestaurantCard';

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        console.log('Fetching restaurants...');
        const response = await api.get<Restaurant[]>('/restaurants/');
        console.log('API Response:', response.data);
        setRestaurants(response.data);
        setError(null);
      } catch (err: any) {
        console.error('API Error:', err);
        setError(
          `Failed to load restaurants: ${err.message}. ${
            err.response ? `Status: ${err.response.status}` : ''
          }`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Loading restaurants...</h1>
        <p>Please wait while we fetch the data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Error</h1>
        <p className="text-red-600">{error}</p>
        <p className="mt-4">Please check if:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>The Django server is running on port 8000</li>
          <li>You have data in your database</li>
          <li>There are no CORS issues (check browser console)</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Restaurants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {restaurants.length === 0 ? (
          <div className="col-span-full text-center py-8">
            <p className="text-lg">No restaurants found</p>
            <p className="text-gray-600 mt-2">Make sure you have loaded the data using the load_data command</p>
          </div>
        ) : (
          restaurants.map(r => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
