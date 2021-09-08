import React from "react";
import Dialog from "../../components/Dialog/Dialog";
import Radio from "../../components/Radio/Radio";

const NewVirtualMachineDialog = () => {
  return (
    <Dialog title="New Virtual Machine" actionText="Launch">
      <label htmlFor="vm-source" className="radio-label">
        Source of VM
      </label>
      <div id="vm-source" style={{ marginLeft: -10 }}>
        <Radio name="vm-source" caption="Image" checked />
        <Radio name="vm-source" caption="Snapshot" />
      </div>
    </Dialog>
  );
};

export default NewVirtualMachineDialog;
