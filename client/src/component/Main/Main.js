import React, { useEffect, useState } from 'react'
import About from './About'
import Posts from './Posts/Posts'
import axios from 'axios';
import { useLocation } from 'react-router';

const Main = () => {
  const url = "http://localhost:5000/api";
  const [posts,setPosts] = useState([]);

  const location = useLocation();
  const search =location.search

  useEffect(()=>{
   const fetchPosts = async () =>{
      const res = await axios.get(`${url}/posts`+search)
      console.log(res);
      setPosts(res.data);
   }
   fetchPosts()
  },[location])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-9">
                   <Posts posts={posts}/>
                </div>
                <div className="col-md-3">
                    <About/>
                </div>
            </div>
            
        </div>
    )
}

export default Main
