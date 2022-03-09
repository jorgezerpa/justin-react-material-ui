import React from 'react'

import { Grid, Typography, Button } from '@material-ui/core';

import useStyles from './styles';

const Cta = () => {

    const classes = useStyles();

  return (
    <>
        <Grid  className={classes.container} container direction='column' spacing={1} justifyContent='flex-start' alignItems='center'>
            <Grid item>
                <Typography variant='body2'>
                    Commandez maintenant ! 
                </Typography>
            </Grid>
            <Grid item>
                <Button color='secondary' variant='contained'>
                    CLICK & COLLECT
                </Button>
            </Grid>
        </Grid>                

    </>
  )
}

export default Cta