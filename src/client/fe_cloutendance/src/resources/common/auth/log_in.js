import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputCommon } from "../inputs/input";
import axios from "axios";
import { useNavigate } from "react-router";

const LoginCommon = () => {
  const [timeState, setTimeState] = useState();
  const [dateState, setDateState] = useState();
  const [post, setPost] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

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

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Enter a valid Email").required("Required"),
      password: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(values);

      setPost(true);

      await axios
        .post("http://localhost:8080/login", values)
        .then((response) => {
          setPost(false);
          navigate("/user");
          setPost(response.data);
          console.log(response);
        })
        .catch((error) => {
          setError(error);
        });
    },
  });

  if (error) return <div>{error.message}</div>;
  if (post) return "Loading";

  return (
    <div className="body-container">
      <div className="date-time">
        <div className="date">
          <h2> {dateState} </h2>
        </div>

        <div className="time">
          <h2> {timeState} </h2>
        </div>
      </div>

      <div className="login-form">
        <div className="form-title">
          <h2>CLOUTENDANCE </h2>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="email-field">
            <label>Email:</label> <br />
            <InputCommon
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />{" "}
            {formik.touched.email && formik.errors.email ? (
              <p>{formik.errors.email}</p>
            ) : null}
          </div>

          <div className="pass-field">
            <label>Password:</label> <br />
            <InputCommon
              name="password"
              type="password"
              label="Password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <p>{formik.errors.password}</p>
            ) : null}
          </div>

          <div className="login-button">
            <button type="submit" id="log">
              Log in
            </button>
          </div>

          <div className="forgot-pass">
            <span> Forgot your password? </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginCommon;
