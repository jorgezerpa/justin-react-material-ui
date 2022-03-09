import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme)=>({
    reseauxSociaux: {
        padding : '50px 200px 0 200px',
        [theme.breakpoints.down('sm')]: {
          padding : '40px 100px 0 100px',
        },
        [theme.breakpoints.down('xs')]: {
          padding : '10px 10px 0 10px',
        },
        },
        titleContainer: {
          width: '100%',
          display: 'flex',
          justifyContent:'center',
        },
      image: {
        width: '100%',
      }
}))
