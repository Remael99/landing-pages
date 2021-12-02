import "./App.css";
import Body from "./components/Body/Body";
import Container from "./components/Container";
import Header from "./components/Header/Header.js";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Body />
      </Container>
    </div>
  );
}

export default App;
