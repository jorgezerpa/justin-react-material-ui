import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    container: {
      overflowX: 'hidden',
    },
    Button: {
      fontWeight: '600',
      padding: '10px 100px',
      [theme.breakpoints.down('sm')]: {
        width: '80%',
      },
    },
    title:{
      fontWeight: '600',
    },
  }));
  