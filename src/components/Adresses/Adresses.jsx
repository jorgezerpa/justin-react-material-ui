import React from 'react'

import { images } from '../../constants/images';

import { Grid, Typography, Card, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const Adresses = () => {
  const classes = useStyles();

  return (
    <div>
        <div className={classes.titleContainer}>
            <Typography variant='h6' gutterBottom >NOS ADRESSES</Typography>
        </div>
         <Grid className={classes.adresses} spacing={10} container justifyContent='center' alignItems='center'>  
                  
                      { images.map((image, key)=>(
                            <Grid key={key} item xs={9} sm={3} md={3}>
                                    <Card className={classes.card} key={key}>
                                        <CardMedia>
                                                <img className={classes.image} src={ image } alt="" />
                                        </CardMedia>
                                        <CardContent>   
                                            <Typography variant='body1'>Yummy Noodle</Typography>
                                            <Typography variant='body2'>185 rue de Lancry</Typography>
                                            <Typography variant='body2'>75010 Paris</Typography>
                                        </CardContent>
                                    </Card>
                            </Grid> 
                      ))}
        </Grid>

    </div>
  )
}

export default Adresses