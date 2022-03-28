import React, { useEffect, useState, useCallback } from "react";
import { ScrollView, RefreshControl } from "react-native";
import axios from 'axios';

import PeopleList from "../../components/PeopleList";

const PeoplePage = ({ navigation }) => {
  const [people, setPeople] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const handleApiResponse = (response) => {
    setPeople(response.data.results);
  };

  const fetchPeopleData = async (records) => {
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?results=${records}&nat=br`
      );

      handleApiResponse(response);
    } catch (e) {
      alert(e.message);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    fetchPeopleData(20)
      .finally(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    fetchPeopleData(20);
  }, []);

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
