import React from 'react'
import frontimg from './assests/4.jpg';
import './head.css'

const Head = () => {
    return (
        <div>
            <div className="back" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <center><h5 className="firstt">Coding Exercise</h5> </center>
              <center>  <h1 className="secondd">BLOG</h1> </center>
            </div>
            {/* <img style={{ height: '500px', width: '100%', objectFit: 'cover', marginTop: '20px' }} src={frontimg} /> */}
        </div>
    )
}

export default Head
