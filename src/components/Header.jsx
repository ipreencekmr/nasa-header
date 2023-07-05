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
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            flexGrow={1}
          >
            <Typography variant="h6" component="div">
              NASA
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
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
          </Box>
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
