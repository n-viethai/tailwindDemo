import React from "react";
import Card from "./Card";

export default function BaiTap(props) {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-center text-4xl mt-8 text-blue-500">
        Welcome to the cybersoft frontend with TailwindCSS
      </h1>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div>
            <Card content="1BTC" />
        </div>
        <div>
            <Card content="$Free" />
        </div>
        <div>
            <Card content="Free" />
        </div>
      </div>
    </div>
  );
}
