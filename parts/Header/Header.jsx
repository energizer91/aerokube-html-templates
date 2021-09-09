import React from "react";
import cn from "../../helpers/classnames";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";

const StatusIcon = ({ status }) => {
  const root = cn("status-icon");

  return <span role="img" className={root({ status })} />;
};

const Header = ({
  avatar = "",
  status = { status: "Connected", used: "50%", quota: "50 + 0 / 100" },
}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-4 d-flex align-items-center">
            <img src={avatar} alt="avatar" className="header__avatar" />
            <TextField dark icon="search" placeholder="Search by name or tag" />
          </div>
          <div className="col-12 col-sm-6 offset-sm-2 d-flex justify-content-end align-items-center">
            <Button unelevated colored>
              New Virtual Machine
            </Button>
            <div className="d-flex header__status">
              <div className="header__status-item">
                <p className="header__status-heading">Status</p>
                <p className="header__status-info">
                  <StatusIcon status={status.status} />
                  {status.status}
                </p>
              </div>
              <div className="header__status-item">
                <p className="header__status-heading">Used</p>
                <p className="header__status-info">{status.used}</p>
              </div>
              <div className="header__status-item">
                <p className="header__status-heading">Quota</p>
                <p className="header__status-info">{status.quota}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
