import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

//will only render if it has children
const Modal = ({ children }) => {
    //create the same div every time it renders - container
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }
//add created thing to the div put in index
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    //anything returned in the effect will happen once component unmounts
    return () => modalRoot.removeChild(elRef.current);
  }, []);
//div not needed - for styling
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;