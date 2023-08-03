import React from "react";

export default function ModalPopup({ visible, onClose, getMessage, getTitle }) {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  const message = getMessage; // Call the getMessage function to get the text string

  const title = getTitle; // Call the getTitle function to get the text string

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black h-screen bg-opacity-30 backdrop-blur-sm flex justify-center 
      items-center z-30 left-0"
    >
      <div className="  bg-black p-3 rounded h-[60%] w-[80%]">
        <p className="text-slate-500 h2"> {title} </p>
        <p className="text-slate-500"> {message} </p>
      </div>
    </div>
  );
}
