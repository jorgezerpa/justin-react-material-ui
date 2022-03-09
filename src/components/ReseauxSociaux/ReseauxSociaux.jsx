import React from 'react';

import { images2 } from '../../constants/images'; 

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    reseauxSociaux: {
        marginBottom: '100px',
        },
      reseauxSociauxItems:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '100px',
      },
}))



const ReseauxSociaux = () => {
    const classes = useStyles();
  
    return (
        <div>
            <Grid className={classes.reseauxSociaux} container justifyContent='space-evenly' alignItems='center' direction='column'>  
                      <Grid item>
                          <Typography variant='h6' className={classes.title} >retrouvez-nous sur les réseaux sociaux</Typography>
                      </Grid>  
                      
                      <Grid item className={classes.reseauxSociauxItems}>
                          { images2.map((image, key)=>(
                            <div key={key} >
                              <div>
                                    <img src={image} alt="" />  
                              </div>
                            </div>
                          ))
                          }
                      </Grid> 
            </Grid>
           

    </div>
  )
}

export default ReseauxSociaux