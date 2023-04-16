import { NavLinkStyled } from "components/Navigation/Navigation.styled" 
import Button from '@mui/material/Button';

export const AuthNav = () => {
    return (
        <div>
            <NavLinkStyled to="/register"> <Button color="inherit">Register</Button></NavLinkStyled>
            <NavLinkStyled to="/login"><Button color="inherit">LogIn</Button> </NavLinkStyled>
        </div>
    )
}