import React from 'react'
import img1 from '../../assests/1.jpg';
import './Post.css';
import {Link} from 'react-router-dom'

const Post = ({post}) => {

    return (
        <div className="headd">
            <img style={{width: '100%',height: '200px',borderRadius: '13px',objectFit:'cover'}} src={img1} />
            {post.category.map((c)=>(
               <p>{c.name}</p>
                ))}
            <Link to= {`/post/${post._id}`}>
            <h1 style={{fontSize:'20px'}}>{post.title}</h1>
            </Link>
             <p>{new Date(post.createdAt).toDateString()}</p>
             <p className="desc">{post.desc}</p>                 
        </div>
    )
}

export default Post
