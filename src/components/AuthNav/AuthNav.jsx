import { Nav } from "components/Navigation/Navigation.styled" 

export const AuthNav = () => {
    return (
        <div>
            <Nav to="/register">Register</Nav>
            <Nav to="/login">LogIn</Nav>
        </div>
    )
}