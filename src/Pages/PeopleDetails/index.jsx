import React from "react";
import { View, Image, StyleSheet } from "react-native";
import DataLine from "../../components/DataLine";

function PeopleDetails({ route }) {
  const { person } = route.params;

  return (
    <View style={style.container}>
      <Image source={{ uri: person.picture.large }} style={style.photo} />
      <DataLine label="Email:" data={person.email} />
      <DataLine label="Cidade:" data={person.location.city} />
      <DataLine label="Estado:" data={person.location.state} />
      <DataLine label="Telefone:" data={person.phone} />
      <DataLine label="Celular:" data={person.cell} />
      <DataLine label="Nacionalidade:" data={person.nat} />
    </View>
  );
}

const style = StyleSheet.create({
  photo: {
    aspectRatio: 1,
  },
  container: {
    padding: 10,
  },
});

export default PeopleDetails;
