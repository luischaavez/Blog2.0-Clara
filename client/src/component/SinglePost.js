import React, { useContext, useEffect, useState } from 'react'
import img from './assests/3.jpg'
import { useLocation } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from './context/Context';

const SinglePost = () => {
    const {user} = useContext(Context);
  let username = null;
  if(user){
      username = user.username;
  }
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const url = "http://localhost:5000/api";
  console.log(path);

  const handleDelete=async (e)=>{
      e.preventDefault();
      try {
         await axios.delete(`${url}/posts/${path}` ,{
             data:{ username: username }
          })
          window.location.replace('/');
      } catch (err) {
          console.log(err);
      }
  }
 
  

  const  [post,setPost] = useState({});
  useEffect(()=>{
      const fetchPost = async ()=>{
          const res = await axios.get(`${url}/posts/`+path);
          setPost(res.data);
          console.log(res.data.title);
      };
      fetchPost();
  },[path])
   console.log(username);
    return (
        <div>
            <img style={{width: '100%', height: '400px', marginTop: '17px', borderRadius: '11px', objectFit: 'cover'}} src={img} />
            <div style={{display: 'flex',alignItems: 'center', justifyContent: 'space-between'}}><h1>{post.title}.</h1>
             
          {username===post.username &&  <p style={{marginTop:'10px'}}><span><Link to={`/edit/${path}`}><i style={{color:'teal',marginRight:'7px', fontSize:'20px',cursor:'pointer'}} class="fas fa-edit"></i></Link></span> <span><i style={{color:'tomato', fontSize:'20px',cursor:'pointer'}} onClick={handleDelete} class="fas fa-trash-alt"></i></span></p>
}
           </div>
            <div style={{display:'flex',justifyContent:'space-between',color:'#c98a2d'}}>
                <p>Author : <b> <Link to= {`/?user=${post.username}`}> {post.username} </Link></b></p>
                <p style={{fontStyle:'italic'}}>{new Date(post.createdAt).toDateString()}</p>
            </div>
            <p style={{lineHeight:'25px'}}>{post.desc} </p>
        </div>
    )
}

export default SinglePost
