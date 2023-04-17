import './App.css';
//Import route
import { Route, Routes } from "react-router-dom";
//Import components
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import Stock from './pages/Stock';


function App() {
  return (
    <div className="App">
      {/* Insert nav component */}
      <Nav />
      {/* Specify each route */}
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/stocks/" element={<Dashboard/>}/>
      <Route path="/stocks/:symbol" element={<Stock/>}/>
    </Routes>
    </div>
  );
}

export default App;



