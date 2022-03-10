import React from 'react'

import logo from '../../assests/images/Logo.png';
import { menu } from '../../constants/menu';

import { Grid, Typography } from '@material-ui/core';

import { Cta } from '../../components';

import useStyles from './styles';

const Menu = () => {
  const classes = useStyles();

  return (
    < >
      <Cta />
        <div className={classes.titleContainer}>
            <Typography variant='h3' className={classes.title}>MENU</Typography>  
            <Typography variant='body1'>
              Nos menus sont <span style={{color: 'rgba(255,0,0,.7)'}}>communs</span> à tous nos restaurants
              </Typography>  
        </div>

        <div className={classes.imageContainer}>
            <img src={logo} alt="" style={{width:'100px'}} />
        </div>

      <Grid className={classes.container} container direction='column' justifyContent='center' alignItems='center' spacing={2}>

                          <Grid item>
                              <Typography variant='h6' >entrées</Typography>
                          </Grid> 
                        {
                          menu.entries.map((item, key)=>(
                              <Grid item className={classes.menuItem}>
                                  <Typography variant='subtitle1'>{item.name}</Typography>
                                  <Typography variant='body2'>{item.description}</Typography>  
                              </Grid> 
                             
                          ))
                        }
         

                          <Grid item>
                              <Typography variant='h6' >plats</Typography>
                          </Grid> 
                        {
                          menu.plates.map((item, key)=>(
                              <Grid item className={classes.menuItem}>
                                  <Typography variant='subtitle1'>{item.name}</Typography>
                                  <Typography variant='body2'>{item.description}</Typography>  
                              </Grid> 
                             
                          ))
                        }
         

                          <Grid item>
                              <Typography variant='h6' >desserts</Typography>
                          </Grid> 
                        {
                          menu.deserts.map((item, key)=>(
                              <Grid item className={classes.menuItem}>
                                  <Typography variant='subtitle1'>{item.name}</Typography>
                                  <Typography variant='body2'>{item.description}</Typography>  
                              </Grid> 
                             
                          ))
                        }
         
                        
                          <Grid item>
                              <Typography variant='h6' >boissons</Typography>
                          </Grid> 
                        {
                          menu.boissons.map((item, key)=>(
                              <Grid item className={classes.menuItem}>
                                  <Typography variant='subtitle1'>{item.name}</Typography>
                                  <Typography variant='body2'>{item.description}</Typography>  
                              </Grid> 
                             
                          ))
                        }
         
      </Grid>
    
    </>
  )
}

export default Menu