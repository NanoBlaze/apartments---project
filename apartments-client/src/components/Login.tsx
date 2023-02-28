import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { errorMsg, successMsg } from "../services/feedbacksService";
import { checkUser } from "../services/usersService";
import Navbar from "./Navbar";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),
    onSubmit: (values) => {
      checkUser(values)
        .then((result) => {
          sessionStorage.setItem("token", result.data.token);
          successMsg("You Logged in Successfully!");
          navigate("/home");
        })
        .catch((error) => {
          console.log(error);
          errorMsg("Somthing went Wrong!");
        });
    },
  });
  return (
    <div className="row p-5 ">
      <div className="R-apps rounded pt-5 col col-md-12 col-lg-10 mx-auto pb-1">
        <div className="shadow bg-light py-5 mb-5 rounded mx-auto col col-md-10 col-lg-5 ">
          <h1 className="text-center">Login</h1>
          <div className="content mx-auto col-10 col-md-10 col-lg-10 ">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="inputEmailLogin" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmailLogin"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <p className="text-danger">{formik.errors.email}</p>
              ) : null}
              <div className="mb-3">
                <label htmlFor="inputPasswordLogin" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPasswordLogin"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <p className="text-danger">{formik.errors.password}</p>
              ) : null}
              <div>
                <button type="submit" className="btn btn-success w-100">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <p className="text-center mt-3">
            Not a member? Click
            <i className="fa-solid fa-circle-chevron-right icon-size"></i>
            <Link to="/register"> Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
