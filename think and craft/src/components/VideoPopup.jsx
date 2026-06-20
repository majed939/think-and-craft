import React from "react";

export default function VideoPopup({
  onClose,
  videoSrc
}) {

  return (

    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">

      <div className="bg-white p-4 rounded w-3/4">

        <video
          controls
          autoPlay
          className="w-full"
        >
          <source
            src={videoSrc}
            type="video/mp4"
          />
        </video>

        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          إغلاق
        </button>

      </div>

    </div>

  );

}