import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { User } from "../interfaces/User";
import { errorMsg, successMsg } from "../services/feedbacksService";
import { addUser } from "../services/usersService";

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: yup.object({
      name: yup.string().required().min(2),
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),
    onSubmit: (values) => {
      let user: User = { ...values, isPoster: true };
      addUser(user)
        .then((result) => {
          sessionStorage.setItem("token", result.data.token);
          successMsg("You Registerd Successfully!");
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
          <h1 className="text-center">Register</h1>
          <div className="content mx-auto col-10 col-md-10 col-lg-10 ">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="inputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.name && formik.errors.name ? (
                <p className="text-danger">{formik.errors.name}</p>
              ) : null}
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
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
                <label htmlFor="inputPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
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
            Already Having Account
            <i className="fa-solid fa-circle-chevron-right icon-size"></i>
            <Link to="/"> Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
