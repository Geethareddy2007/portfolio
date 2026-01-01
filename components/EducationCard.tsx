import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import { EducationType } from "../types/sections";
import Fade from "react-reveal/Fade";

const EducationCard = ({ schoolName, subHeader, duration, desc, grade, descBullets }: EducationType) => {
  return (
    <Fade left duration={2000}>
      <Card className="shadow-lg--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              {/* School Name in Emerald Green */}
              <h5 style={{ color: '#296a3fff', fontWeight: 'bold' }}>
                {schoolName}
              </h5>
              <h6>{subHeader}</h6>
              
              {/* Duration Badge in Emerald Green */}
              <Badge 
                style={{ backgroundColor: '#297242ff', color: 'white' }} 
                className="mr-1"
              >
                {duration}
              </Badge>

              {grade && (
                /* Grade Badge in Emerald Green */
                <Badge 
                  style={{ backgroundColor: '#ffa8a8ff', color: 'white' }} 
                  className="mr-1"
                >
                  {grade}
                </Badge>
              )}

              <p className="description mt-3">{desc}</p>
              <ul>
                {descBullets
                  ? descBullets.map((bullet, index) => {
                      return <li key={index}>{bullet}</li>;
                    })
                  : null}
              </ul>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default EducationCard;