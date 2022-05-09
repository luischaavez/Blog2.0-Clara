import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { InputGroup, Button, FormControl,Form} from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router';
import { Context } from './context/Context';
import img from '../component/assests/2.jpg'

const Edit = () => {
    const {user} = useContext(Context);
    
    const navigate = useNavigate()
    const username = user.username;
    const [title ,setTitle] = useState('');
    const [ desc , setDesc] = useState(''); 


    const url = "http://localhost:5000/api";
    const location = useLocation();
    const path = location.pathname.split("/")[2];
   useEffect(()=>{
    const fetchPost = async ()=>{
        const res = await axios.get(`${url}/posts/`+path);
        // setPost(res.data);
        console.log(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
    };
    fetchPost();  
   },[path]) 

  const handleUpdate= async (e)=>{
       e.preventDefault();
      await axios.put(`${url}/posts/${path}`,{
          title,desc,username
      })
     navigate(`/post/${path}`);
      console.log("success");
   }

    return (
        <div className="container">
        <Form onSubmit={handleUpdate}>
          <Button type="submit" variant="outline-success" style={{borderRadius:'5px',float:'right' ,margin:'10px'}}>Update</Button>{' '}
          <img src={img} style={{}} className="imgg" />
          <div>
          <InputGroup style={{alignItems:'center'}}>
          <label htmlFor="fileInput"><i style={{fontSize:'22px',marginRight:'8px'}} class="fas fa-plus-circle" ></i></label>
          <input type="file" id="fileInput" style={{display:'none'}}/>
              <FormControl  as="textarea" aria-label="With textarea" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title"/>
          </InputGroup>
          </div>
       <FormControl className="inputt" as="textarea" aria-label="With textarea" value={desc} onChange={(e)=>{setDesc(e.target.value)}}  rows="5" placeholder="Tell your story..."/>
       </Form>
  </div>
    )
}

export default Edit
