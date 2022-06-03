import React from 'react'
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube 
} from 'react-icons/fa'
import {
  Container,
  Desc,
  Welcome,
  Paragraph,
  Items,
  Title,
  Link,
  Icon
} from './FooterStyle'

export default function Footer() {

  return (
    <Container >
      <Desc>
        <Welcome> Bienvenido </Welcome>
        <Paragraph>Forma parte de la comunidad!</Paragraph>
      </Desc>
      <Items>
        <Title >Contacta</Title>
        <Link to='/'>Contacto</Link>
        <Link to='/'>Soporte</Link>
        <Link to='/'>Comunidad</Link>
        <Link to='/'>Premiaciones</Link>
      </Items>
      <Items>
        <Title>Tipos</Title>
        <Link to='/'>Blog Programadores</Link>
        <Link to='/'>Comunidad Softweb</Link>
        <Link to='/'>Programmer X</Link>
        <Link to='/'>MegaTech</Link>
      </Items>
      <Items>
        <Title>Redes Sociales</Title>
        <Icon><FaFacebook /></Icon>
        <Icon><FaInstagram /></Icon>
        <Icon><FaTwitter /></Icon>
        <Icon><FaYoutube /></Icon>
      </Items>
    </Container>
  )
}
