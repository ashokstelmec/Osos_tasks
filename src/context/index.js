import { useState, createContext } from "react";

export const MovieContext = createContext({});

const MovieProvider = ({ children }) => {
  const [state, setState] = useState({});
  
  return (
    <MovieContext.Provider value={{ state: state, setState:setState }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;

/* 
    Three steps are involved

    1. Create a context with createContext function imported from React
       package with default value empty object
    2. Create a provider component named MovieProvider with the context created in step 1.
    3. MovieContext.Provider will take value attribute and it will be an object containing
       state and setState value declared through useState hook.
*/