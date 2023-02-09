async function fetchSearch({ queryKey }) {
    const { animal, location, breed } = queryKey[1];

    const res = await fetch(`https://api.petfinder.com/v2/animals?type=${animal}`, {
      method: "GET",
      mode: "CORS",
      headers: { Authentication: process.env.BEARER },
    });
  
  
    if (!res.ok)
      throw new Error(`pet search not okay: ${animal}, ${location}, ${breed}`);
  console.log(res.json())
    return res.json();
  }
  
  export default fetchSearch;