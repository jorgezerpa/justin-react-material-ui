import React from 'react';

import { images2 } from '../../constants/images'; 

import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';


const ReseauxSociaux = () => {
    const classes = useStyles();
  
    return (
        <div>
          <div className={classes.titleContainer}>
            <Typography variant='h6' gutterBottom >retrouvez-nous sur les réseaux sociaux</Typography>
          </div>
            <Grid className={classes.reseauxSociaux} spacing={2} container justifyContent='center' alignItems='center'>   
                  { images2.map((image, key)=>(
                      <Grid key={key} item xs={7} sm={4} md={4} >
                            <img className={classes.image} src={image} alt="" />                              
                        </Grid> 
                    ))
                  }
            </Grid>
           

    </div>
  )
}

export default ReseauxSociaux