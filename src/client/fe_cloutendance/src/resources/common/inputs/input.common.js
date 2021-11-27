import React from "react";

export const InputCommon = (props) => {
  return (
    <React.Fragment>
      <input
        className="input-common"
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
    </React.Fragment>
  );
};

export const TextAreaInputCommon = (props) => {
  return (
    <React.Fragment>
      <textarea />
    </React.Fragment>
  );
};

export const SelectInputCommon = (props) => {
  return (
    <React.Fragment>
      <select name={props.name} onChange={props.onChange}>
        <option>{props.default}</option>
        {props.selection &&
          props.selection.map((item) => {
            return <option key={item.code}>{item.name}</option>;
          })}
      </select>
    </React.Fragment>
  );
};
