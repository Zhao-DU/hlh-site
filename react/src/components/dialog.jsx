import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },  
});

const theme = createMuiTheme({
  typography: {
    fontSize: 21,
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {  

  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >        
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          TERMS OF USAGE
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            While we strive to ensure the accuracy of the information available on this site, it is not intended to be professional advice and is not intended to replace personal consultation with a qualified physician, pharmacist, or other health care professional. 
            The reader should not disregard medical advice or delay seeking it because of something found on this site. The reader is advised to also consult local medical sources.
          </Typography>
          <Typography gutterBottom>
            <b>By using fighthlh.com, you agree that fighthlh.com and its creators will not be held liable for any decisions made as a result of the information being made available here .</b>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            I UNDERSTAND
          </Button>
        </DialogActions>        
      </Dialog>
    </ThemeProvider>    
  );
}