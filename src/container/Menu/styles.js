import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    container:{
        overflowX: 'hidden',
        width: '100%',
        gap: '40px',
      }, 
    menuContainer: {
      with: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '50px',
    },
    menuSection: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '30px'
    },
    menuItem: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    name:{
      fontWeight: '600',
      marginBottom: '10px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      }
    },
    description:{
      [theme.breakpoints.down('sm')]: {
        fontSize: '.7rem',
      },
    }

  }));

