import React from "react";
import NavBar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReadMore from "./components/ReadMore";
import HomePage from"./components/HomePage";
import PostsBase from "./components/PostsBase";

function App() {
  
  return (
    <Router>
      <NavBar/>
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/PostsBase" element={<PostsBase/>}/>
        <Route path="/posts/:id" element={<ReadMore />} />
      </Routes> 
     
    </Router>
  );
}

export default App;
