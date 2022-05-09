import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import profile from '../assests/profile.jpg'

const About = () => {

    const [cats,setCats] = useState([]);
    const url = "http://localhost:5000/api";

    useEffect(()=>{
        const fetchCat = async () =>{
            const res = await axios.get(`${url}/category`)
            setCats(res.data);
        }
        fetchCat();
    },[])
    return (
        <div style={{flex:'3', textAlign:'center'}}><hr/>
            <h3 style={{fontSize:'20px', fontFamily:'Lato'}}>ABOUT ME</h3>
            <hr/>
            <img style={{width: 'auto',height: '190px',borderRadius: '8px'}} src={profile} />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum sed arcu non odio euismod. </p>
            <hr/><h7 style={{fontSize:'20px', fontFamily:'Lato'}}>Categories</h7><hr/>
            <div className="container">
                <div className="row">
                  {
                      cats.map((c)=>
                          

                              <p><Link to={`/?cat=${c.name}`}>{c.name}</Link></p>  
                          
                      
                      )
                  }
                </div>
            </div>
          </div>
    )
}

export default About
