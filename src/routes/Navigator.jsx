import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import PeopleDetails from "../Pages/PeopleDetails";
import PeoplePage from "../Pages/PeoplePage";

function Navigator() {
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
}

const style = {
  headerStyle: {
    backgroundColor: "#2a67ad",
  },
  headerTitleStyle: {
    color: "#FFF",
    fontSize: 30,
    textAlign: "center",
  },
};

export default Navigator;
