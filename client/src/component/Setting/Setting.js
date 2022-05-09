import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import { useLocation ,useNavigate} from 'react-router'
import profile from '../assests/profile.jpg'
import { Context } from '../context/Context'

const Setting = () => {

    
    const url = "http://localhost:5000/api";
    const location = useLocation();
    const path = location.pathname.split("/")[2];
     const user = useContext(Context);
     const {dispatch} = useContext(Context);
    console.log(user.user);
    const [userr,setUserr] = useState(user); 
    console.log(userr);
    const navigate = useNavigate();
    const [username,setUsername] = useState(userr.user.username);
    const [email, setEmail] = useState(userr.user.email);
    const [password, setPassword] = useState(userr.user.password);
    const handleUpdate =async (e) =>{
        // dispatch({ type: "UPDATE_START" });
          e.preventDefault();
          console.log("Update");
    const res =   await  axios.put(`${url}/users/${path}`,{
              username,email,password
          })
          dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
          setUserr(userr);
          console.log(userr);
    }
    const handleDelete =async () =>{
      await axios.delete(`${url}/users/${path}`);
      dispatch({type:"LOGOUT"})
      console.log('successfull Deleted');
      navigate('/register');
    }
     return (
        <div style={{margin:'20px 0px'}}>
            <Form onSubmit={handleUpdate} className="col-md-6" style={{margin:'auto'}}>
                <div>
                    <br/><br/>
                <img style={{width:'150px', height:'150px', borderRadius:'77px'}} src={profile} />
                <label htmlFor="fileInput"><i style={{fontSize:'28px',marginLeft:'10px',cursor:'pointer'}}  class="fas fa-user-edit"></i></label>
                <input type="file" id="fileInput" style={{display:'none'}}/>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}  placeholder="Enter username" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  value={password}  onChange={(e)=>{setPassword(e.target.value)}}  placeholder="Password" />
                </Form.Group>
                <Button style={{marginBottom:'6px'}} variant="outline-primary"  type="submit">
                    Update
                </Button>
                <Button style={{marginBottom:'6px', marginLeft:'7px'}} onClick={handleDelete} variant="outline-primary">
                    Delete Acccount
                </Button>
                <br/><br/>
                <br/><br/>
                </div>
            </Form>
            <hr/>
        </div>
    )
}

export default Setting
