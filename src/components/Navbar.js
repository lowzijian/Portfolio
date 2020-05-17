import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Container, Button } from "@material-ui/core";
import "../App.css";
import { FaGithub } from "react-icons/fa";

const Navbar = () => (
  <AppBar position="static">
    <Container className="resumeNavBar">
      <div style={{ flex: 5 }}>
        <Button>
          <Link to="/" className="resumeNavItem">
            ABOUT ME
          </Link>
        </Button>

        <Button>
          <Link to="/resume" className="resumeNavItem">
            RESUME
          </Link>
        </Button>
      </div>
      <div style={{ flex: 1, justifyContent: "flex-end", display: "flex" }}>
        <a href="https://github.com/lowzijian" className="resumeNavItem">
          <Button>
            <FaGithub fontSize={30} color="white" />
          </Button>
        </a>
      </div>
    </Container>
  </AppBar>
);

export default Navbar;
