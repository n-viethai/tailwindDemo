import React from "react";

export default function DemoGrid(props) {
  return (
    <div className="container mx-auto px-40">
      <div className="grid grid-cols-5 gap-3">
          <div className="bg-red-500">1</div>
          <div className="bg-blue-500">2</div>
          <div className="bg-yellow-500">3</div>
          <div className="bg-pink-500">4</div>
          <div className="bg-green-500">5</div>
      </div>
    </div>
  );
}
