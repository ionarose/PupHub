async function fetchBreedList({ queryKey }) {
    const animal = queryKey[1];
  
    if (!animal) return [];
  
 
  
    const res = await fetch(`https://api.petfinder.com/v2/animals`, {
      method: "GET",
   
      headers: {     "Authorization": process.env.BEARER,
      "Accept": "application/json",
      "Content-Type": "application/json" }});

    if (!res.ok) {
      throw new Error(`breeds ${animal} fetch not ok`);
    }
  
    return res.json();
  }
  
  export default fetchBreedList;