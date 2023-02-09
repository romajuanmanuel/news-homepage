import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <Showcase />

      <Footer />
    </div>
  );
}

export default App;
