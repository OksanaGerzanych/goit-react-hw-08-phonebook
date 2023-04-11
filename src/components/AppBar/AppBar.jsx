import { AuthNav } from "components/AuthNav/AuthNav"
import { Navigation } from "components/Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu.styled";

export const AppBar = () => {

    return (
        <header>
            <AuthNav />
            <Navigation />
            <UserMenu />
       </header>
    );
};