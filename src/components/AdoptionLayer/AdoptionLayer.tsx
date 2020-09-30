import Dashboard from '../Dashbaord/Dashboard';
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid'
import Menu from '../Menu/Menu'
import { Animal } from '../../graphql/queries/animal'
import { Adopter } from '../../graphql/queries/adopters'
import { useMutation } from '@apollo/react-hooks';
import { ADOPT } from '../../graphql/mutations/adoption-actions'
// import Header from '../Header/Header'
import Header from '@bit/ofek.catdog.header'
import AIButton from '../AIButton/AIButton';
import AIStatus from '../AIStatus/AIStatus';
import AdoptionInfo from '../AdoptionInfo/AdoptionInfo'

const AdoptionLayer: React.FC = () => {


  const [chosenAnimal, setChosenAnimal] = useState()
  const [chosenAdopter, setChosenAdopter] = useState()
  const [adopt] = useMutation(ADOPT,{
    refetchQueries:['GET_ANIMALS_IDS','GET_ADOPTERS', 'adopters', 'allAdoptees']
  });

  useEffect(() => {

    if (chosenAdopter && chosenAnimal) {
      adopt({ variables: { adopteeId: chosenAnimal.id, adopterId: chosenAdopter.id } })
      setChosenAdopter(undefined)
      setChosenAnimal(undefined)
    }
  }, [chosenAnimal, chosenAdopter, adopt])

  return (
    <>
      <Header info={AdoptionInfo} icons={[AIButton, AIStatus]} title="TEAM #3 - ADOPTIONS MANAGEMMENT"/>
        <div>

        <Grid
          container
          direction="row-reverse"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={3}>
            <Menu onItemSelected={(adopter: Adopter) => { setChosenAdopter(adopter) }} />
          </Grid>
          <Grid item xs={9}>
            <Dashboard onItemSelected={(animal: Animal) => { setChosenAnimal(animal) }} />
          </Grid>

        </Grid>
      </div>
    </>
  );
}

export default AdoptionLayer;