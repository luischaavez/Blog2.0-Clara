import React, { useState } from 'react'
import {
  Container,
  Form,
  Text,
  Input,
  TextArea,
  Button
} from './ContactStyle'
import Footer from '../../components/Footer/Footer'
import axios from 'axios'

import { contactFormAnimation } from '../../resources/Animations'


export default function Contact() {

  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/contact", {
        name,
        occupation,
        email,
        message,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <Container>
        <Form
          onSubmit={handleSubmit}
          variants={contactFormAnimation}
          initial='initial'
          animate='animate'
        >
          <Text> Entra en contacto </Text>
          <Input
            type="text"
            placeholder="Nombre..."
            onChange={(e) => setName(e.target.value)}
          ></Input>
          <Input
            type="text"
            placeholder="Ocupacion..."
            onChange={(e) => setOccupation(e.target.value)}
          ></Input>
          <Input
            type="email"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <TextArea
            type="textarea"
            placeholder="Escriba un mensaje..."
            onChange={(e) => setMessage(e.target.value)}
          ></TextArea>
          <Button type="submit">Enviar</Button>
        </Form>
        {error && <span style={{ color: "red", marginTop: "10px" }}>Ha ocurrido un error</span>}
      </Container>
      <Footer />
    </>
  )
}






