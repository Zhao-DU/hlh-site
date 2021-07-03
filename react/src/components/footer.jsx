import React from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 23,
  },
});

function Copyright() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          fighthlh.com
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </ThemeProvider>
  );
}

const Footer = () => (
  <div className="footer">
    <p style={{textAlign:"center"}}>.</p>
      <p style={{textAlign:"center"}}> <Copyright/> </p>
  </div>
);

export default Footer;