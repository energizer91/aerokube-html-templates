import React from "react";
import cn from "../../helpers/classnames";

const Snackbar = ({ children }) => {
  const root = cn("snackbar");

  return (
    <aside className={root({ open: true })}>
      <div className={root("surface")} role="status" aria-relevant="additions">
        <div className={root("label")} aria-atomic="false">
          {children}
        </div>
      </div>
    </aside>
  );
};

export default Snackbar;
