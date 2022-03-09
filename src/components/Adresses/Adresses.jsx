import React from 'react'

import { images } from '../../constants/images';

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Card, CardContent, CardMedia } from '@material-ui/core';


const useStyles = makeStyles((theme)=>({
  title:{
    fontWeight: '600',
    borderBottom: '3px solid #D2483D',
    marginBottom: '50px'
  },
    adresses: {
        marginBottom: '100px',
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
    },
    card:{
      boxShadow: 'none'
    },
    adressesItems:{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
    },
}))


const Adresses = () => {
  const classes = useStyles();

  return (
    <div>
         <Grid className={classes.adresses} container justifyContent='space-evenly' alignItems='center' direction='column'>  
                  <Grid item>
                      <Typography variant='h6' gutterBottom >NOS ADRESSES</Typography>
                  </Grid>  
                  
                  <Grid item className={classes.adressesItems}>
                      { images.map((image, key)=>(
                          <Card className={classes.card} key={key}>
                              <CardMedia>
                                    <img src={ image } alt="" />
                              </CardMedia>
                              <CardContent>   
                                  <Typography variant='body1'>Yummy Noodle</Typography>
                                  <Typography variant='body2'>185 rue de Lancry</Typography>
                                  <Typography variant='body2'>75010 Paris</Typography>
                              </CardContent>
                          </Card>
                      ))}
                  </Grid> 
        </Grid>

    </div>
  )
}

export default Adresses