import React from "react";
import { useGlobalContext } from "../providers/global_provider/global.context";
import {
  ErrorCommon,
  LoadingCommon,
  SuccessCommon,
} from "../resources/common/responses/reponses.common";
import MainRoute from "./router";

const App = () => {
  const { global } = useGlobalContext();

  return (
    <React.Fragment>
      {global.loading && <LoadingCommon />}
      {global.error && <ErrorCommon />}
      {global.success && <SuccessCommon />}
      {global.modal && <LoadingCommon />}
      <MainRoute />
    </React.Fragment>
  );
};

export default App;
