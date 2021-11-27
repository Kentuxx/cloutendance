import { useGlobalContext } from "../../providers/global_provider/global.context";
import { GLOBAL_ACTION_TYPE } from "../../providers/global_provider/global.reducer";

const useResponseHelper = () => {
  let { globalDispatch } = useGlobalContext();
  const renderFail = () => {
    globalDispatch({
      type: GLOBAL_ACTION_TYPE.setError,
      payload: { isError: true },
    });
    setTimeout(() => {
      globalDispatch({
        type: GLOBAL_ACTION_TYPE.setError,
        payload: { isError: false },
      });
    }, 5000);
  };

  const renderSucceed = () => {
    globalDispatch({
      type: GLOBAL_ACTION_TYPE.setSuccess,
      payload: { isSuccess: true },
    });
    setTimeout(() => {
      globalDispatch({
        type: GLOBAL_ACTION_TYPE.setSuccess,
        payload: { isSuccess: false },
      });
    }, 5000);
  };
  return { renderFail, renderSucceed };
};

export default useResponseHelper;
