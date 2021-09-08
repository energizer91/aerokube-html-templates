import React from "react";
import Dialog from "../../components/Dialog/Dialog";
import Radio from "../../components/Radio/Radio";
import Select from "../../components/Select/Select";
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
    <Dialog title="New Virtual Machine" actionText="Launch">
      <label htmlFor="vm-source" className="radio-label">
        Source of VM
      </label>
      <div id="vm-source" style={{ marginLeft: -10, marginBottom: 16 }}>
        <Radio name="vm-source" caption="Image" checked />
        <Radio name="vm-source" caption="Snapshot" />
      </div>
      <Select
        className="w-100 mb-24"
        label="Image"
        options={options}
        selected={0}
      />
      <TextField
        className="w-100 mb-24"
        label="Name"
        name="name"
        value="Ubuntu VM"
      />
      <TextField
        className="w-100 mb-24"
        label="Description"
        name="description"
        value="This is test machine"
      />
      <TextField
        textarea
        className="w-100 mb-24"
        label="SSH Key (custom public key)"
        name="ssh-key"
        value="1231312312hgrgherg89ehoge8ghe48ghe894hg9e948gh8e4e4"
      />
      <TextField
        className="w-100 mb-24"
        label="Labels"
        name="labels"
        value=""
        placeholder="Create new or pick existing"
      />
    </Dialog>
  );
};

export default NewVirtualMachineDialog;
