
import React, { useState, useContext } from 'react'
import {
  Container,
  Wrapper,
  Box,
  Title,
  Text,
  Input,
  Button,
  UserImg,
  Label
} from './SettingsStyle'
import { Context } from '../../context/Context'
import axios from 'axios'
import { FaPlus } from 'react-icons/fa'

export default function Settings() {

  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      email,
      password,
    };
    if (!email || !password)
      return alert("Rellene todos los campos")
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    try {
      const res = await axios.put(`/users/${user._id}`, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      window.location.reload()
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Actualice su perfil de usuario</Title>
        <Box>
          <UserImg src={file ? URL.createObjectURL(file) : PF + user.profilePic} />
          <Label htmlFor="fileInput">
            <FaPlus /> Adicione una imagen
          </Label>
          <Input
            style={{ display: 'none' }}
            type="file" id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Text>Email</Text>
          <Input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Text>Contraseña</Text>
          <Input
            type="password"
            placeholder="Ingrese una nueva contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleSubmit} > Guardar </Button>
          {success && (
            <span style={{ color: "green", textAlign: "center", marginTop: "20px" }} >
              Su perfil ha sido actualizado...
            </span>
          )
          }
        </Box>
      </Wrapper>
    </Container>
  )
}
