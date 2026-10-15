"use client";
import React from 'react';
import classes from './FormSubmitModal.module.css';
import ReactDom from 'react-dom';

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal} style={props.style}>
      <div>{props.body}</div>
    </div>
  );
};

const backdropContainer =
  typeof document !== 'undefined' ? document.getElementById('backdrop') : null;
const modalOverlay =
  typeof document !== 'undefined' ? document.getElementById('modal-overlay') : null;

const FormSubmitModal = (props) => {
  return (
    <div className={classes.container}>
      {ReactDom.createPortal(
        <BackDrop onClick={props.onClick} />,
        backdropContainer || document.body
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          header={props.header}
          body={props.body}
          onClick={props.onClick}
          style={props.style}
        />,
        modalOverlay || document.body
      )}
    </div>
  );
};

export default FormSubmitModal;
