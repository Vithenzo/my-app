import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const usePeopleData = () => {
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
      throw e;
    }
  };

  useEffect(() => {
    try {
      fetchPeopleData(20);
    } catch (e) {
      alert(e?.message);
    }
  }, []);


  const onRefresh = useCallback(() => {
    setRefreshing(true);

    try {
      fetchPeopleData(20);
    } catch (e) {
      alert(e?.message);
    } finally {
      setRefreshing(false);
    }
  }, []);

  return {
    people,
    refreshing,
    onRefresh
  };
};

export default usePeopleData;
