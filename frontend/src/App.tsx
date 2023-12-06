import { useReducer } from "react";
import Container from "./components/Container";
import MainPage from "./pages/MainPage";
import { initialState } from "./state/initialState";
import reducer from "./state/reducer";
import StateContext from "./state/StateContext";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }} >
      <Container>
        <MainPage />
      </Container>
    </ StateContext.Provider>
  );
}

export default App;
