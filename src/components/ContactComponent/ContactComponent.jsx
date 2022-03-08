import React from 'react'

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: '600',
    },
    savoirFaire: {
        textAlign: 'center',
        padding: '10vw'
    },
        
}));


const ContactComponent = () => {
  const classes = useStyles();
  
    return (
    <div>
        <Grid className={classes.savoirFaire} container direction='column' justifyContent='center' alignItems='center'>
            <Grid item>
                <Typography gutterBottom className={classes.title}>
                    CONTACT
                </Typography>
            </Grid>
            <Grid item>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptates minima sequi saepe, asperiores commodi fugiat reiciendis eaque distinctio perspiciatis quaerat veniam consectetur ab, illum numquam voluptas natus iste. Corrupti? 
                </Typography>
            </Grid>
        </Grid> 
    </div>
  )
}

export default ContactComponent