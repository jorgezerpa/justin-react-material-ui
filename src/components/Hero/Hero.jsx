import React from 'react';

import logo from '../../assests/images/Logo.png';

import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme)=>({
    Button: {
        [theme.breakpoints.down('sm')]: {
          width: '80%',
        },
      },
      span:{
        color: '#D2483D'
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
}))


const Hero = () => {
    const classes = useStyles();

  return (
    <div>
        <Grid className={classes.hero} container justifyContent='center' alignItems='center' spacing={10} >  
          <Grid item className={classes.heroText}>
              <Typography color='secondary' variant='h5'>YUMMY NOUILLES</Typography>
              <Typography variant='subtitle2'>Les nouilles les plus <span className={classes.span}>yummy</span> de tout Paris</Typography>
              <Button color='secondary' className={classes.Button} variant="contained">CLICK & COLLECT</Button>
          </Grid>
          
          <Grid item >
            <div>
                <img src={logo} alt="" />
            </div>
          </Grid>
      </Grid>
    </div>
  )
}

export default Hero