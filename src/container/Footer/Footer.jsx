import React from 'react'

import { icons } from '../../constants/icons'


import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
        container:{
                padding: '30px 75px',
                overflowX: 'hidden',
                width: '100vw',
                marginTop: '100px',
                background: '#000',
                [theme.breakpoints.down('sm')]: {
                        justifyContent: 'center',
                
           }, 
        },
      }));



const Footer = () => {
        const classes = useStyles();
        
  return (
    <Grid container className={classes.container} color='secondary' alignItems='center' justifyContent='flex-end' spacing={2}>
            <Grid item>
                    <div> <img className={classes.icon} src={icons.facebook} alt="" /> </div>
            </Grid>
            <Grid item>
                    <div> <img  className={classes.icon} src={icons.instagram} alt="" /> </div>
            </Grid>
            <Grid item>
                    <div> <img className={classes.icon} src={icons.maps} alt="" /> </div>
            </Grid>
    </Grid>
  )
}

export default Footer