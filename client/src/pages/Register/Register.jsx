import React, { useState, useContext } from "react";
import { Container, Title, Form, Label, Input, Button } from "./RegisterStyle";
import axios from "axios";
import { register } from "../../service/api";
import { Context } from "../../context/Context";

export default function Register() {
  const { user, dispatch, isFetching } = useContext(Context);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      // const res = await axios.post("/auth/register", {
      //   username,
      //   email,
      //   password,
      // });
      // res.data && window.location.replace("/login");
      const data = await register({
        username,
        email,
        password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Container>
      <Title>Registar</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Nombre</Label>
        <Input
          type="text"
          placeholder="Escriba su nombre..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Escriba su email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label>Contraseña</Label>
        <Input
          type="password"
          placeholder="Escriba su contraseña..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit"> Registrar </Button>
        {error && (
          <span style={{ color: "red", marginTop: "10px" }}>
            Ha ocurrido un error
          </span>
        )}
      </Form>
    </Container>
  );
}
