import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Submissions from "../components/Submissions";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [sortBy, setSortBy] = useState("Newest");

  return (
    <div>
      <Header />
      <div
        style={{
          backgroundColor: "#003145",
          backgroundImage: "url(/waves.png)",
          padding: "6vh 10vw",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
          height: "400px",
        }}
      >
        <Container>
          <Row>
            <Col
              xs={8}
              className="text-md-left"
              style={{
                color: "white",
                marginTop: "10px",
                marginBottom: "13px",
              }}
            >
              <h1
                style={{
                  fontFamily: "system-ui",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "42px",
                  marginTop: "20px",
                  marginBottom: "10px",
                  paddingBottom: "25px",
                }}
              >
                Hackathon Submissions
              </h1>
              <p
                style={{
                  fontFamily: "system-ui",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "17px",
                  marginBottom: "10px",
                  paddingBottom: "25px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Urna cursus amet
                pellentesque in parturient purus feugiat faucibus. Congue
                laoreet duis porta turpis eget suspendisse ac pharetra amet. Vel
                nisl tempus nec vitae.
              </p>
              <NavLink to="/UploadSub" exact className="nav-link">
                <Button
                  style={{
                    backgroundColor: "#44924C",
                    marginBottom: "200px",
                    width: "200px",
                    height: "50px",
                  }}
                >
                  Upload Submisson
                </Button>
              </NavLink>
            </Col>
            <Col xs={4} className="text-center">
              <Image
                src="/HandHoldingBulb3D.png"
                style={{
                  width: "200px",
                  borderRadius: "0px",
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar sortBy={sortBy} setSortBy={setSortBy} />
      <Submissions sortBy={sortBy} />
    </div>
  );
};

export default Home;
