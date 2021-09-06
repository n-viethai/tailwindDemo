import React from "react";

export default function FlexDemo(props) {
  return (
    <div className="2xl:max-w-screen-xl mx-auto overflow-hidden">
      <div className="bg-purple-500 w-screen h-screen flex">
        <div
          className="w-20 h-20 text-center bg-red-500"
          style={{ lineHeight: "80px" }}
        >
          1
        </div>
        <div
          className="w-20 h-20 text-center bg-green-500"
          style={{ lineHeight: "80px" }}
        >
          2
        </div>
        <div
          className="w-20 h-20 text-center bg-blue-500"
          style={{ lineHeight: "80px" }}
        >
          3
        </div>
        <div
          className="w-20 h-20 text-center bg-pink-500"
          style={{ lineHeight: "80px" }}
        >
          4
        </div>
        <div
          className="w-20 h-20 text-center bg-indigo-500"
          style={{ lineHeight: "80px" }}
        >
          5
        </div>
      </div>
    </div>
  );
}
