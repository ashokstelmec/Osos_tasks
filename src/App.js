import AppRoutes from "./AppRoutes";
import MovieProvider from "./context/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <AppRoutes />
      </MovieProvider>
    </div>
  );
}

export default App;
