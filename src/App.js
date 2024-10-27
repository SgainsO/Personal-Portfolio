import "./App.css"
//import Header from "./header/Header"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Landing from "./HomeScreen.js";
import Profesional from "./portSections/Professional";
import Personal from "./portSections/Personal.js";


function App() 
{
return(
    <>
       <Router>
        <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/prof" element={<Profesional/>}/>
            <Route exact path="/pers" element={<Personal/>} />
        </Routes>
       </Router>
    </>
)
}


export default App;