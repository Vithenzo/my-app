import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import axios from 'axios';

import PeopleList from "../../components/PeopleList";

const PeoplePage = ({ navigation }) => {
  const [people, setPeople] = useState([]);

  const handleApiResponse = (response) => {
    setPeople(response.data.results);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://randomuser.me/api/?results=15&nat=br`
        );

        handleApiResponse(response);
      } catch (e) {
        alert(e.message);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <PeopleList people={people} navigation={navigation} />
    </ScrollView>
  );
};

export default PeoplePage;
