const fetchPet = async ({ queryKey }) => {
    const id = queryKey[1];
    const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  //unsuccessful request = error (needed for react query)
    if (!apiRes.ok) {
      throw new Error(`details/${id} fetch not ok`);
    }
  //don't have to await as react query expects promise automatically
    return apiRes.json();
  };
  
  export default fetchPet;