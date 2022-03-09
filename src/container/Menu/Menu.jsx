import React from 'react'

import logo from '../../assests/images/Logo.png';
import { menu } from '../../constants/menu';

import { Grid, Typography } from '@material-ui/core';

import { Cta } from '../../components';

import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    title: {
      fontWeight: '600',
      [theme.breakpoints.down('sm')]: {
        fontSize: '3rem',
      },
    }, 
    container:{
        overflowX: 'hidden',
        width: '100%',
        gap: '40px',
      }, 
    menuContainer: {
      with: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '50px',
    },
    menuSection: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '30px'
    },
    menuItem: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    name:{
      fontWeight: '600',
      marginBottom: '10px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      }
    },
    description:{
      [theme.breakpoints.down('sm')]: {
        fontSize: '.7rem',
      },
    }

  }));



const Menu = () => {
  const classes = useStyles();

  return (
    < >
      <Cta />
        <div style={{padding:'20px', paddingLeft:'60px'}}>
            <Typography variant='h3' className={classes.title}>MENU</Typography>  
            <Typography variant='body1'>
              Nos menus sont <span style={{color: 'rgba(255,0,0,.7)'}}>communs</span> à tous nos restaurants
              </Typography>  
        </div>

      <Grid className={classes.container} container direction='column' justifyContent='center' alignItems='center' spacing={2}>
          
          <Grid item>
                  <img src={logo} alt="" style={{width:'10vw'}} />
          </Grid> 

          <Grid item>
                  <div className={classes.menuContainer}>
                    <div className={classes.menuSection}>
                      <Typography variant='h6' >entrées</Typography>
                        {
                          menu.entries.map((item, key)=>(
                              <div className={classes.menuItem}>
                                <Typography variant='body1'>{item.name}</Typography>
                                <Typography variant='body2'>{item.description}</Typography>
                              </div>
                          ))
                        }

                      </div>
                    <div className={classes.menuSection}>
                      <Typography variant='h6' >plats</Typography>
                          {
                            menu.plates.map((item, key)=>(
                                <div className={classes.menuItem}>
                                  <Typography variant='body1'>{item.name}</Typography>
                                  <Typography variant='body2'>{item.description}</Typography>
                                </div>
                            ))
                          }
                      
                      </div>
                    <div className={classes.menuSection}>
                      <Typography variant='h6' >desserts</Typography>
                          {
                            menu.deserts.map((item, key)=>(
                                <div className={classes.menuItem}>
                                  <Typography variant='body1'>{item.name}</Typography>
                                  <Typography variant='body2'>{item.description}</Typography>
                                </div>
                            ))
                          }
                      
                      </div>
                    <div className={classes.menuSection}>
                      <Typography variant='h6' >boissons</Typography>
                          {
                            menu.boissons.map((item, key)=>(
                                <div className={classes.menuItem}>
                                  <Typography variant='body1'>{item.name}</Typography>
                                </div>
                            ))
                          }
                      
                      </div>
                  </div>
          </Grid>  
      </Grid>
    
    </>
  )
}

export default Menu