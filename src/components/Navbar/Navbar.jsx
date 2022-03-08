import React from 'react';

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
        <AppBar position='static' color='transparent' className={classes.AppBar}>
            <Toolbar  className={classes.toolbar}>
                <Grid container spacing={2} alignItems='center'>
                    <Grid item>
                        <div style={{width: '40px', height: '40px', borderRadius: '50%', background:'#ccc'}}></div>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.menuItems} component={Link} to="/accueil" type='body2'>ACCUAIL</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.menuItems} component={Link} to="/menu" type='body2'>MENU</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.menuItems} component={Link} to="/contact" type='body2'>CONTACT</Typography>
                    </Grid>
                </Grid>

                    <Menu className={classes.menuIcon}/>
            </Toolbar>
        </AppBar>
    </nav>
  )
}

export default Navbar