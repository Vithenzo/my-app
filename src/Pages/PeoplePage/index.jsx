import React from "react";
import { ScrollView, RefreshControl } from "react-native";

import PeopleList from "../../components/PeopleList";
import usePeopleData from './usePeopleData';

const PeoplePage = ({ navigation }) => {
  const { people, refreshing, onRefresh } = usePeopleData();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#3366FF']}
          tintColor='#3366FF'
        />
      }
    >
      <PeopleList people={people} navigation={navigation} />
    </ScrollView>
  );
};

export default PeoplePage;
