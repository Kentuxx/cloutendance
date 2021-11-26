import axios from "axios";
import React from "react";
import { useState, useEffect } from "react/cjs/react.development";

const User = () => {
  const [state, setState] = useState();
  const [isBusy, setIsBusy] = useState();

  const getVerse = async () => {
    setIsBusy(true);
    await axios.get("https://beta.ourmanna.com/api/v1/").then((response) => {
      setState(response.data);
      console.log(response.data);
    });
    setIsBusy(false);
  };

  useEffect(() => {
    getVerse();
  }, []);

  if (isBusy === true) return <div>Loading</div>;

  return (
    <div>
      <h2>{state} </h2>
      <h2>Kenth </h2>
    </div>
  );
};

export default User;
