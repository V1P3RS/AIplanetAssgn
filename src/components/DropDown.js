import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";

function DropDown({ sortBy, setSortBy }) {
  return (
    <DropdownButton
      variant="outline-secondary"
      title={sortBy}
      className="sortby-dropdown"
    >
      <Dropdown.Item onClick={() => setSortBy("Newest")}>Newest</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => setSortBy("Oldest")}>Oldest</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropDown;
