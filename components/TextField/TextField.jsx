import React from "react";
import cn from "../../helpers/classnames";

const TextField = ({
  id = "textfield",
  label,
  dark = false,
  value,
  placeholder,
  error,
}) => {
  const root = cn("textfield");

  return (
    <div className={root({ dark }, ["mdl-js-textfield"])}>
      {label && (
        <label className={root("label")} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={root("icon-wrapper")}>
        {dark && (
          <svg
            className={root("icon")}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
              fill="currentColor"
            />
          </svg>
        )}
        <input
          className={root("input")}
          type="text"
          id={id}
          defaultValue={value}
          placeholder={placeholder}
        />
        {error && <span className={root("error")}>{error}</span>}
      </div>
    </div>
  );
};

export default TextField;
