import React from "react";
import Button from "../../components/Button/Button";
import IconButton from "../../components/IconButton/IconButton";

const VirtualMachineListItem = ({ children }) => {
  return (
    <div className="virtual-machine-list-item mdc-elevation--z2 d-flex align-items-center">
      <Button icon="content_copy" outlined />
      <div>
        <p>Working VM</p>
        <IconButton>info</IconButton>
        <p>387.987.150.150</p>
      </div>
    </div>
  );
};

export default VirtualMachineListItem;
