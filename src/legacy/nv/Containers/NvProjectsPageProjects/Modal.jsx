"use client";
import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';

//import useOutsideClick from '../hooks/useOutsideClick';

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState('');
  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  // clone the trigger element and attach an onClick that sets the modal open state
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all ">
      <div
        // ref={ref}
        className="fixed left-1/2 top-1/2 z-50  -translate-x-1/2 -translate-y-1/2 transform rounded-lg w-[500px] bg-white p-8 shadow-lg transition-all "
      >
        <button
          onClick={close}
          className="absolute right-3 top-3 rounded-md p-2 transition-colors hover:bg-gray-100"
        >
          {/* <HiXMark className="h-7 w-7 text-red-600" /> */} X
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
