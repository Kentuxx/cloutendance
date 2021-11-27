import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useGlobalContext } from "../../../providers/global_provider/global.context";
import { GLOBAL_ACTION_TYPE } from "../../../providers/global_provider/global.reducer";

export const LoadingCommon = () => {
  return (
    <React.Fragment>
      <div className="loading-common-response">
        <div>
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export const ErrorCommon = () => {
  let { globalDispatch } = useGlobalContext();

  return (
    <React.Fragment>
      <div className="error-response">
        <span
          className="close-response-button"
          onClick={() =>
            globalDispatch({
              type: GLOBAL_ACTION_TYPE.setError,
              payload: { isError: false },
            })
          }
        >
          <IoCloseSharp />
        </span>
        <div className="header-response">
          <strong>ACTION FAILED</strong>
        </div>
        <div className="body-response">Oops something went wrong</div>
      </div>
    </React.Fragment>
  );
};

export const SuccessCommon = () => {
  let { globalDispatch } = useGlobalContext();
  return (
    <React.Fragment>
      <div className="success-response">
        <span
          className="close-response-button"
          onClick={() =>
            globalDispatch({
              type: GLOBAL_ACTION_TYPE.setSuccess,
              payload: { isSuccess: false },
            })
          }
        >
          <IoCloseSharp />
        </span>
        <div className="header-response">
          <strong>ACTION SUCCEDED</strong>
        </div>
        <div className="body-response">Success entry point</div>
      </div>
    </React.Fragment>
  );
};
