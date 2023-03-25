import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Header from "../components/Header";
import { useState } from "react";
import { Image } from "react-bootstrap";

const UploadSub = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [github, setGithub] = useState("");
  const [prlink, setPrlink] = useState("");

  const handle = () => {
    const oldJson = localStorage.getItem("submissions");
    const oldSubmissions = JSON.parse(oldJson);
    const newSubmission = {
      title,
      summary,
      description,
      name,
      start,
      publishedOn: new Date().toISOString().substring(0, 10),
      end,
      github,
      prlink,
    };
    const newSubmissions = [newSubmission, ...oldSubmissions];
    const newJson = JSON.stringify(newSubmissions);
    localStorage.setItem("submissions", newJson);
    window.location.pathname = "/";

    // localStorage.setItem("title", title);
    // localStorage.setItem("summary", summary);
    // localStorage.setItem("description", description);
    // localStorage.setItem("name", name);
    // localStorage.setItem("start", start);
    // localStorage.setItem("end", end);
    // localStorage.setItem("github", github);
    // localStorage.setItem("prlink", prlink);
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <Header style={{ backgroundColor: "#FFFFFF" }} />

      <span className="rounded">
        <Container
          style={{
            paddingTop: "3rem",
            paddingRight: "18rem",
            paddingBottom: "3rem",
          }}
        >
          <Container
            style={{
              backgroundColor: "#FFFFFF",
              paddingLeft: "5rem",
              borderRadius: "25px",
            }}
          >
            <Row>
              <Col xs={10} className="text-md-left">
                <div>
                  <h3 style={{ marginTop: "50px" }}>
                    New Hackathon Submission
                  </h3>
                </div>
                <div>
                  <p style={{ marginTop: "30px", fontSize: "19px" }}>Title</p>
                  <Form.Control
                    type="input"
                    placeholder="Title of your Submission"
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ padding: ".75rem .75rem" }}
                  />

                  <p style={{ marginTop: "27px", fontSize: "19px" }}>Summary</p>
                  <Form.Floating className="mb-3">
                    <Form.Control
                      type="input"
                      id="floatingInputCustom"
                      placeholder="Disabled input"
                      onChange={(e) => setSummary(e.target.value)}
                    />
                    <label
                      htmlFor="floatingInputCustom"
                      style={{ color: "gray" }}
                    >
                      A short summary of your submission (this will be visible
                      with your submission){" "}
                    </label>
                  </Form.Floating>

                  <p style={{ marginTop: "27px", fontSize: "19px" }}>
                    Description
                  </p>
                  <Form.Floating className="mb-3">
                    <Form.Control
                      type="textarea"
                      id="floatingInputCustom"
                      placeholder="Disabled input"
                      onChange={(e) => setDescription(e.target.value)}
                      style={{ height: "100px" }}
                    />
                    <label
                      htmlFor="floatingInputCustom"
                      style={{ color: "gray" }}
                    >
                      Write a long description of your project. You can describe
                      your idea and approach here
                    </label>
                  </Form.Floating>

                  <p style={{ marginTop: "27px", fontSize: "19px" }}>
                    Cover Image
                  </p>
                  <Container
                    style={{
                      backgroundColor: "#CCCCCC",
                      height: "120px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "15px",
                    }}
                  >
                    <Image src="/addPhoto.png" style={{ height: "65px" }} />
                  </Container>

                  <p style={{ marginTop: "27px", fontSize: "19px" }}>
                    Hackathon Name
                  </p>
                  <Form.Floating className="mb-3">
                    <Form.Control
                      type="input"
                      id="floatingInputCustom"
                      placeholder="Disabled input"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label
                      htmlFor="floatingInputCustom"
                      style={{ color: "gray" }}
                    >
                      Enter the name of the hackathon
                    </label>
                  </Form.Floating>
                  <Row>
                    <Col span={6}>
                      <p style={{ marginTop: "27px", fontSize: "19px" }}>
                        Hackathon Start Date
                      </p>
                      <Form.Floating className="mb-3">
                        <Form.Control
                          as="input"
                          id="floatingInputCustom"
                          placeholder="Disabled input"
                          onChange={(e) => setStart(e.target.value)}
                          type="date"
                        />
                        <label
                          htmlFor="floatingInputCustom"
                          style={{ color: "gray" }}
                        >
                          Select start date
                        </label>
                      </Form.Floating>
                    </Col>
                    <Col span={6}>
                      <p style={{ marginTop: "27px", fontSize: "19px" }}>
                        Hackathon End Date
                      </p>
                      <Form.Floating className="mb-3">
                        <Form.Control
                          as="input"
                          id="floatingInputCustom"
                          placeholder="Disabled input"
                          onChange={(e) => setEnd(e.target.value)}
                          type="date"
                        />
                        <label
                          htmlFor="floatingInputCustom"
                          style={{ color: "gray" }}
                        >
                          Select end date
                        </label>
                      </Form.Floating>
                    </Col>
                  </Row>

                  <p style={{ marginTop: "27px", fontSize: "19px" }}>
                    Github Repository
                  </p>
                  <Form.Floating className="mb-3">
                    <Form.Control
                      type="input"
                      id="floatingInputCustom"
                      placeholder="Disabled input"
                      onChange={(e) => setGithub(e.target.value)}
                    />
                    <label
                      htmlFor="floatingInputCustom"
                      style={{ color: "gray" }}
                    >
                      Enter your submission's public Github repository link
                    </label>
                  </Form.Floating>

                  <p style={{ marginTop: "27px", fontSize: "19px" }}>
                    Other Links
                  </p>
                  <Form.Floating className="mb-3">
                    <Form.Control
                      type="input"
                      id="floatingInputCustom"
                      placeholder="Disabled input"
                      onChange={(e) => setPrlink(e.target.value)}
                    />
                    <label
                      htmlFor="floatingInputCustom"
                      style={{ color: "gray" }}
                    >
                      You can upload a video demo or URL of your demo app here.
                    </label>
                  </Form.Floating>
                </div>
                <hr
                  style={{
                    height: "2px",
                    borderWidth: "0",
                    color: "gray",
                    backgroundColor: "gray",
                    marginTop: "50px",
                  }}
                ></hr>
                <Button
                  style={{
                    backgroundColor: "#44924C",
                    marginBottom: "40px",
                    width: "200px",
                    height: "50px",
                    marginTop: "18px",
                  }}
                  onClick={() => handle()}
                >
                  Upload Submisson
                </Button>
              </Col>
            </Row>
          </Container>
        </Container>
      </span>
    </div>
  );
};

export default UploadSub;
