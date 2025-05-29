import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import "./Modal.scss";

export type ModalProps = {
  /** The main title of the modal */
  title: string;
  /** For external components to be placed in the modal body */
  children: React.ReactNode;
  /** Global control for the modal buttons:
   * When variant is multiple it displays cancel and secondary button, otherwise only primary is shown
   * actions add access to the function of the buttons
   */
  buttons: {
    variant?: "multiple";
    actions: {
      onPrimary: () => void;
      onSecondary?: () => void;
      onCancel?: () => void;
    };
  };
};

const Modal = ({ title, children, buttons }: ModalProps) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // This effect listen to keyboard pressed when the modal is open
  useEffect(() => {
    if (!showModal || !modalRef) return;
    const modal = modalRef.current;
    // Help us to get the elements inside the modal that can be focused
    const modalFocusElements = modal?.querySelectorAll<HTMLElement>(
      'a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])'
    );

    // We grab the first and last focus-able elements inside the modal
    const first = modalFocusElements?.[0];
    const last = modalFocusElements?.[modalFocusElements?.length - 1];

    // Focus on the first element
    first?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
      // Traps the user when the modal is open
      // when pressing tab or shift + tab, such that the user won't be able to focus elements behind the modal
      if (e.key === "Tab") {
        if (e.shiftKey) {
          // we only look for the first element to loop back to the last to prevent the user on focusing on elements outs
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // clean up function
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showModal]);

  const handleClose = () => {
    buttons.actions.onCancel?.();
    setShowModal(false);
  };

  return (
    <>
      {!showModal && (
        <Button label="open modal" onClick={() => setShowModal(true)} />
      )}

      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="modal"
          ref={modalRef}
        >
          <Button
            variant="icon"
            label="X"
            className="modal-button-close"
            onClick={handleClose}
          />
          <h2 id="modal-title" className="modal-header">
            {title}
          </h2>
          <div className="modal-body">{children}</div>
          <footer className="modal-footer">
            {buttons.variant === "multiple" && (
              <>
                <Button
                  variant="ghost"
                  label="cancel"
                  onClick={handleClose}
                  className="modal-button-cancel"
                />
                <Button
                  variant="secondary"
                  label="secondary"
                  onClick={buttons.actions.onSecondary}
                />
              </>
            )}
            <Button label="primary" onClick={buttons.actions.onPrimary} />
          </footer>
        </div>
      )}
    </>
  );
};
export default Modal;
