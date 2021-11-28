import { useGlobalContext } from "../../providers/global_provider/global.context";
import { GLOBAL_ACTION_TYPE } from "../../providers/global_provider/global.reducer";

const useResponseHelper = () => {
  let { globalDispatch } = useGlobalContext();
  let timeoutFail = 0,
    timeoutSuccess = 0;

  const renderFail = () => {
    renderCancel();
    globalDispatch({
      type: GLOBAL_ACTION_TYPE.setError,
      payload: { isError: true },
    });
    timeoutFail = setTimeout(() => {
      globalDispatch({
        type: GLOBAL_ACTION_TYPE.setError,
        payload: { isError: false },
      });
    }, 5000);
  };

  const renderSucceed = () => {
    renderCancel();
    globalDispatch({
      type: GLOBAL_ACTION_TYPE.setSuccess,
      payload: { isSuccess: true },
    });
    timeoutSuccess = setTimeout(() => {
      globalDispatch({
        type: GLOBAL_ACTION_TYPE.setSuccess,
        payload: { isSuccess: false },
      });
    }, 5000);
  };

  const renderCancel = () => {
    clearTimeout(timeoutFail);
    clearTimeout(timeoutSuccess);
    timeoutFail = 0;
    timeoutSuccess = 0;

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
