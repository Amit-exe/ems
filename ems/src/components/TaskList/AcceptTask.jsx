import React from "react";

function AcceptTask() {
  return (
    <div className="h-full flex-shrink-0 w-[300px] bg-red-400 rounded-xl p-5">
      <div className="flex justify-between">
        <h3 className="bg-red-600 px-3 py-1 rounded-xl text-sm">High</h3>
        <h4 className="text-sm">20 feb 2024</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a video</h2>
      <p className="text-sm mt-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus
        aperiam eius omnis et sunt?
      </p>
    </div>
  );
}

export default AcceptTask;
