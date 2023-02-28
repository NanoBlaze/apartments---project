import { FunctionComponent } from "react";
import * as yup from "yup";
import { errorMsg, successMsg } from "../services/feedbacksService";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { addProduct } from "../services/productsService";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface AddProductProps {}

const AddProduct: FunctionComponent<AddProductProps> = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
      category: "",
      description: "",
      image: "",
    },
    validationSchema: yup.object({
      name: yup.string().required().min(2),
      price: yup.number().required().min(0),
      category: yup.string().required().min(2),
      description: yup.string().required().min(2),
      image: yup.string().required().min(2),
    }),

    onSubmit: (values) => {
      addProduct(values)
        .then((result) => {
          successMsg("Porduct added");
          navigate("/products");
          console.log(result.data);
        })
        .catch((err) => {
          console.log(err);
          errorMsg("Somthing went Wrong!");
        });
    },
  });
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="main2 ">
          <h1 className="text-home-banner py-5">Add Product</h1>
          <div className="content">
            <form className="mx-auto w-25" onSubmit={formik.handleSubmit}>
              <div className="form-group mt-4 ">
                <input
                  className="form-control"
                  id="inputName"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="text-danger">{formik.errors.name}</p>
                ) : null}
              </div>
              <div className="form-group mt-4">
                <input
                  className="form-control"
                  id="inputPrice"
                  type="number"
                  placeholder="price"
                  name="price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.price && formik.errors.price ? (
                  <p className="text-danger">{formik.errors.price}</p>
                ) : null}
              </div>
              <div className="form-group mt-4">
                <input
                  className="form-control"
                  id="inputCategory"
                  type="text"
                  placeholder="category"
                  name="category"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.category && formik.errors.category ? (
                  <p className="text-danger ">{formik.errors.category}</p>
                ) : null}
              </div>
              <div className="form-group mt-4">
                <input
                  className="form-control"
                  id="description"
                  type="text"
                  placeholder="description"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.description && formik.errors.description ? (
                  <p className="text-danger ">{formik.errors.description}</p>
                ) : null}
              </div>
              <div className="form-group mt-4">
                <input
                  className="form-control"
                  id="image"
                  type="text"
                  placeholder="image"
                  name="image"
                  value={formik.values.image}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.image && formik.errors.image ? (
                  <p className="text-danger ">{formik.errors.image}</p>
                ) : null}
              </div>

              <div className="form-group my-4">
                <button
                  disabled={!(formik.isValid && formik.dirty)}
                  className="btn btn-success w-100"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddProduct;
