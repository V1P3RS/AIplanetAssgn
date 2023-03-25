import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Image } from "react-bootstrap";

function SearchBar() {
  return (
    <>
      <InputGroup size="md" className="mb-3">
        <InputGroup.Text
          id="inputGroup-sizing-sm"
          style={{ borderRadius: "5rem 0 0 5rem" }}
        >
          <Image src="/search.svg" />
        </InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{ borderRadius: "0 5rem 5rem 0" }}
        />
      </InputGroup>
    </>
  );
}

export default SearchBar;
