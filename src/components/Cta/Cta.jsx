import React from 'react'

import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    container:{
        overflowX:'hidden',
        background: '#D2483D',
        color: '#fff',
        height: '150px',
        paddingTop: '30px',
        marginBottom: '100px',
        borderTop: '1px solid #ccc',
        borderBottom: '1px solid #ccc',
    },
}));

const Cta = () => {

    const classes = useStyles();

  return (
    <>
        <Grid  className={classes.container} container direction='column' spacing={1} justifyContent='flex-start' alignItems='center'>
            <Grid item>
                <Typography>
                    Commandez maintenant ! 
                </Typography>
            </Grid>
            <Grid item>
                <Button color='secondary' variant='contained' style={{fontWeight: '600', padding: '5px 40px', borderRadius: '0'}}>
                    CLICK & COLLECT
                </Button>
            </Grid>
        </Grid>                

    </>
  )
}

export default Cta