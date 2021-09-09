import React from "react";
import Dialog from "../../components/Dialog/Dialog";
import Radio from "../../components/Radio/Radio";
import Select from "../../components/Select/Select";
import Slider from "../../components/Slider/Slider";
import TextField from "../../components/TextField/TextField";

const options = [
  {
    value: "ubuntu18.04",
    title: "Ubuntu 18.04",
  },
  {
    value: "macos",
    title: "MacOS",
  },
  {
    value: "windows10",
    title: "Windows 10",
  },
];

const NewVirtualMachineDialog = () => {
  return (
    <Dialog
      title="New Virtual Machine"
      actionText="Launch"
      className="vm-dialog"
    >
      <label htmlFor="vm-source" className="radio-label">
        Source of VM
      </label>
      <div id="vm-source" className="vm-dialog__source">
        <Radio name="vm-source" caption="Image" checked />
        <Radio name="vm-source" caption="Snapshot" />
      </div>
      <Select className="w-100" label="Image" options={options} selected={0} />
      <div className="vm-dialog__machine">
        <Slider name="cpu" value={2} min={1} max={4} label="CPU" />
        <Slider name="cpu" value={4} min={2} max={8} step={2} label="RAM" />
      </div>
      <TextField className="w-100" label="Name" name="name" value="Ubuntu VM" />
      <TextField
        className="w-100"
        label="Description"
        name="description"
        value="This is test machine"
      />
      <TextField
        textarea
        className="w-100"
        label="SSH Key (custom public key)"
        name="ssh-key"
        value="1231312312hgrgherg89ehoge8ghe48ghe894hg9e948gh8e4e4"
      />
      <TextField
        className="w-100"
        label="Labels"
        name="labels"
        value=""
        placeholder="Create new or pick existing"
      />
    </Dialog>
  );
};

export default NewVirtualMachineDialog;
