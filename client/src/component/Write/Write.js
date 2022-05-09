import React, { useContext, useState } from 'react'
import { InputGroup, Button, FormControl,Form} from 'react-bootstrap'
import './write.css';
import img from '../assests/2.jpg'
import axios from 'axios';
import { Context } from '../context/Context';

const Write = () => {
    const {user} = useContext(Context);
    const username = user.username;
    const url = "http://localhost:5000/api";
    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');

    const handleChangee= async (e)=>{
        e.preventDefault()
        console.log("Submit");
        try {
            const res = await axios.post(`${url}/posts/`,{
                title,desc,username
            })
            console.log(res);
            const idd = res.data._id;
            res.data && window.location.replace(`/post/${idd}`);
        
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="container">
              <Form onSubmit={handleChangee}>
                <Button type="submit" variant="outline-success" style={{borderRadius:'5px',float:'right' ,margin:'10px'}}>Publish</Button>{' '}
                <img src={img} style={{}} className="imgg" />
                <div>
                <InputGroup style={{alignItems:'center'}}>
                <label htmlFor="fileInput"><i style={{fontSize:'22px',marginRight:'8px'}} class="fas fa-plus-circle" ></i></label>
                <input type="file" id="fileInput" style={{display:'none'}}/>
                    <FormControl  as="textarea" aria-label="With textarea" onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title"/>
                </InputGroup>
                </div>
             <FormControl className="inputt" as="textarea" aria-label="With textarea" onChange={(e)=>{setDesc(e.target.value)}}  rows="5" placeholder="Tell your story..."/>
             </Form>
        </div>
    )
}

export default Write
