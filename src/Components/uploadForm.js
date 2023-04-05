import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CloseIcon from "../svg/CloseIcon";
import Upload from "../svg/Upload";

const UploadForm = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  return (
    <div className="uploadContainer">
      <div className="card">
        <div className="fileUpload">file upload:</div>
        <div className="closeIcone" style={{ backgroundColor: "orange" }}>
          <CloseIcon
            onClick={() => {
              navigate(`/wrapup/${country}`);
            }}
          />
        </div>
        <div className="uploadUnderLine"></div>

        <div className="uploadingFile">
          <div className="filesUploads">
            <input type="file" hidden />
            <button>Choose File</button>
            <span>No File Choosen</span>
            <div className="uploadIcon">
              <Upload />
            </div>
          </div>
        </div>
        <div className="uploadUnderLine2"></div>
        <div className="descriptionC"></div>
        {/* <div className="description">Description...</div> */}
        <div className="description">
          <input
            type="text"
            name="description"
            placeholder="Description..."
          ></input>
        </div>
        <button className="Button_2">UPLOAD</button>
      </div>
      <div className=""></div>
    </div>
  );
};

export default UploadForm;
