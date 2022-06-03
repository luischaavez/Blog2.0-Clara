import React, { useContext } from 'react'
import {
    Container,
    Left,
    Center,
    Menu,
    Right,
    MenuLink,
    Logout,
    LoginLogout,
    Button,
    UserImg,
    Sidebar
} from './NavbarStyle'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'


export default function Navbar({ open, alternate }) {

    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <Container>
            <Left>
            </Left>
            <Center>
                <Menu>
                    <MenuLink>
                        <Link to='/'>Home</Link>
                    </MenuLink>
                    <MenuLink>
                        <Link to='/publications'>Posts</Link>
                    </MenuLink>
                    {user ? (
                        <MenuLink>
                            <Link to='/write'>Write</Link>
                        </MenuLink>
                    ) : (<></>)}
                    <MenuLink>
                        <Link to='/about'>About</Link>
                    </MenuLink>
                    <MenuLink>
                        <Link to='/contact'>Contact us</Link>
                    </MenuLink>
                </Menu>
                <Right>
                    {user ? (
                        <>
                            <Logout onClick={handleLogout}>{user && "Log Out"}</Logout>
                            <Link to='/settings'>
                                <UserImg src={PF + user.profilePic} alt='' />
                            </Link>
                        </>
                    ) : (
                        <LoginLogout>
                            <Link to='/login'>
                                <Button>Log in</Button>
                            </Link>
                            <Link to='/register'>
                                <Button>Register</Button>
                            </Link>
                        </LoginLogout>
                    )}
                </Right>
            </Center>
            <Sidebar open={open} onClick={alternate}> <FaBars /> </Sidebar>
        </Container>
    )
}
