import React from "react";
import CloseIcon from "../svg/CloseIcon";
import Upload from "../svg/Upload";

const uploadForm = () => {
  return (
    <div className="uploadContainer">
      <div className="card">
        <div className="fileUpload">file upload:</div>
        <div className="closeIcone" style={{ backgroundColor: "orange" }}>
          <CloseIcon />
        </div>
        <div className="uploadUnderLine"></div>

        <div className="uploadingFile">
          <div className="filesUploads">
            <input type="file" hidden />
            <button>Choose File</button>
            <span>No File Choosen</span>
          </div>
        </div>
        <div className="uploadUnderLine2"></div>
        <div className="descriptionC"></div>
        <div className="description">Description...</div>
        <button className="Button_2">UPLOAD</button>
      </div>
      <div className=""></div>
    </div>
  );
};

export default uploadForm;
