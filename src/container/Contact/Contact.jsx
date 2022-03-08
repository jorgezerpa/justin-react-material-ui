import React from 'react'

import { Grid, Typography } from '@material-ui/core';

import { Cta } from '../../components';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
      container:{
        width: '100%',
      },
      subtitle: {
        fontWeight: '600',
      },
      title:{
        fontWeight: '600'
      },
      span:{
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      },
      containerItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '10px',
      }, 
      containerImage: {
        [theme.breakpoints.down('sm')]: {
          display: 'none'
        },
      }, 
      list: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      },
      listItem: {
        listStyle: 'none',
      }
  }));



const Contact = () => {
  const classes = useStyles();

  return (
    <>
      <Cta />

      <Grid className={classes.container} container justifyContent='center' alignItems='center' spacing={2}>
          <Grid className={classes.containerItem} item xs={4}>
                <Typography className={classes.title}><span className={classes.span}>NOS</span> ADRESSES</Typography>

                <div>
                  <ul className={classes.list}>
                    <li className={classes.listItem}>
                      <Typography className={classes.subtitle} type='h2'>
                          Restaurant 1
                      </Typography>
                    </li>
                    <li className={classes.listItem}>
                      <Typography>
                          Adresse 1
                      </Typography>
                      </li>
                    <li className={classes.listItem}>
                      <Typography>
                          Téléphone 1
                      </Typography>
                      </li>
                    <li className={classes.listItem}>
                      <Typography>
                          Horaires 1
                      </Typography>
                      </li>
                  </ul>
                  
                  <ul className={classes.list}>
                    <li className={classes.listItem}>
                      <Typography className={classes.subtitle} type='h2'>
                          Restaurant 1
                      </Typography>
                    </li>
                    <li className={classes.listItem}>
                      <Typography>
                          Adresse 1
                      </Typography>
                      </li>
                    <li className={classes.listItem}>
                      <Typography>
                          Téléphone 1
                      </Typography>
                      </li>
                    <li className={classes.listItem}>
                      <Typography>
                          Horaires 1
                      </Typography>
                      </li>
                  </ul>
                  
                  <ul className={classes.list}>
                    <li className={classes.listItem}>
                      <Typography className={classes.subtitle} type='h2'>
                          Restaurant 1
                      </Typography>
                    </li>
                    <li className={classes.listItem}>
                      <Typography>
                          Adresse 1
                      </Typography>
                      </li>
                    <li className={classes.listItem}>
                      <Typography>
                          Téléphone 1
                      </Typography>
                      </li>
                    <li className={classes.listItem}>
                      <Typography>
                          Horaires 1
                      </Typography>
                      </li>
                  </ul>
                  
                </div>
          </Grid>  
          <Grid className={classes.containerImage} item xs={8}>
          <div style={{width: '100%', height: '500px', background: '#ccc'}}></div>
          </Grid>  
      </Grid>
    
    </>
  )
}

export default Contact