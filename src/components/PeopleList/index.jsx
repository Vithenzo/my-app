import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicator
} from "react-native";

const PeopleList = ({ people, navigation }) => {
  if (people.length !== 0) {
    const textElements = people.map((person) => {
      const { login, picture, name } = person;

      return (
        <TouchableHighlight
          onPress={() => navigation.navigate("PeopleDetails", { person })}
          key={login.uuid}
        >
          <View style={styles.container}>
            <Image source={{ uri: picture.thumbnail }} style={styles.photo} />
            <Text style={styles.text}>{`${name.first} ${name.last}`}</Text>
          </View>
        </TouchableHighlight>
      );
    });

    return <View>{textElements}</View>;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size='large' color='#3366FF' />
      <Text style={{ color: '#212121' }}>Carregando...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  photo: {
    aspectRatio: 1,
    marginLeft: 20,
    borderRadius: 50,
    flex: 1,
  },
  container: {
    backgroundColor: "#E8EAFF",
    height: 100,
    borderWidth: 0.5,
    borderColor: '#EEE',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 20,
    paddingLeft: 20,
    flex: 5,
    color: '#212121'
  },
});

export default PeopleList;
