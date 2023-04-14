import { logOut } from "redux/auth/operations";
import { Wrapper, Username, Button } from "./UserMenu.styled"
import { useAuth } from "hooks";
import { useDispatch } from "react-redux";

export const UserMenu = () => {
    const dispatch = useDispatch();
    
     const { user } = useAuth();
    return (
        <Wrapper>
            <Username>Hello, { user.name}!</Username>
            <Button type="click" onClick={() => dispatch(logOut())}>LogOut</Button>
        </Wrapper>
    )
}