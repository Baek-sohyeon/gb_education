import React, { useEffect, useContext } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HeaderContainer from "./containers/headerContainer";
import Home from "./pages/Home/home";
import Join from "./pages/Join/join";
import Login from "./pages/Login/login";
import Footer from "./components/Footer/footer";
import Reviews from "./pages/Reviews/reviews";
import Community from "./pages/Community/community";
import Courses from "./pages/Courses/courses";
import Partner from "./pages/Partner/partner";

function App() {
  return (
    <Router>
      <HeaderContainer/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/community" element={<Community />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/partner" element={<Partner/>} />

        {/* <Route path="/contact" element={<Contact />} /> */}

      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
