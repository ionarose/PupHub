async function fetchSearch({ queryKey }) {
    const { animal, location, breed } = queryKey[1];

    const res = await fetch(`https://api.petfinder.com/v2/animals?type=dog`, {
      method: "GET",
    
      headers: {     "Authorization": process.env.BEARER,
        "Accept": "application/json",
        "Content-Type": "application/json" },
    });
  
  
    if (!res.ok)
      throw new Error(`pet search not okay: ${animal}, ${location}, ${breed}`);
  console.log(res.json())
    return res.json();
  }
  
  export default fetchSearch;