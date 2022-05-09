import axios from 'axios';
import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
const Admin = () => {

    const url = "http://localhost:5000/api";
    useEffect(async ()=>{
        try {
            const res =await axios.get(`${url}/users`);
             console.log(res);
        } catch (error) {
            console.log(error);
        }
  
     
    },[])
    return (
        <div>
            <h1>Get All Users</h1>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}

export default Admin
