import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BSNavbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";
import SearchBar from "./SearchBar";
import React from "react";

function Navbar({ sortBy, setSortBy }) {
  return (
    <BSNavbar bg="light" expand="lg">
      <Container>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex" }}>
              <NavLink
                to="/"
                exact
                className="nav-link"
                activeStyle={{ borderBottom: "3px solid #22AA22" }}
              >
                All Submissions
              </NavLink>
              <NavLink
                to="/FavouriteSubmissions"
                exact
                className="nav-link"
                activeStyle={{ borderBottom: "3px solid #22AA22" }}
              >
                Favourite Submissions
              </NavLink>
            </div>
            <div style={{ display: "flex" }}>
              <div className="mx-4">
                <SearchBar />
              </div>
              <DropDown sortBy={sortBy} setSortBy={setSortBy} />
            </div>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
