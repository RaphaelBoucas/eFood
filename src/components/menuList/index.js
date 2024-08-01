import React from "react";
import { Lista } from "./styled";
import MenuCard from "../menuCard";
import RestaurantData from "../../data.json";
import { useParams } from "react-router-dom";

const MenuList = () => {
  const { id } = useParams()
  const restaurante = RestaurantData.find(i => i.rota === id)
  const cardapio = restaurante.cardapio

  return (
    <>
      <Lista>
        <div className="container">
          {cardapio.map((i) => (
            <div key={i.rota}>
              <MenuCard
                imagemLink={i.imagemMenu}
                titulo={i.nomePrato}
                descricao={`${i.descricaoPrato.substring(0, 230)}`}
                codigo={i.codigoPrato}
                preco={i.precoPrato}
                restaurante={restaurante.titulo}
              />
            </div>
          ))}
        </div>
      </Lista>
    </>
  );
};

export default MenuList;
