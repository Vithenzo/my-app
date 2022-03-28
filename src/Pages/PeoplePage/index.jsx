import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import PeopleList from "../../components/PeopleList";
import usePeopleData from "../PeopleDetails/usePeopleData";

export default function PeoplePage(props) {
  const { navigation } = props;

  const [people, setPeople] = useState([]);

  const response = usePeopleData(15);
  setPeople(response);

  return (
    <ScrollView>
      <View>
        <PeopleList people={people} navigation={navigation} />
      </View>
    </ScrollView>
  );
}
