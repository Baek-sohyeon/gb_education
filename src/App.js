import React, { useEffect, useContext } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HeaderContainer from "./containers/headerContainer";
import Home from "./pages/Home/home";
import Join from "./pages/Join/join";
import Login from "./pages/Login/login";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <Router>
      <HeaderContainer/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />

        {/* <Route path="/contact" element={<Contact />} /> */}

      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
