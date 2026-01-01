import React from "react";
import EducationCard from "../components/EducationCard";
import { educationInfo } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";

const Education = () => {
  return (
    educationInfo && (
      <Fade bottom duration={2000}>
        <section 
          className="section pb-0 my-5" 
          /* Removed bg-gradient-info and added baby pink background */
          style={{ backgroundColor: '#ffc0caff' }}
        >
          <Container>
            <div className="d-flex px-3">
              <div>
                <div 
                  /* Changed icon circle colors to pink theme */
                  className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle"
                  style={{ color: '#feb2b6ff' }}
                >
                  <i className="ni ni-books" />
                </div>
              </div>
              <div className="pl-4">
                {/* Changed title to deep pink for readability on light pink */}
                <h4 className="display-3" style={{ color: '#1b4723ff' }}>
                  Education
                </h4>
              </div>
            </div>
            <Row className="row-grid align-items-center">
              {educationInfo.map((info, index) => {
                return (
                  <Col className="order-lg-1" lg="6" key={index}>
                    {/* Explicitly passing props to avoid TypeScript issues */}
                    <EducationCard 
                      schoolName={info.schoolName}
                      subHeader={info.subHeader}
                      duration={info.duration}
                      desc={info.desc}
                      grade={info.grade}
                      descBullets={info.descBullets || []}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
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
      </Fade>
    )
  );
};

export default Education;