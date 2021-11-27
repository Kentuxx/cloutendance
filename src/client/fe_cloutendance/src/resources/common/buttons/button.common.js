import React from "react";

export const ButtonCommon = (props) => {
  return (
    <React.Fragment>
      <button type={props.type ?? "submit"} className="button-common-style">
        {props.buttonTitle}
      </button>
    </React.Fragment>
  );
};
