import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

const Subs = (props) => {
  let { title, description, urlToImage, publishedAt, index } = props;
  return (
    <Card
      className="my-3 h-100"
      style={{
        width: "360px",
        height: "289px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.20)",
      }}
      onClick={() => {
        const { origin } = window.location;
        window.location = `/OpenUP?index=${index}`;
      }}
    >
      {" "}
      <Card.Body>
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Card.Img
            variant="top"
            src={urlToImage}
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card.Title>{title}</Card.Title>
          </Container>
        </Container>
        <Container style={{ marginTop: "32px" }}>
          <Card.Text>{description}</Card.Text>
        </Container>
        <Container style={{ marginTop: "32px" }}>
          <Card.Text
            className="text-muted"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "end",
              fontStyle: "italic",
            }}
          >
            {publishedAt}
          </Card.Text>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default Subs;
