import React from 'react'

import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';

const ContactComponent = () => {
  const classes = useStyles();
  
    return (
    <div>
        <Grid className={classes.ContactComponent} container direction='column' justifyContent='center' alignItems='center'>
            <Grid item>
                <Typography gutterBottom variant='h6'>
                contactez-nous
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant='body2'>
                Vous souhaitez nous poser une question, nous faire un feedback, ou tout simplement nous contacter ?
Écrivez-nous à yummy@noodles.fr ou appelez nous au 01 13 86 23 42
                </Typography>
            </Grid>
        </Grid> 
    </div>
  )
}

export default ContactComponent