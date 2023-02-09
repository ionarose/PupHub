async function fetchSearch({ queryKey }) {
    const { animal, location, breed } = queryKey[1];

    const res = await fetch(`https://api.petfinder.com/v2/animals?type=${animal}`, {
      method: "GET",
      mode: "CORS",
      headers: { Authentication: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJXdkd2Z0gwNlA2YzBGMkV2dGNZeHhjV3ZLNDgyUHE4cjBjdEVlUlRmZndxbDBvVXcwQyIsImp0aSI6IjdkNjgxOGI4ZTI2MWUxOTA5YWI5N2ZmZDVjNjA3ZjA1NzUxY2IwZjc3ZmRlNWVmZTJjNTBmMzgwZTAxMDI3YWJlYTY5NWYzYmNmNjlmN2EyIiwiaWF0IjoxNjc1OTM3MjA3LCJuYmYiOjE2NzU5MzcyMDcsImV4cCI6MTY3NTk0MDgwNywic3ViIjoiIiwic2NvcGVzIjpbXX0.C-S6LLBpx90paRoh9nWOWx3n_OsRmNTLdNNzekk7qOxfKBiMQMsNYGb3ZP55hnalhFBWRP9YgK6arWT9pmpKFrMY8XBbtyqtXMzj2zhEfdnG7RVw7oftnCGrx50Ik8GqJKRPtRgJ4cNlaVU0SHomAT5N1xgkRiPAmWsEL5P9GtsgguJr0HrjlQGiv14YbRWu-PlGNWv7fOeQx0DlWN87HYVxZdJp-azrq3WTaYlpbpH5wlrN-i_3dCXGJ4MSsUXT9pkLSZcaEXTKxYnQU7rmKMCNLyDES0iAyh4BiN8VehlEmXlNS0AuhN00tMM5QRbvHJvcGAZLfHNNy9prHobxbg.C-S6LLBpx90paRoh9nWOWx3n_OsRmNTLdNNzekk7qOxfKBiMQMsNYGb3ZP55hnalhFBWRP9YgK6arWT9pmpKFrMY8XBbtyqtXMzj2zhEfdnG7RVw7oftnCGrx50Ik8GqJKRPtRgJ4cNlaVU0SHomAT5N1xgkRiPAmWsEL5P9GtsgguJr0HrjlQGiv14YbRWu-PlGNWv7fOeQx0DlWN87HYVxZdJp-azrq3WTaYlpbpH5wlrN-i_3dCXGJ4MSsUXT9pkLSZcaEXTKxYnQU7rmKMCNLyDES0iAyh4BiN8VehlEmXlNS0AuhN00tMM5QRbvHJvcGAZLfHNNy9prHobxbg" },
    });
  
  
    if (!res.ok)
      throw new Error(`pet search not okay: ${animal}, ${location}, ${breed}`);
  console.log(res.json())
    return res.json();
  }
  
  export default fetchSearch;