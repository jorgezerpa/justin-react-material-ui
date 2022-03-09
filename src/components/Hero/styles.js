import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme)=>({
      span:{
        color: '#D2483D'
      },
      hero:{
        marginTop: '50px',
        marginBottom: '100px',
      },
      heroText: {
        marginTop: '25px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: '10px',
        [theme.breakpoints.down('sm')]: {
          alignItems: 'center',
        },
      },
      heroImage: {
          width: '200px'
      },
}))