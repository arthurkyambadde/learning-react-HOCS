import "./App.css";
import Counter from "./components/Counter";
import styled from "styled-components";

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer className="App">
      <Counter />
    </AppContainer>
  );
}

export default App;
