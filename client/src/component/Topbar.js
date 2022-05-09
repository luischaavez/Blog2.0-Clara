import React, { useContext } from 'react'
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profile from './assests/profile.jpg'
import { Context } from './context/Context';
import './nav.css'

const Topbar = () => {

     const {user,dispatch} = useContext(Context);
     const handleLogout =()=>{
         dispatch({type:"LOGOUT"})
     }
     console.log(user);
    return (
        
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand to='/' style={{fontFamily:'Lora'}}>Personal blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="linkk"  to="/">HOME</Link>
                            {/* <Link className="linkk" to="/about">ABOUT</Link> */}
                            {/* <Link className="linkk" to="#contact">CONTACT</Link> */}
                            <Link className="linkk" to="/write">WRITE</Link>
                           {user ?  <Link className="linkk" to='/login' onClick={handleLogout}>LOGOUT</Link> : <Link className="linkk" to="/logout"></Link>}
                        </Nav>
                        <Nav>
                            {user ? 
                            <Link className="linkk" to ={`/setting/${user._id}`}><img style={{width: '40px',height: '40px', borderRadius: '95px'}} src={user.profilePic}></img></Link> :  <Link style={{marginTop: '5px'}} className="linkk" to="/login">Sign in</Link>}
                            <Form className="d-flex" style={{marginLeft:"15px",}}>
                            <FormControl
                               style={{marginLeft:'10px'}}
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Topbar
