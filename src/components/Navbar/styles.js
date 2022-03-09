
import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    nav: {
        marginBottom: '10px',
    },
    AppBar: {
        boxShadow: 'none',
        },
    Toolbar: {
        boxShadow: 'none',
    },
    menuItems: {
        color: '#000',
       textDecoration: 'none',
       [theme.breakpoints.down('xs')]: {
            display: 'none',
      }, 
    },
    menuIcon:{
        visibility: 'hidden',
        [theme.breakpoints.down('xs')]: {
             visibility: 'visible'
       }, 
    }
  }));
