import React from "react";
import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    projects && (
      <Fade bottom duration={2000}>
        <section className="section section-lg">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div 
                  /* Removed text-info, added pink color style */
                  className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle"
                  style={{ color: '#244e21ff' }}
                >
                  {/* Changed icon from blue to pink */}
                  <i className="ni ni-laptop" style={{ color: '#f7a0a0ff' }} />
                </div>
              </div>
              <div className="pl-4">
                {/* Changed "Projects" title from blue (text-info) to pink */}
                <h4 className="display-3" style={{ color: '#204522ff' }}>
                  Projects
                </h4>
              </div>
            </div>
            <Row className="row-grid align-items-center">
              {projects.map((data, i) => {
                return <ProjectsCard key={i} {...data} />;
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Projects;