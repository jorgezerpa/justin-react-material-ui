import React from 'react';

import logo from '../../assests/images/Logo.png';

import { Grid, Typography, Button } from '@material-ui/core';

import useStyles from './styles';

const Hero = () => {
    const classes = useStyles();

  return (
    <div>
        <Grid className={classes.hero} container justifyContent='center' alignItems='flex-start' spacing={10} >  
          <Grid item className={classes.heroText}>
              <Typography color='secondary' variant='h5'>YUMMY NOUILLES</Typography>
              <Typography  variant='body1'>Les nouilles les plus <span className={classes.span}>yummy</span> de tout Paris</Typography>
              <Button color='secondary'  variant="contained">CLICK & COLLECT</Button>
          </Grid>
          
          <Grid item >
            <div>
                <img className={classes.heroImage} src={logo} alt="" />
            </div>
          </Grid>
      </Grid>
    </div>
  )
}

export default Hero