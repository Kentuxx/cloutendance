import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputCommon } from "../inputs/input.common";
import axios from "axios";
import { useNavigate } from "react-router";
import { ButtonCommon } from "../buttons/button.common";
import { useGlobalContext } from "../../../providers/global_provider/global.context";
import { GLOBAL_ACTION_TYPE } from "../../../providers/global_provider/global.reducer";
import useResponseHelper from "../../../helpers/custom_hooks/use_response.helper";

const LoginCommon = () => {
  // =========================================
  // CUSTOM HOOKSE
  // =========================================
  let { renderFail, renderSucceed } = useResponseHelper();
  // =========================================
  // GLOBAL STATES
  // =========================================
  const { globalDispatch } = useGlobalContext();
  // =========================================
  // USESTATES
  // =========================================
  const [timeState, setTimeState] = useState();
  const [dateState, setDateState] = useState();

  // =========================================
  // ROUTE HANDLERS
  // =========================================
  const navigate = useNavigate();

  // =========================================
  // FORMIK FORM HANDLER
  // =========================================
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("This field is required")
        .email("Enter a valid Email"),
      password: Yup.string()
        .required("This field is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
          "Password should be contain a number, special character and a capital letter"
        )
        .min(10, "Password must be minimum of 10"),
    }),
    onSubmit: async (values) => {
      globalDispatch({
        type: GLOBAL_ACTION_TYPE.setLoading,
        payload: { isBusy: true },
      });
      await axios
        .post("http://localhost:8080/login", values, { withCredentials: true })
        .then(() => {
          renderSucceed();
          navigate("/timein");
        })
        .catch(() => {
          renderFail();
        });
      globalDispatch({
        type: GLOBAL_ACTION_TYPE.setLoading,
        payload: { isBusy: false },
      });
    },
  });

  // =========================================
  // INITIALIZATION
  // =========================================
  useEffect(() => {
    setInterval(() => {
      setTimeState(
        new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        })
      );
      setDateState(
        new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      );
    }, 1000);
  }, []);

  return (
    <div className="login-container">
      {/* DATE AND TIME DISPLAY STARTS HERE */}
      <div className="date-time-container">
        <div className="date">
          <p> {dateState} </p>
        </div>

        <div className="time">
          <p> {timeState} </p>
        </div>
      </div>

      {/* FORM DISPLAY STARTS HERE */}
      <div className="login-form">
        <br />
        <br />
        <div className="form-title">
          <h2>CLOUTENDANCE </h2>
        </div>
        <br />
        <br />
        <form onSubmit={formik.handleSubmit}>
          <div className="email-field">
            <label>Email</label>
            <InputCommon
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="input-validation-style">{formik.errors.email}</p>
            ) : null}
          </div>
          <br />
          <div className="pass-field">
            <label>Password</label> <br />
            <InputCommon
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="input-validation-style">{formik.errors.password}</p>
            ) : null}
          </div>
          <br />
          <br />
          <ButtonCommon buttonTitle="Login" />
          <br />
          <br />
          <br />
          <span className="forgot-password"> Forgot your password? </span>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default LoginCommon;
