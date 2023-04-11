import { NavLink } from 'react-router-dom';
import { NavLink } from './Navigation.styled';

export const Navigation = () => {
    return (
        <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink> 
       </Nav> 
    )
}