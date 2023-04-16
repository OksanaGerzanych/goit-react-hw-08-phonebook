import { logOut } from "redux/auth/operations";
import { Wrapper} from "./UserMenu.styled"
import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const UserMenu = () => {
    const dispatch = useDispatch();
    
     const { user } = useAuth();
    return (
        <Wrapper>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}  color="#000033">Hello, { user.name}!</Typography>
            
            <Button color="inherit"  type="click" onClick={() => dispatch(logOut())}>LogOut</Button>
        </Wrapper>
    )
}