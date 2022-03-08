import React from 'react'

import { Grid, Typography } from '@material-ui/core';

import { Cta } from '../../components';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
      fontWeight: '600',
      fontSize: '5rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '3rem',
      },
    }, 
    container:{
        width: '100%',
        gap: '40px',
      } 
  }));



const Menu = () => {
  const classes = useStyles();

  return (
    <>
      <Cta />

      <Grid className={classes.container} container direction='column' justifyContent='center' alignItems='center' spacing={2}>
          <Grid item>
                  <Typography type='h2' className={classes.title}>MENU</Typography>  
          </Grid>  
          <Grid item>
                  <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, ipsam veniam</Typography>  
          </Grid>  
          <Grid item>
                  <div style={{width: '70vw', height: '1000px', background: '#ccc'}}></div>
          </Grid>  
      </Grid>
    
    </>
  )
}

export default Menu