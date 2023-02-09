const fetchPet = async ({ queryKey }) => {
    const id = queryKey[1];

    const apiRes = await fetch(`https://api.petfinder.com/v2/animals?id=${id}`, {
      method: "GET",
     
      headers: { Authentication: process.env.BEARER },
    });
    
  //unsuccessful request = error (needed for react query)
    if (!apiRes.ok) {
      throw new Error(`details/${id} fetch not ok`);
    }
  //don't have to await as react query expects promise automatically
    return apiRes.json();
  };
  
  export default fetchPet;