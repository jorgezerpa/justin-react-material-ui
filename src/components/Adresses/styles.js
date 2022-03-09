import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme)=>({
       adresses: {
          marginBottom: '100px',
          padding:'0 30px',
          [theme.breakpoints.down('xs')]: {
            padding: '0 10px',
          },
      },
      titleContainer:{
        width: '100%',
          display: 'flex',
          justifyContent: 'center',
      },
      card:{
        boxShadow: 'none',
      },
      image:{
        width: '100%'
      }
  }))
  