import React from "react";
import Subs from "./Subs";
import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";

function Submissions({ sortBy }) {
  const [items, setItems] = useState(() => {
    const json = localStorage.getItem("submissions");
    return JSON.parse(json);
  });

  const sortedItems = [...items];
  if (sortBy === "Oldest") sortedItems.reverse();

  return (
    <Container>
      <Row>
        {sortedItems.map((element) => {
          const publishedOn = new Date(
            `${element.publishedOn}T00:05:30Z`
          ).getTime();
          const today = Date.now();
          const diff = today - publishedOn;
          const ONE_DAY = 1e3 * 60 * 60 * 24;
          const days = Math.floor(diff / ONE_DAY);

          return (
            <Col className="my-4" key={element.title}>
              <Subs
                title={element.title}
                description={element.summary}
                urlToImage={element.urlToImage}
                publishedAt={
                  days === 0
                    ? "uploaded today"
                    : days === 1
                    ? "uploaded 1 day ago"
                    : `uploaded ${days} days ago`
                }
                index={items.indexOf(element)}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Submissions;
