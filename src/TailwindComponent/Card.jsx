import React from "react";

export default function Card(props) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div className="bg-gray-300 p-8 pb-20 text-center">
        <p className="text-purple-600 font-bold">Category</p>
        <p className="font-bold text-xl mt-2">CyberSoft Frontend Developer</p>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nesciunt
          quas ullam, quibusdam tempore culpa recusandae tempora sequi
          doloremque suscipit?
        </p>
      </div>
      <div className="bg-gray-200">
        <div className="flex justify-between items-center p-4">
          <p>{props.content}</p>
          <button className="bg-purple-500 px-4 py-2 text-white rounded-md hover:bg-purple-700 transition-all ease-in-out duration-500">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
