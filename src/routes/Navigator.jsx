import React from "react";
import { Dimensions } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import PeopleDetails from "../Pages/PeopleDetails";
import PeoplePage from "../Pages/PeoplePage";

const Navigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pessoas" component={PeoplePage} options={style} />
        <Stack.Screen
          name="PeopleDetails"
          component={PeopleDetails}
          options={({ route }) => {
            const titlePage = route.params.person.name.first;

            return {
              title: titlePage,
              headerStyle: style.headerStyle,
              headerTitleStyle: style.headerTitleStyle,
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const { height } = Dimensions.get('window');

const style = {
  headerStyle: {
    backgroundColor: "#3366FF",
    height: (height / 100) * 13,
  },
  headerTitleStyle: {
    color: "#FFF",
    fontSize: 25,
  },
};

export default Navigator;
