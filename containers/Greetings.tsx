import React, { useEffect } from "react";
import { greetings } from "../portfolio";
import { Button, Container, Row, Col } from "reactstrap";
import SocialLinks from "../components/SocialLinks";

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          {/* BACKGROUND: Kept as Baby Pink per your request */}
          <div 
            className="shape shape-style-1" 
            style={{ backgroundColor: "#FFD1DC", backgroundImage: "none" }}
          >
            {/* Soft white bubbles for the pink background */}
            <span style={{ background: "rgba(255,255,255,0.4)" }} />
            <span style={{ background: "rgba(255,255,255,0.3)" }} />
            <span style={{ background: "rgba(255,255,255,0.3)" }} />
            <span style={{ background: "rgba(255,255,255,0.2)" }} />
            <span style={{ background: "rgba(255,255,255,0.2)" }} />
          </div>

          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row className="align-items-center">
                {/* LEFT SIDE: Text in Dark color for pink background */}
                <Col lg="6">
                  <h1 className="display-3 text-dark">
                    {greetings.title + " "}
                  </h1>
                  <p className="lead text-dark" style={{ fontWeight: "500" }}>
                    {greetings.description}
                  </p>
                  <SocialLinks />
                  {greetings.resumeLink && (
                    <div className="btn-wrapper my-4">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        href={greetings.resumeLink}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-file" />
                        </span>
                        <span className="btn-inner--text">SEE MY RESUME</span>
                      </Button>
                    </div>
                  )}
                </Col>

                {/* RIGHT SIDE: Large, Visible Girl Illustration */}
                <Col lg="6">
                  <div className="d-flex justify-content-center">
                    <img 
                      src="/img/icons/common/gg.png" 
                      alt="girl-coding" 
                      style={{ 
                        width: '120%',       // Makes it wider than the column
                        maxWidth: '270px',    // Allows it to grow large
                        height: 'auto',
                        transform: 'scale(1.25)', // Zooms her in for high visibility
                        marginTop: '30px',
                        filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.1))' // Soft shadow for pink
                      }} 
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>

          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Greetings;