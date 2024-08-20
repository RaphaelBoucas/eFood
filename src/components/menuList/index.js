import React, { useEffect, useState } from "react";
import { Lista } from "./styled";
import MenuCard from "../menuCard";
import { useParams } from "react-router-dom";
import LoaderCircle from "../loaderCircle";
import { useGetMenuInfoQuery } from '../../api/api';

const MenuList = () => {
  const { id } = useParams();
  const [restaurante, setRestaurante] = useState(null);
  //const [error, setError] = useState(null);


  const {data, error, isLoading } = useGetMenuInfoQuery(id)

  //Approach anterior usando fetch API:

  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return res.json();
  //     })
  //     .then((res) => setRestaurante(res))
  //     .catch((error) => setError(error));
  // }, [id]);

  if (error) {
    return <div>Erro: {error.message}</div>;
  }

  if (isLoading) {
    return <LoaderCircle />;
  }

  //Verifica se cardapio é undefined e se está vazio.
  
  if (!data.cardapio || data.cardapio.length === 0) {
    return <div>Sem menu disponível no momento.</div>;
  }

  

  return (
    <>
      <Lista>
        <div className="container">
          {data.cardapio.map((i) => (
            <div key={i.id}>
              <MenuCard
                foto={i.foto}
                preco={i.preco}
                id={i.id}
                nome={i.nome}
                descricao={i.descricao}
                porcao={i.porcao}
              />
            </div>
          ))}
        </div>
      </Lista>
    </>
  );
};

export default MenuList;
