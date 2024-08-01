import React from 'react'
import { Lista } from './styled'
import RestaurantCard from '../restaurantCard/index'
import RestaurantData from "../../data.json";




const RestaurantList = () => {
 
  return (
    <>
      <Lista>
        <div className="container">
          {RestaurantData.map((i) => (
            <div key={i.rota}>
              <RestaurantCard
                imagemLink={i.imagemLink}
                tag={i.tag}
                titulo={i.titulo}
                nota={i.nota}
                descricao={`${i.descricao.substring(0, 230)}...`}
                rota={i.rota}
              />
            </div>
          ))}
        </div>
      </Lista>
    </>
  );
}

export default RestaurantList