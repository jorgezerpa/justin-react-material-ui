import React from 'react'


import { Cta, Hero, Adresses, SavoirFaire, ReseauxSociaux } from '../../components';

import useStyles  from './styles';


const Accueil = () => {

  const classes = useStyles();

  return (
    <div className={classes.container}>
        <Hero />
        <Adresses />
        <Cta />
        <SavoirFaire />
        <ReseauxSociaux />
    </div>
  )
}

export default Accueil