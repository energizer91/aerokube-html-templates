import React from "react";

const VirtualMachineListItem = ({ children }) => {
  return (
    <div className="virtual-machine-list-item mdl-shadow--2dp d-flex justify-content-center">
      {children}
    </div>
  );
};

export default VirtualMachineListItem;
