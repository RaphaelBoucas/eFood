import React from 'react'
import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import { Rodape, SocialMedia, Logo, TextoRodape } from "./styles";

const Footer = () => {
  return (
    <Rodape>
      <Logo src={logo} alt="" />
      <SocialMedia>
        <a href="www.instagram.com">
          <img src={instagram} alt="" />
        </a>
        <a href="www.facebook.com">
          <img src={facebook} alt="" />
        </a>
        <a href="www.twitter.com">
          <img src={twitter} alt="" />
        </a>
      </SocialMedia>
      <TextoRodape>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{" "}
      </TextoRodape>
    </Rodape>
  );
}

export default Footer