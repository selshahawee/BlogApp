import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function NavBar() {
  return (
    <header className="d-flex justify-content-between">
      <Link to="/"><h1>Blog</h1> </Link> 
      <div className="d-flex">
        <h1>+ Add Post</h1>
      </div>
    </header>
  );
}

export default NavBar;
