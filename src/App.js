import Navbar from "./modules/shared/Navbar";
import Footer from "./modules/shared/Footer";
import HomePage from "./modules/home/HomePage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
    return (
        <Router>
            <Navbar/>
            <main className="flex-grow-1 pt-5">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;
