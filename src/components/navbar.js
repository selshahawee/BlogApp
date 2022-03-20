import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import CreateArea from "./CreateArea";

function NavBar({ notes, setNotes, addNote }) {
  
  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <h1>Blog</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <CreateArea notes={notes} setNotes={setNotes} onAdd={addNote} />
          </Nav>
          <Nav>
            <Nav.Link href="/PostsBase">View Posts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
{
  /* <header >
<Link to="/"> </Link> 
<div className="d-flex align-items">
<Menu>
  <a id="home" className="menu-item" href="/">Home</a>
  <a id="addPost" className="menu-item" href="/AddPost">Add Post</a>
  <a id="contact" className="menu-item" href="/PostsBase">View All Posts</a>
 
</Menu> 
</div>
</header> */
}
export default NavBar;
