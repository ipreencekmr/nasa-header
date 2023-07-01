import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Header = () => {
  const { locale } = useIntl();

  const loginUrl = `/${locale}/auth/signin`;
  const homeUrl = `/${locale}/home`;
  const aboutUrl = `/${locale}/about`;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            NASA
          </Typography>
          <Button
            color="inherit"
            href={homeUrl}
          >Home
          </Button>
          <Button
            color="inherit"
            href={aboutUrl}
          >About
          </Button>
          <Button
            color="inherit"
            href={loginUrl}
          >Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

Header.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default Header;
