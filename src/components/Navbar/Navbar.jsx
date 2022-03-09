import React from 'react';

import logo from '../../assests/images/Logo.png';

import { AppBar, Toolbar, Grid, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';


import { Link } from 'react-router-dom';

import useStyles from './styles';


const Navbar = () => {
    const classes = useStyles();

  return (
    <nav className={classes.nav}>
        <AppBar position='static' color='transparent' className={classes.AppBar}>
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