import react, { createContext, useContext, useState } from "react";

//context ACCESO A LA DATA
export const SearchContext = createContext();

//hook
export const useSearch = () => useContext(SearchContext);

//PROVEEDOR DE INFORMACIÓN
export const SearchProvider = ({ children }) => {
  //estado del context

  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
