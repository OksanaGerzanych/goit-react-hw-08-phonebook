import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { Header } from './AppBar.styled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

export const AppBarr = () => {
  const { isLoggedIn } = useAuth();
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
      </AppBar>
      </Box>
  );
};
