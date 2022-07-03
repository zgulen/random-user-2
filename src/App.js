import './App.css';
import Footer from "./components/footer/Footer"
import Navbar from './components/navbar/Navbar';
import PersonInfo from "./components/PersonInfo/PersonInfo"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <PersonInfo/>
      <Footer/>
    </div>
  );
}

export default App;
