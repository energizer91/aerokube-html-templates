import React from "react";
import cn from "../../helpers/classnames";
import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";
import { MDCDialog } from "@material/dialog";

const Dialog = ({ children, title, actionText, onAction, className }) => {
  const root = cn("dialog");
  const ref = React.useRef(null);
  const [dialog, setDialog] = React.useState(null);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    const dialog = new MDCDialog(ref.current);
    setDialog(dialog);
    dialog.open();
  }, [ref]);
  const onDialogClose = React.useCallback(() => {
    if (!dialog) {
      return;
    }

    dialog.close();
  }, [dialog]);

  return (
    <div ref={ref} className={root()}>
      <div className={root("container")}>
        <div
          className={root("surface")}
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="my-dialog-title"
          aria-describedby="my-dialog-content"
        >
          <div className="d-flex align-items-center justify-content-between mdc-dialog__title-wrapper">
            <h2 className={root("title")} id="my-dialog-title">
              {title}
            </h2>
            <IconButton onClick={onDialogClose}>close</IconButton>
          </div>
          <div
            className={root("content", className.split(" "))}
            id="my-dialog-content"
          >
            {children}
          </div>
          <div className={root("actions")}>
            <Button
              className={root("button")}
              unelevated
              data-mdc-dialog-action="accept"
              onClick={onAction}
            >
              {actionText}
            </Button>
            <Button
              className={root("button")}
              data-mdc-dialog-action="close"
              outlined
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
      <div className="mdc-dialog__scrim" />
    </div>
  );
};

export default Dialog;
