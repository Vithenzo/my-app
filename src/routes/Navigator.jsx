import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import PeopleDetails from "../Pages/PeopleDetails";
import PeoplePage from "../Pages/PeoplePage";

const Navigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={style}>
        <Stack.Screen name="Pessoas" component={PeoplePage} />
        <Stack.Screen
          name="PeopleDetails"
          component={PeopleDetails}
          options={({ route }) => {
            const titlePage = route.params.person.name.first;

            return {
              title: titlePage,
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const style = {
  headerStyle: {
    backgroundColor: "#3366FF",
    height: 100,
  },
  headerTitleStyle: {
    color: "#FFF",
    fontSize: 25,
  },
  headerLeft: null
};

export default Navigator;
