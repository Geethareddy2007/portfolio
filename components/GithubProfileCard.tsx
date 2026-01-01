import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { GithubUserType } from "../types";
import SocialLinks from "./SocialLinks";

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
<Card className="section-lg shadow-lg border-0" style={{ backgroundColor: "#FFD1DC" }}>
<Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
  src="https://media.licdn.com/dms/image/v2/D4D03AQG0BVt37CclBg/profile-displayphoto-shrink_400_400/B4DZTqEwJkHkAg-/0/1739093903285?e=1769040000&v=beta&t=U9O00TLarqHXeUSEF8ivS9vHRUauo0F7CfUNctkZHmw"
  style={{ width: "200px" }}
  alt="Profile"
  className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
/>
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Reach Out to me!</h2>
              <p className="lead text-white mt-3">DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL</p>
              <p className="text-white mt-3">{bio}</p>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
  <i className="ni ni-pin-3 text-info mr-2" />
  Guntur, INDIA.
</div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
