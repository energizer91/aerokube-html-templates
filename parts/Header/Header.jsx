import React from "react";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-4 d-flex align-items-center">
          <TextField dark placeholder="Search by name or tag" />
        </div>
        <div className="col-12 col-sm-6 offset-sm-2 d-flex justify-content-end">
          <Button raised colored>
            New virtual machine
          </Button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
