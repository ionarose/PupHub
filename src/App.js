import Details from "./Details";
import React from "react";
import SearchParams from "./components/SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";

const queryClient = new QueryClient({
  //config
  defaultOptions: {
    queries: {
      //how long to cache things?
      //not going to be a new pet every second - cache for the whole user session. Can specify ms length
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AdoptedPetContext.Provider value={adoptedPet}>
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/Details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </AdoptedPetContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
