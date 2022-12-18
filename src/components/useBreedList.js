import { useState, useEffect } from "react";

//stores whatever the api has been called for, can also be used so that if you go back to a prev one then no new api call need
const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");


  useEffect(() => {
  //if no animal:
    if (!animal) {

  //breed list is empty, dropdown greyed out
      setBreedList([]);

  //if seen before - use local cache
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);

    } else {
      requestBreedList();
    }
//inside of useeffect -> better practice (eslint) 
    async function requestBreedList() {
      //reset breed list
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      //if api has no breeds for that animal, will return an empty array so no results
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
//****USE REACT QUERY: REWRITE ALL OF THIS TO BELOW
// import { useQuery } from "@tanstack/react-query";
// import fetchBreedList from "./fetchBreedList";

// export default function useBreedList(animal) {
//   const results = useQuery(["breeds", animal], fetchBreedList);

//   return [results?.data?.breeds ?? [], results.status];
// }