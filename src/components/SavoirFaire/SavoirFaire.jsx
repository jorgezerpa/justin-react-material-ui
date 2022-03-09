import React from 'react'

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme)=>({
    savoirFaire: {
        marginBottom: '100px',
        padding: '0 150px',
        [theme.breakpoints.down('sm')]: {
            padding: '0 10px',
          width: '100%',
        },
      },
}))


const SavoireFaire = () => {
    const classes = useStyles();
 
    return (
    <div>
        <Grid className={classes.savoirFaire} container direction='column' justifyContent='center' alignItems='center'>
            <Grid item>
                <Typography gutterBottom align='center' variant='h5' className={classes.title}>
                notre savoir-faire 
                </Typography>
            </Grid>
            <Grid item>
                <Typography align='center' className={classes.savoirFaireText}>
                Depuis près de 10 ans maintenant, nous partageons avec vous les meilleures recettes. Nos plats ont tous été conçus, et affinés au fil des années et des goûts. Nous vous apportons le meilleur de l’Asie de l’Est en plein coeur de Paris. Chaque année, nous reprenons tous nos plats pour les améliorer, les modifier et qu’ils vous plaisent toujours plus. Nous espérons que vous vous régalerez en dégustant nos plats.
                </Typography>
            </Grid>
        </Grid> 

    </div>
  )
}

export default SavoireFaire