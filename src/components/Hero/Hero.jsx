import React from 'react';

import logo from '../../assests/images/Logo.png';

import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme)=>({
      span:{
        color: '#D2483D'
      },
      hero:{
        marginTop: '50px',
        marginBottom: '100px',
      },
      heroText: {
        marginTop: '25px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: '10px',
        [theme.breakpoints.down('sm')]: {
          alignItems: 'center',
        },
      },
      heroImage: {
          width: '200px'
      },
}))


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