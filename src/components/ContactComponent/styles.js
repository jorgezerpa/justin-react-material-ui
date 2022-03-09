import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    ContactComponent: {
        marginTop: '100px',
        padding: '0 150px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            padding: '0 10px',
          },
    },
}))