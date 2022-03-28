import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

const PeopleList = ({ people, navigation }) => {
  if (people.length !== 0) {
    const textElements = people.map((person) => {
      const { login, picture, name } = person;
      return (
        <TouchableHighlight
          onPress={() => {
            navigation.navigate("PeopleDetails", { person });
          }}
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

  return <Text style={styles.loading}>Carregando os dados...</Text>;
};

const styles = StyleSheet.create({
  photo: {
    aspectRatio: 1,
    marginLeft: 20,
    borderRadius: 50,
    flex: 1,
  },
  container: {
    backgroundColor: "#E2F9FF",
    height: 80,
    borderBottomColor: "#bbb",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 20,
    paddingLeft: 20,
    flex: 5,
  },
  loading: {
    fontSize: 20,
    color: "#F00",
  },
});

export default PeopleList;
