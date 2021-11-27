export const INIT_GLOBAL_STATE = {
  loading: false,
  error: false,
  success: false,
};

export const GLOBAL_ACTION_TYPE = {
  setLoading: "loading",
  setError: "error",
  setSuccess: "success",
};

export const globalReducer = (state, action) => {
  switch (action.type) {
    case GLOBAL_ACTION_TYPE.setLoading:
      return setLoadingState(state, action.payload);
    case GLOBAL_ACTION_TYPE.setError:
      return setErrorState(state, action.payload);
    case GLOBAL_ACTION_TYPE.setSuccess:
      return setSuccessState(state, action.payload);

    default:
      return state;
  }
};

//Logic
const setLoadingState = (state, payload) => {
  let { isBusy } = payload;
  return { ...state, loading: isBusy };
};

const setErrorState = (state, payload) => {
  let { isError } = payload;
  return { ...state, error: isError };
};

const setSuccessState = (state, payload) => {
  let { isSuccess } = payload;
  return { ...state, success: isSuccess };
};
