import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom';

let portalElement;

if (typeof window !== 'undefined') {
  portalElement = document.createElement('div');
  portalElement.id = 'overlay';
  document.body.appendChild(portalElement);
}

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggleModel() {
    setIsShowing((prev) => !prev);
  }

  return {
    isShowing,
    toggleModel,
    Backdrop: () => (
      <Fragment>
        {isShowing &&
          ReactDOM.createPortal(
            <div onClick={() => toggleModel()} className='backdrop' />,
            portalElement
          )}
      </Fragment>
    ),
    ModalOverlay: ({ children, externalClass }) => (
      <Fragment>
        {isShowing &&
          ReactDOM.createPortal(
            <div className={`modal-overlay w-full ${externalClass}`}>
              {children}
            </div>,
            portalElement
          )}
      </Fragment>
    ),
  };
};

export default useModal;
