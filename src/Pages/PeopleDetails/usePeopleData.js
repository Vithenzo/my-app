import { useEffect, useState } from "react";
import axios from "axios";

function usePeopleData(length) {
  const [people, setPeople] = useState([]);

  const handleApiResponse = (response) => {
    setPeople(response.data.results);
  };

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?results=${length}&nat=br`)
      .then((response) => {
        handleApiResponse(response);
      })
      .catch((e) => {
        throw e;
      });
  }, []);

  return people;
}

export default usePeopleData;
