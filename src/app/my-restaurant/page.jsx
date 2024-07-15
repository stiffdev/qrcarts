'use client';
import { useEffect, useState } from 'react';


const RestaurantComponent = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);




  useEffect(() => {
    fetch('http://localhost:3000/api/myrestaurant') // Cambia '/api/restaurant' por la ruta correcta de tu endpoint
      .then(response => response.json())
      .then(data => {
        setRestaurant(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching restaurant:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!restaurant) {
    return (
      <div>
        <p>No se encontró ningún restaurante para este usuario.</p>
        <button onClick={() => handleAddRestaurantClick()}>Añadir restaurante</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Portada del restaurante</h1>
      <h2>{restaurant.name}</h2>
      <p>{restaurant.description}</p>
      {/* Aquí puedes mostrar más detalles del restaurante */}
    </div>
  );
};

export default RestaurantComponent;
