"use client";
import ReactDom from 'react-dom';

interface BackDropProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const BackDrop = (props: BackDropProps) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-[11] bg-black/80 cursor-auto"
      onClick={props.onClick}
    />
  );
};

interface ModalOverlayProps {
  header?: React.ReactNode;
  body?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  style?: React.CSSProperties;
}

const ModalOverlay = (props: ModalOverlayProps) => {
  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-[12] overflow-x-hidden overflow-y-auto bg-white m-auto animate-[appear_0.2s_ease-in-out] flex items-center justify-center rounded-[10px] max-w-[594px] max-h-[573px] min-w-[594px] min-h-[573px] min-[768px]:max-[1023px]:w-[60%] min-[768px]:max-[1023px]:h-[35vh] max-[767px]:h-[375px] max-[767px]:w-[378px] max-[767px]:max-w-[378px] max-[767px]:min-w-[378px] max-[767px]:min-h-[375px] max-[767px]:max-h-[375px]"
      style={props.style}
    >
      <div className="w-full h-full text-left">{props.body}</div>
    </div>
  );
};

const backdropContainer =
  typeof document !== 'undefined' ? document.getElementById('backdrop') : null;
const modalOverlay =
  typeof document !== 'undefined' ? document.getElementById('modal-overlay') : null;

interface FormSubmitModalProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  header?: React.ReactNode;
  body?: React.ReactNode;
  style?: React.CSSProperties;
}

const FormSubmitModal = (props: FormSubmitModalProps) => {
  return (
    <div>
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
