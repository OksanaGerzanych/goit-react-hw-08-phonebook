import { Wrapper, Username, Button } from "./UserMenu.styled"

export const UserMenu = () => {
    return (
        <Wrapper>
            <Username>Welcome!</Username>
            <Button type="click">LogOut</Button>
        </Wrapper>
    )
}