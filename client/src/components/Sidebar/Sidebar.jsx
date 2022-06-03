import React, { useContext } from 'react'
import {
    Container,
    Menu,
    MenuLink,
    BtnLogout
} from './SidebarStyle'
import { Context } from '../../context/Context'


export default function NavbarMobile({ open, alternate }) {

    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <Container open={open} alternate={alternate} onClick={alternate}>
            <Menu>
                <MenuLink onClick={alternate} to='/' > Home </MenuLink>
                <MenuLink onClick={alternate} to='/publications' > Posts </MenuLink>
                {user ? (
                    <MenuLink onClick={alternate} to='/write'> Write </MenuLink>
                ) : (
                    <></>
                )}
                <MenuLink onClick={alternate} to='/About'> About </MenuLink>
                <MenuLink onClick={alternate} to='/contact'> Contact </MenuLink>
            </Menu>
            <BtnLogout onClick={handleLogout}>{user && "log out"}</BtnLogout>
        </Container>
    )
}

