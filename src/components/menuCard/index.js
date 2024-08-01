import { useDispatch } from "react-redux";
import { addItem } from "../../reducers/carrinhoSlice";
import {
  Card,
  Titulo,
  Texto,
  Botao,
  Imagem,
} from "./styled";


const MenuCard = ({ imagemLink, titulo, descricao, codigo, preco, restaurante }) => {
    //const { id } = useParams()
    //const restaurant = RestaurantData.find((r) => r.rota === id);
   const dispatch = useDispatch()
    
    function handleAdiciomar() {
      console.log(titulo, codigo, preco)
      dispatch(
        addItem({
          restaurante: restaurante,
          prato: titulo,
          codigo: codigo,
          preco: preco,
        })
      );
    }
    

  return (
    <Card>
      <Imagem src={imagemLink} alt="Restaurante" />

        <Titulo>{titulo}</Titulo>
      
        <Texto>{descricao}</Texto>
        <Botao onClick={handleAdiciomar}>Adicionar ao carrinho</Botao>
      
    </Card>
  );
};

export default MenuCard;
