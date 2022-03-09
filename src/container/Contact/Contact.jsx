import React from 'react'

import { map } from '../../constants/images';

import { Grid, Typography } from '@material-ui/core';

import { Cta } from '../../components';

import useStyles from './styles';


const Contact = () => {
  const classes = useStyles();

  return (
    <>
      <Cta />

      <Grid className={classes.container} container justifyContent='center' alignItems='flex-start'>
          <Grid className={classes.containerItem} item xs={4}>
                <Typography className={classes.title} variant='h4'><span className={classes.span} >NOS</span> ADRESSES</Typography>

                <div className={classes.listsContainer}>
                  <ul className={classes.list} >
                    <li className={classes.listItem}>
                      <Typography  variant='body1'>
                            Yummy noodle
                      </Typography>
                    </li>
                    <li className={classes.listItem}>
                      <Typography variant='body2'>
                          185 rue de Lancry <br/>
                          75010 Paris <br/>
                          +331 44 33 55 22 <br/>
                          Lundi à Dimanche - 12h à 23h <br/>
                      </Typography>
                      </li>
                  </ul>
                  
                  <ul className={classes.list}>
                    <li className={classes.listItem}>
                      <Typography  variant='body1'>
                          Yu Noodle My
                      </Typography>
                    </li>
                    <li className={classes.listItem}>
                      <Typography variant='body2'>
                          350 rue Saint-Guillaume <br/>
                          75007 Paris <br/>
                          +331 44 33 55 22 <br/>
                          Lundi à Vendredi - 12h à 22h <br/>
                      </Typography>
                      </li>
                  </ul>
                  
                  <ul className={classes.list}>
                    <li className={classes.listItem}>
                      <Typography  variant='body1'>
                                Les Yummy Nouilles
                      </Typography>
                    </li>
                    <li className={classes.listItem}>
                      <Typography variant='body2'>
                          208 rue au Maire <br />
                          75003 Paris <br />
                          +331 44 33 55 22 <br />
                          Lundi à Dimanche - 12h à 23h <br />
                      </Typography>
                      </li>
                   
                  </ul>
                  
                </div>
          </Grid>  
          <Grid className={classes.containerImage} item xs={8}>
          <div>
              <img src={map} style={{maxWidth: '900px'}} alt="" />
          </div>
          </Grid>  
      </Grid>
    
    </>
  )
}

export default Contact