import React from 'react'


import { Cta } from '../../components';

import { Grid, Typography, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
        Button: {
          fontWeight: '600',
          padding: '10px 100px',
          [theme.breakpoints.down('sm')]: {
            width: '80vw',
          },
        },
        title:{
          fontWeight: '600',
        },
        hero:{
          marginTop: '50px',
          marginBottom: '100px',
        },
        heroText: {
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
          },
        },
        adresses: {
            marginBottom: '100px',
            [theme.breakpoints.down('sm')]: {
              display: 'none',
            },
        },
        adressesItems:{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly',
        },
        savoirFaire: {
          padding: '0 150px 0 150px',
          marginBottom: '100px',
          [theme.breakpoints.down('sm')]: {
            padding: '0 20px',
            width: '98vw',
          },
        },
        restaurants: {
          marginBottom: '100px',
          gap: '50px',
          display: 'none',
          [theme.breakpoints.down('sm')]: {
            display: 'flex',

          },
        },
        
        restaurantsItems:{
          padding: '0 200px 0 200px',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          gap: '40px',
        },
        reseauxSociaux: {
          marginBottom: '100px',
          gap: '50px',
          },
        reseauxSociauxItems:{
          padding: '0 200px 0 200px',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          gap: '40px',
        },
        reseauxSociauxItems:{
          padding: '0 200px 0 200px',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          gap: '40px',
        },
        
      }));
      
      
  const arr1 = [1,2,3,4,5,6];
  const arr2 = [1,2,3];



const Accueil = () => {

  const classes = useStyles();


  const Restaurants = ()=>(
    <Grid className={classes.restaurants} container justifyContent='space-evenly' alignItems='center' direction='column'>  
    <Grid item>
        <Typography type='h2' className={classes.title} >RESTAURANTS</Typography>
    </Grid>  
    
    <Grid item className={classes.restaurantsItems}>
        { arr2.map((item, key)=>(
          <div key={key} >
            <div style={{width: '80vw', height: '170px', background:'#ccc'}}></div>
            <Typography>Restaurant {key+1}</Typography>
          </div>
        ))
        }
    </Grid> 
  </Grid>
)

  return (
    <>
      <Grid className={classes.hero} container justifyContent='center' alignItems='center' spacing={10} >  
          <Grid item className={classes.heroText}>
              <Typography type='h1' style={{fontWeight: '600'}}>YUMMY NOUILLES</Typography>
              <Typography type='subtitle2'>Promesse</Typography>
              <Button className={classes.Button} variant="contained">CTA</Button>
          </Grid>
          
          <Grid item >
              <div style={{width: '200px', height: '200px', borderRadius: '50%', background:'#ccc'}}></div>
          </Grid>
      </Grid>

                  {/* adresses */}
            <Grid className={classes.adresses} container justifyContent='space-evenly' alignItems='center' direction='column'>  
                      <Grid item>
                          <Typography type='h2' gutterBottom className={classes.title}>ADRESSES</Typography>
                      </Grid>  
                      
                      <Grid item className={classes.adressesItems}>
                          { arr2.map((item, key)=>(
                            <div key={key} >
                              <div style={{width: '180px', height: '150px', background:'#ccc'}}></div>
                              <Typography>lorem ipsum</Typography>
                            </div>
                          ))
                          }
                      </Grid> 
            </Grid>

            <Restaurants />


                  {/* cta */}
          <Cta />


                  {/* saibor faire */}
          <Grid className={classes.savoirFaire} container direction='column' justifyContent='center' alignItems='center'>
            <Grid item>
                <Typography gutterBottom align='center' type='h2' className={classes.title}>
                    SAVOIR FAIRE 
                </Typography>
            </Grid>
            <Grid item>
                <Typography align='center' className={classes.savoirFaireText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptates minima sequi saepe, asperiores commodi fugiat reiciendis eaque distinctio perspiciatis quaerat veniam consectetur ab, illum numquam voluptas natus iste. Corrupti? 
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quam debitis veritatis omnis voluptatum, saepe ullam molestiae, sed eligendi quibusdam sequi consequatur delectus deserunt maxime fugit! Aspernatur commodi alias praesentium?
                </Typography>
            </Grid>
        </Grid> 


                {/* reseaux sociaux     */}
            <Grid className={classes.reseauxSociaux} container justifyContent='space-evenly' alignItems='center' direction='column'>  
                      <Grid item>
                          <Typography type='h2' className={classes.title} >RÉSEAUX SOCIAUX</Typography>
                      </Grid>  
                      
                      <Grid item className={classes.reseauxSociauxItems}>
                          { arr1.map((item, key)=>(
                            <div key={key} >
                              <div style={{width: '200px', height: '200px', background:'#ccc'}}></div>
                              <Typography>lorem ipsum</Typography>
                            </div>
                          ))
                          }
                      </Grid> 
            </Grid>
           



    </>
  )
}

export default Accueil