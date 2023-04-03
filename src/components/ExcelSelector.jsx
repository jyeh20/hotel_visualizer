import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function ExcelSelector(props) {
  const { currentChoice, setCurrentChoice, choiceList } = props;

  const handleItemClick = (e) => {
    e.preventDefault();
    setCurrentChoice(e.target.innerText);
  };
  return (
    <Dropdown className="d-inline mx-2">
      <Dropdown.Toggle id="dropdown-autoclose-true">
        {currentChoice}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {choiceList.map((choice) => (
          <Dropdown.Item onClick={handleItemClick} key={choice}>
            {choice}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ExcelSelector;
