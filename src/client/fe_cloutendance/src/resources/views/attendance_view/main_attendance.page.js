import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react/cjs/react.development";
import useResponseHelper from "../../../helpers/custom_hooks/use_response.helper";
import { useGlobalContext } from "../../../providers/global_provider/global.context";
import { GLOBAL_ACTION_TYPE } from "../../../providers/global_provider/global.reducer";

const MainAttendancePage = () => {
  let { globalDispatch } = useGlobalContext();
  let navigate = useNavigate();
  let { renderFail } = useResponseHelper();

  const [userState, setUserState] = useState();

  const getVerse = async () => {
    globalDispatch({
      type: GLOBAL_ACTION_TYPE.setLoading,
      payload: { isBusy: true },
    });
    await axios
      .get("http://localhost:8080/user", { withCredentials: true })
      .then((response) => {
        setUserState(response.data);
      })
      .catch(() => {
        renderFail();
        navigate("/attendance");
      });
    globalDispatch({
      type: GLOBAL_ACTION_TYPE.setLoading,
      payload: { isBusy: false },
    });
  };

  useEffect(() => {
    getVerse();
  }, []);

  return (
    <React.Fragment>
      <p>
        Email : <strong>{userState && userState.email}</strong>
      </p>
      <p>
        Role : <strong>{userState && userState.role}</strong>
      </p>
    </React.Fragment>
  );
};

export default MainAttendancePage;
