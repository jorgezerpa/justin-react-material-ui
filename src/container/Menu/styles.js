import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    container:{
      margin: '0 auto',
        overflowX: 'hidden',
        width: '70%',
        gap: '40px',
        background: '#fff',
        [theme.breakpoints.down('sm')]: {
          width: '100%',
        },
      }, 
      titleContainer: {
          margin:'30px',
          marginTop: '0',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
      },
      imageContainer:{
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
      },
      menuItem:{
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

