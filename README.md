    Three steps are involved

    1. Create a context with createContext function imported from React
       package with default value empty object
    2. Create a provider component named MovieProvider with the context created in step 1.
    3. MovieContext.Provider will take value attribute and it will be an object containing
       state and setState value declared through useState hook.

    How to use it in the Application: 
    4. Import movieProvider in App.js file and wrap all the available components inside it. So that all those unrelated components can now share data between each others.

    5. Next go to the file where you need to use state/setState (defined in Context folder of index.js file).
    eg: MainPage.js or Description.js

    Now import useContext hook from react and the context we created in context folder :
        import { useContext } from "react";
        import { MovieContext } from "../context";

    Next you call your context with the useContext function and destructure to get state/ setState (defined in Context folder of index.js file).

    const { state, setState } = useContext(MovieContext);

    we either use state or setState depending on our requirements.

