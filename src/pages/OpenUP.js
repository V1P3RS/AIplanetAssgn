import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Header from "../components/Header";

const OpenUP = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    const index = Number(params.get("index"));
    const submissions = JSON.parse(localStorage.getItem("submissions"));
    const submission = submissions[index];
    setData(submission);
  }, []);

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
              <Container style={{ paddingTop: "50px" }}>
                <Row>
                  <Col span={1}>
                    <Image
                      src="/InterviewMe.png"
                      style={{ height: "120px", width: "120px" }}
                    />
                  </Col>
                  <Col
                    span={11}
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <h2>{data.title}</h2>
                  </Col>
                </Row>
                <p>{data.summary}</p>
                <Col>
                  <Image src="/star.png" style={{ height: "17px" }} />
                </Col>
              </Container>
            </Col>
          </Row>
        </Container>

        <Container style={{ paddingTop: "200px" }}>
          <h3>Description</h3>

          <p>{data.description}</p>
        </Container>
      </div>
    </div>
  );
};

export default OpenUP;
