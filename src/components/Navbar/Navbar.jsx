import React from 'react';

import logo from '../../assests/images/Logo.png';

import { AppBar, Toolbar, Grid, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import { makeStyles } from '@material-ui/core';

import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    nav: {
        marginBottom: '10px',
    },
    AppBar: {
        boxShadow: 'none',
        },
    Toolbar: {
        boxShadow: 'none',
    },
    menuItems: {
        color: '#000',
       textDecoration: 'none',
       [theme.breakpoints.down('sm')]: {
            display: 'none',
      }, 
    },
    menuIcon:{
        visibility: 'hidden',
        [theme.breakpoints.down('sm')]: {
             visibility: 'visible'
       }, 
    }
  }));



const Navbar = () => {
    const classes = useStyles();

  return (
    <nav className={classes.nav}>
        <AppBar position='static' color='none' className={classes.AppBar}>
            <Toolbar  className={classes.toolbar}>
                <Grid container spacing={2} alignItems='center'>
                    <Grid item>
                        <div style={{width: '50px'}}>
                            <img src={logo} alt="" style={{width: '100%'}} />    
                        </div>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.menuItems} component={Link} to="/accueil" variant='body2'>ACCUAIL</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.menuItems} component={Link} to="/menu" variant='body2'>MENU</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.menuItems} component={Link} to="/contact" variant='body2'>CONTACT</Typography>
                    </Grid>
                </Grid>

                    <Menu className={classes.menuIcon}/>
            </Toolbar>
        </AppBar>
    </nav>
  )
}

export default Navbar