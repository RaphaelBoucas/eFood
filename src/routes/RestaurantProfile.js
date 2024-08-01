import React from 'react'
import RestaurantData from "../data.json";
import {useParams } from 'react-router-dom'
import Error from './Error';
import Footer from '../components/footer';
import MenuList from '../components/menuList';
import HeaderProfile from '../components/headerProfile';


const RestaurantProfile = () => {
  const {id} = useParams()
  const restaurant = RestaurantData.find(r => r.rota === id)

    
  if (!restaurant){
      return <Error />
  } 
  return (
    <div>
      <HeaderProfile
        nome={restaurant.titulo}
        tag={restaurant.tag}
        img={restaurant.imagemLink}
      />
      <MenuList />
      <Footer />
    </div>
  );
}

export default RestaurantProfile