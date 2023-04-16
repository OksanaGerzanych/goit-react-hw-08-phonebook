import { useAuth } from 'hooks';
import { NavLinkStyled } from './Navigation.styled';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <Toolbar>
        <NavLinkStyled to="/">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
                      
          >
            <HomeSharpIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} marginRight="50px">
            Home
          </Typography>
        </NavLinkStyled>
        {isLoggedIn && (
          <NavLinkStyled to="/contacts">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="home"
              sx={{ mr: 2 }}
            >
              <PermContactCalendarIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
              Contacts
            </Typography>
          </NavLinkStyled>
        )}
      </Toolbar>
    </nav>
  );
};
