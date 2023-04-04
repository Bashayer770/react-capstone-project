import React from "react";
import CloseIcon from "../svg/CloseIcon";

const uploadForm = () => {
  return (
    <div className="uploadContainer">
      <div className="card">
        <div className="fileUpload">file upload:</div>
        <div className="closeIcone" style={{ backgroundColor: "orange" }}>
          <CloseIcon />
        </div>
        <div className="uploadUnderLine"></div>

        <div className="uploadingFile"></div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default uploadForm;
