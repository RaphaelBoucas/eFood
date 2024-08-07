import React, { useEffect, useState } from 'react'

import {useParams } from 'react-router-dom'

import Footer from '../components/footer';
import MenuList from '../components/menuList';
import HeaderProfile from '../components/headerProfile';


const RestaurantProfile = () => {
  const {id} = useParams()

  const [restaurant, setRestaurant] = useState("");
    useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res));
  }, [id]);

  console.log(restaurant)
  // const restaurantData = restaurant.find((r) => r.id === id);

    
  // if (!restaurant){
  //     return <Error />
  // } 
  
  return (
    <div>
      <HeaderProfile
        nome={restaurant.titulo}
        tag={restaurant.tipo}
        img={restaurant.capa}
      />
      <MenuList />
      <Footer />
    </div>
  );
}

export default RestaurantProfile