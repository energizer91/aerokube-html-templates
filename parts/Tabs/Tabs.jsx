import React from "react";
import cn from "../../helpers/classnames";
import {MDCTabBar} from '@material/tab-bar';

const Tabs = ({ tabs = [], active: initialActive = 0, onChange }) => {
  const root = cn("tab-bar");
  const tabRoot = cn("tab");
  const scroller = cn("tab-scroller");
  const indicator = cn("tab-indicator");

  const ref = React.useRef(null);
  const [tabHandler, setTabHandler] = React.useState(null);
  const changeHandler = React.useCallback((index) => () => {
    onChange(tabs[index]);
  }, [onChange]);

  React.useEffect(() => {
    if (tabHandler) {
      tabHandler.foundation.adapter.setActiveTab(initialActive);
    }
  }, [onChange, tabHandler, initialActive]);
  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    const tabBar = new MDCTabBar(ref.current);
    setTabHandler(tabBar);

    return () => {
      if (tabBar) {
        tabBar.destroy();
      }
    }
  }, [ref, setTabHandler]);

  return (
    <div ref={ref} className={root()} role="tablist">
      <div className={scroller()}>
        <div className={scroller("scroll-area")}>
          <div className={scroller("scroll-content")}>
            {tabs.map((tab, index) => (
              <button key={tab.id} className={tabRoot()} role="tab" aria-selected="true"
                      onClick={changeHandler(index)} tabIndex={index}>
              <span className={root("content")}>
                <span className={root("text-label")}>{tab.name}</span>
              </span>
                <span className={indicator()}>
                <span className={indicator("content", { underline: true })} />
              </span>
                <span className={tabRoot('ripple')} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
