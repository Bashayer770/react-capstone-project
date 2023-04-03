import React from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import WorldMap from "../svg/worldMap";

const Test = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100vw",
      }}
    >
      <TransformWrapper limitToBounds={false}>
        <TransformComponent>
          <WorldMap className={"map"} been={[]} width="2000" />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default Test;
