import React, { useState, useEffect } from "react";
import {
  getHotelExcelItemsList,
  downloadHotelExcelByName,
} from "./DAL/storage";
import { ExcelSelector } from "./components";

import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  const [currentExcelDocument, setCurrentExcelDocument] =
    useState("Select Excel");
  const [availableExcelRefs, setAvailableExcelRefs] = useState([]);

  useEffect(() => {
    getHotelExcelItemsList().then((res) => {
      setAvailableExcelRefs(res);
    });
  }, []);

  const getHotelNamesFromRefs = () => {
    return availableExcelRefs.map((ref) =>
      ref.name.slice(0, ref.name.length - 5)
    );
  };

  const handleDownloadClick = (e) => {
    e.preventDefault();
    downloadHotelExcelByName(currentExcelDocument);
  };

  return (
    <div className="Hotel-visualizer">
      <div className="Hotel-visualizer-bg"></div>
      <div className="Hotel-visualizer-excel-selector-dropdown-div">
        <ExcelSelector
          currentChoice={currentExcelDocument}
          setCurrentChoice={setCurrentExcelDocument}
          choiceList={getHotelNamesFromRefs()}
        />
      </div>
      <div className="Hotel-visualizer-download-button-div">
        <Button
          disabled={currentExcelDocument === "Select Excel"}
          onClick={handleDownloadClick}
        >
          Download
        </Button>
      </div>
    </div>
  );
}

export default App;
