import React from "react";

const VideoList = ({ byee }) => {
  return (
    <div className="theListBorder2">
      <div className="videoplayer">
        {/* <video width="100%" controls autoPlay>
          <source src={byee} type="video/mp4" />
        </video> */}
        <video width="100%" controls>
          <source src={byee} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoList;
