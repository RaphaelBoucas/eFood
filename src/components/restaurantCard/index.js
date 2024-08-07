import React from 'react'

import {
  Card,
  Titulo,
  Texto,
  Botao,
  TextoSuperior,
  Avaliacao,
  Tag,
  Imagem,
} from "./styled";
import estrela from '../../assets/estrela.png'


const RestaurantCard = ({
  imagemLink,
  tag,
  titulo,
  nota,
  descricao,
  id,
  destacado,
}) => {
  return (
    <Card>
      <Imagem src={imagemLink} alt="Restaurante" />
      <Tag>
        {destacado && <div>destacado</div>}
        <div>{tag}</div>
      </Tag>

      <TextoSuperior>
        <Titulo>{titulo}</Titulo>
        <Avaliacao>
          <span>{nota}</span>
          <img src={estrela} alt="Avaliação" />
        </Avaliacao>
      </TextoSuperior>
      {/* <div> */}
      <Texto>{descricao}</Texto>
      <Botao to={`/restaurant/${id}`}>Saiba mais</Botao>
      {/* </div> */}
    </Card>
  );
};

export default RestaurantCard;