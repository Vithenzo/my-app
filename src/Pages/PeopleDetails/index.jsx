import React from "react";
import { Image, StyleSheet, ScrollView } from "react-native";
import DataLine from "../../components/DataLine";

const PeopleDetails = ({ route }) => {
  const { person } = route.params;

  return (
    <ScrollView contentContainerStyle={style.container}>
      <Image source={{ uri: person.picture.large }} style={style.photo} />
      <DataLine label="Email:" data={person.email} />
      <DataLine label="Cidade:" data={person.location.city} />
      <DataLine label="Estado:" data={person.location.state} />
      <DataLine label="Telefone:" data={person.phone} />
      <DataLine label="Celular:" data={person.cell} />
      <DataLine label="Nacionalidade:" data={person.nat} />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
    flexGrow: 1
  },
  photo: {
    aspectRatio: 1,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
    margin: 20
  },
});

export default PeopleDetails;
