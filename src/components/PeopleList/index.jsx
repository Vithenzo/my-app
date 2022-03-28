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
          <View style={style.container}>
            <Image source={{ uri: picture.thumbnail }} style={style.photo} />
            <Text style={style.text}>{`${name.first} ${name.last}`}</Text>
          </View>
        </TouchableHighlight>
      );
    });

    return <View>{textElements}</View>;
  }

  return (
    <View style={style.loadingIndicatorContainer}>
      <ActivityIndicator size='large' color='#3366FF' />
      <Text style={{ color: '#212121' }}>Carregando...</Text>
    </View>
  );
};

const style = StyleSheet.create({
  photo: {
    aspectRatio: 1,
    marginLeft: 20,
    borderRadius: 50,
    flex: 1,
  },
  container: {
    backgroundColor: "#EEE",
    height: 100,
    borderWidth: 0.5,
    borderColor: '#F4F4F4',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 20,
    paddingLeft: 20,
    flex: 5,
    color: '#222'
  },
  loadingIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default PeopleList;
