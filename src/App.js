import NewProject from "./components/pages/NewProject";
import Contato from "./components/pages/Contato";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from "./components/layout/Container";
import NavBar from "./components/layout/Navbar";
import Projects from "./components/pages/Projects";

import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
     
    <NavBar/>

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>

        <Routes>
          <Route path="/contato" element={<Contato />}></Route>
        </Routes>

        <Routes>
          <Route path="/newproject" element={<NewProject />}></Route>
        </Routes>
                
        <Routes>
          <Route path="/projects" element={<Projects/>}></Route>
        </Routes>

        <Routes>
          <Route path="/company" element={<Company />}> </Route>
        </Routes>

        </Container>

       

       <Footer/>


    </Router>

  );
}

export default App;
