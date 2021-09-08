import React from "react";
import Button from "../../components/Button/Button";
import Switch from "../../components/Switch/Switch";
import ChipSet from "../../components/ChipSet/ChipSet";
import IconButton from "../../components/IconButton/IconButton";

const VirtualMachineListItem = ({ virtualMachine = {} }) => {
  return (
    <div className="virtual-machine-list-item mdc-elevation--z2 d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <Button icon="content_copy" outlined />
        <div className="virtual-machine-list-item__name-container">
          <p className="virtual-machine-list-item__name">
            {virtualMachine.name}
            <IconButton>info</IconButton>
          </p>
          <p className="virtual-machine-list-item__ip-address">
            {virtualMachine.ipAddress}
          </p>
        </div>
        <div className="virtual-machine-list-item__config-block">
          <ChipSet
            chips={virtualMachine.config.map((c) => ({
              id: c,
              caption: c,
              color: "default",
            }))}
          />
        </div>
        <div className="virtual-machine-list-item__label-block">
          <ChipSet
            chips={virtualMachine.labels.map((c) => ({
              id: c.caption,
              caption: c.caption,
              color: c.color,
            }))}
          />
        </div>
      </div>
      <div className="d-flex align-items-center virtual-machine-list-item__right-buttons">
        <Switch caption="Running" outlined />
        <Button icon="save" outlined />
        <Button icon="delete_forever" outlined />
      </div>
    </div>
  );
};

export default VirtualMachineListItem;
