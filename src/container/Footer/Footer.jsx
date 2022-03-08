import React from 'react'

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
        container:{
            justifyContent: 'flex-end',
            [theme.breakpoints.down('sm')]: {
                    justifyContent: 'center',
                
           }, 
        }
      }));



const Footer = () => {
        const classes = useStyles();
        
  return (
    <Grid className={classes.container} container spacing={10}>
            <Grid item>
                    <div style={{width: '50px', height: '50px', borderRadius: '50%', background: "#ccc"}}></div>
            </Grid>
            <Grid item>
                    <div style={{width: '50px', height: '50px', borderRadius: '50%', background: "#ccc"}}></div>
            </Grid>
            <Grid item>
                    <div style={{width: '50px', height: '50px', borderRadius: '50%', background: "#ccc"}}></div>
            </Grid>
    </Grid>
  )
}

export default Footer