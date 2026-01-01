import React, { useState, useEffect } from "react";
import { greetings, socialLinks } from "../portfolio";
import Headroom from "headroom.js";
import { UncontrolledCollapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

const Navigation = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const onExiting = () => setCollapseClasses("collapsing-out");
  const onExited = () => setCollapseClasses("");

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main")!);
    headroom.init();
  });

  return (
    <>
      <header className="header-global">
        <Navbar className="navbar-main navbar-transparent navbar-light headroom" expand="lg" id="navbar-main">
          <Container>
            <NavbarBrand href="/" className="mr-lg-5">
              {/* Changed name to Dark Emerald Green */}
              <h2 style={{ color: "#064e3b" }} id="nav-title">
                {greetings.name}
              </h2>
            </NavbarBrand>
            <button className="navbar-toggler" aria-label="navbar_toggle" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    {/* Changed mobile menu name to Dark Emerald Green */}
                    <h3 style={{ color: "#064e3b" }} id="nav-title">
                      {greetings.name}
                    </h3>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                {socialLinks.facebook && (
                  <NavItem>
                    <NavLink rel="noopener" aria-label="Facebook" className="nav-link-icon" href={socialLinks.facebook} target="_blank">
                      <i className="fa fa-facebook-square" style={{ color: "#064e3b" }} />
                      <span className="nav-link-inner--text d-lg-none ml-2" style={{ color: "#064e3b" }}>Facebook</span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.instagram && (
                  <NavItem>
                    <NavLink rel="noopener" aria-label="Instagram" className="nav-link-icon" href={socialLinks.instagram} target="_blank">
                      <i className="fa fa-instagram" style={{ color: "#064e3b" }} />
                      <span className="nav-link-inner--text d-lg-none ml-2" style={{ color: "#064e3b" }}>Instagram</span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.github && (
                  <NavItem>
                    <NavLink rel="noopener" aria-label="Github" className="nav-link-icon" href={socialLinks.github} target="_blank">
                      <i className="fa fa-github" style={{ color: "#064e3b" }} />
                      <span className="nav-link-inner--text d-lg-none ml-2" style={{ color: "#064e3b" }}>Github</span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.linkedin && (
                  <NavItem>
                    <NavLink rel="noopener" aria-label="Linkedin" className="nav-link-icon" href={socialLinks.linkedin} target="_blank">
                      <i className="fa fa-linkedin" style={{ color: "#064e3b" }} />
                      <span className="nav-link-inner--text d-lg-none ml-2" style={{ color: "#064e3b" }}>Linkedin</span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.twitter && (
                  <NavItem>
                    <NavLink rel="noopener" aria-label="Twitter" className="nav-link-icon" href={socialLinks.twitter} target="_blank">
                      <i className="fa fa-twitter-square" style={{ color: "#064e3b" }} />
                      <span className="nav-link-inner--text d-lg-none ml-2" style={{ color: "#064e3b" }}>Twitter</span>
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;