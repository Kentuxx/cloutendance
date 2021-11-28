import { useRef } from "react";
import { useGlobalContext } from "../../providers/global_provider/global.context";
import { GLOBAL_ACTION_TYPE } from "../../providers/global_provider/global.reducer";

const useResponseHelper = () => {
  let { globalDispatch } = useGlobalContext();
  const timeoutFail = useRef(null);
  const timeoutSuccess = useRef(null);

  const renderFail = () => {
    renderTimeoutCancel();
    globalDispatch({
      type: GLOBAL_ACTION_TYPE.setError,
      payload: { isError: true },
    });
    timeoutFail.current = setTimeout(() => {
      globalDispatch({
        type: GLOBAL_ACTION_TYPE.setError,
        payload: { isError: false },
      });
    }, 5000);
  };

  const renderSucceed = () => {
    renderTimeoutCancel();
    globalDispatch({
      type: GLOBAL_ACTION_TYPE.setSuccess,
      payload: { isSuccess: true },
    });
    timeoutSuccess.current = setTimeout(() => {
      globalDispatch({
        type: GLOBAL_ACTION_TYPE.setSuccess,
        payload: { isSuccess: false },
      });
    }, 5000);
  };

  const renderTimeoutCancel = () => {
    clearTimeout(timeoutFail.current);
    clearTimeout(timeoutSuccess.current);

    globalDispatch({
      type: GLOBAL_ACTION_TYPE.setSuccess,
      payload: { isSuccess: false },
    });
    globalDispatch({
      type: GLOBAL_ACTION_TYPE.setError,
      payload: { isError: false },
    });
  };

  return { renderFail, renderSucceed };
};

export default useResponseHelper;
