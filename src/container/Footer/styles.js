import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
        container:{
                padding: '30px 75px',
                overflowX: 'hidden',
                width: '100vw',
                marginTop: '100px',
                background: '#000',
                [theme.breakpoints.down('sm')]: {
                        justifyContent: 'center',
                
           }, 
        },
      }));
