import React, { useEffect, useContext } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HeaderContainer from "./containers/headerContainer";
import Home from "./pages/Home/home";

function App() {
  return (
    <Router>
      <HeaderContainer/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}

      </Routes>
      {/* <Footer/> */}
    </Router>

  );
}

export default App;
