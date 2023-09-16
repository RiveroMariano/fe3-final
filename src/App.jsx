import { Routes, Route } from "react-router-dom";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import { ContextGlobal, ContextProvider } from "./Components/utils/globalContext";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <ContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="favs" element={<Favs />} />
        <Route path="contact" element={<Contact />} />
        
      </Routes>
      <Footer/>
    </ContextProvider></>
  );
}

export default App;
