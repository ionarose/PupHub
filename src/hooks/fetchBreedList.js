async function fetchBreedList({ queryKey }) {
    const animal = queryKey[1];
  
    if (!animal) return [];
  
 
  
    const res = await fetch(`https://api.petfinder.com/v2/animals?animal=${animal}`, {
      method: "GET",
      mode: "CORS",
      headers: { Authentication: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJXdkd2Z0gwNlA2YzBGMkV2dGNZeHhjV3ZLNDgyUHE4cjBjdEVlUlRmZndxbDBvVXcwQyIsImp0aSI6IjdkNjgxOGI4ZTI2MWUxOTA5YWI5N2ZmZDVjNjA3ZjA1NzUxY2IwZjc3ZmRlNWVmZTJjNTBmMzgwZTAxMDI3YWJlYTY5NWYzYmNmNjlmN2EyIiwiaWF0IjoxNjc1OTM3MjA3LCJuYmYiOjE2NzU5MzcyMDcsImV4cCI6MTY3NTk0MDgwNywic3ViIjoiIiwic2NvcGVzIjpbXX0.C-S6LLBpx90paRoh9nWOWx3n_OsRmNTLdNNzekk7qOxfKBiMQMsNYGb3ZP55hnalhFBWRP9YgK6arWT9pmpKFrMY8XBbtyqtXMzj2zhEfdnG7RVw7oftnCGrx50Ik8GqJKRPtRgJ4cNlaVU0SHomAT5N1xgkRiPAmWsEL5P9GtsgguJr0HrjlQGiv14YbRWu-PlGNWv7fOeQx0DlWN87HYVxZdJp-azrq3WTaYlpbpH5wlrN-i_3dCXGJ4MSsUXT9pkLSZcaEXTKxYnQU7rmKMCNLyDES0iAyh4BiN8VehlEmXlNS0AuhN00tMM5QRbvHJvcGAZLfHNNy9prHobxbg" },
    });

    if (!res.ok) {
      throw new Error(`breeds ${animal} fetch not ok`);
    }
  
    return res.json();
  }
  
  export default fetchBreedList;