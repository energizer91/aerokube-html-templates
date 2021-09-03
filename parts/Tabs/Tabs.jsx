import React from "react";
import cn from "../../helpers/classnames";

const Tabs = ({ tabs = [], active = 0 }) => {
  const root = cn("tabs");

  return (
    <div className={root(null, ["mdl-js-tabs", "mdl-js-ripple-effect"])}>
      <div className={root("tab-bar")}>
        {tabs.map((tab, index) => (
          <a
            key={tab.id}
            href={"#" + tab.id}
            className={root("tab") + (index === active ? " is-active" : "")}
          >
            {tab.name}
          </a>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          id={"#" + tab.id}
          className={root("panel") + (index === active ? " is-active" : "")}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
