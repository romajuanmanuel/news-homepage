import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Showcase />

      <Footer />
    </div>
  );
}

export default App;
