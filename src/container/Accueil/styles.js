import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    Button: {
      fontWeight: '600',
      padding: '10px 100px',
      [theme.breakpoints.down('sm')]: {
        width: '80vw',
      },
    },
    title:{
      fontWeight: '600',
    },
    hero:{
      marginTop: '50px',
      marginBottom: '100px',
    },
    heroText: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      [theme.breakpoints.down('sm')]: {
        alignItems: 'center',
      },
    },
    adresses: {
        marginBottom: '100px',
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
    },
    adressesItems:{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
    },
    savoirFaire: {
      padding: '0 150px 0 150px',
      marginBottom: '100px',
      [theme.breakpoints.down('sm')]: {
        padding: '0 20px',
        width: '98vw',
      },
    },
    restaurants: {
      marginBottom: '100px',
      gap: '50px',
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',

      },
    },
    
    restaurantsItems:{
      padding: '0 200px 0 200px',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      gap: '40px',
    },
    reseauxSociaux: {
      marginBottom: '100px',
      gap: '50px',
      },
    reseauxSociauxItems:{
      padding: '0 200px 0 200px',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      gap: '40px',
    },
    reseauxSociauxItems:{
      padding: '0 200px 0 200px',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      gap: '40px',
    },
    
  }));
  