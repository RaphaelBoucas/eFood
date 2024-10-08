import React, { useEffect, useState } from 'react'
import { Lista } from './styled'
import RestaurantCard from '../restaurantCard/index'
import LoaderCircle from '../loaderCircle';
import { useGetRestaurantsByIdQuery } from '../../api/api';


const RestaurantList = () => {

  const [restaurantData, setRestaurantData] = useState([]);
  //const [error, setError] = useState(null);

  const {data, error, isLoading } = useGetRestaurantsByIdQuery('')




  // useEffect(() => {
    
  //   fetch(
  //     "https://fake-api-tau.vercel.app/api/efood/restaurantes")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Sem respostas do servidor :(")
  //       }
        
  //       return res.json()
  //     })
  //     .then((res) => setRestaurantData(res))
  //     .catch((error) => setError(error))
  // }, []);




  if (error) {
    return <div>Erro: {error.message}</div>
  }
  if (isLoading) {
    return <LoaderCircle />;
  }

  return (
    <>
      <Lista>
        <div className="container">
          {data.map((i) => (
            <div key={i.id}>
              <RestaurantCard
                imagemLink={i.capa}
                tag={i.tipo}
                titulo={i.titulo}
                nota={i.avaliacao}
                descricao={`${i.descricao.substring(0, 230)}...`}
                destacado={i.destacado}
                id={i.id}
              />
            </div>
          ))}
        </div>
      </Lista>
    </>
  );
}

export default RestaurantList