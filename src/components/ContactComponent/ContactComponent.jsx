import React from 'react'

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: '600',
    },
    ContactComponent: {
        marginTop: '100px',
        padding: '0 150px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            padding: '0 10px',
          },
    },
        
}));


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