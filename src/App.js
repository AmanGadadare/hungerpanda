import "./App.css";
import Navbar from "./components/Navbar";
import Landingpage from "./pages/Landingpage";
import Login  from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    
     
    <div className="App">
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Landingpage/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/Signup" exact element={<Signup/>} />
          
        </Routes>
       
      </Router>
    
    </div>
    
     


  );
}

export default App;
