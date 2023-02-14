// Importing The Modules ------------------------------>
import { Routes,Route } from "react-router-dom";
// Importing The Components---------------------------->
import Home from "./components/Home";







/// Function For App------------------------------------>
function App(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
        
        </>
    )
};

// Exporting The Function ------------------------------->
export default App;