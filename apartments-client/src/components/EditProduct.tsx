import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editProduct, getProduct } from "../services/productsService";
import * as yup from "yup";
import { useFormik } from "formik";
import { errorMsg, successMsg } from "../services/feedbacksService";
import Navbar from "./Navbar";
import { Product } from "../interfaces/Product";
import Footer from "./Footer";

interface EditProductProps {}

const EditProduct: FunctionComponent<EditProductProps> = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    category: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    getProduct(id as string)
      .then((result) => setProduct(result.data))
      .catch((error) => console.log(error));
  }, []);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: product.name,
      price: product.price,
      category: product.category,
      description: product.description,
      image: product.image,
    },
    enableReinitialize: true,
    validationSchema: yup.object({
      name: yup.string().required().min(2),
      price: yup.number().required().min(0),
      category: yup.string().required().min(2),
      description: yup.string().required().min(2),
      image: yup.string().required().min(2),
    }),
    onSubmit: (values) => {
      let product: Product = { ...values, _id: id as string };
      editProduct(product)
        .then((result) => {
          console.log(result.data);
          successMsg("Product was added successfully!");
          navigate("/products");
        })
        .catch((error) => {
          console.log(error);
          errorMsg("Oops...something went wrong..");
        });
    },
  });
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="main2 ">
          <h1 className="text-home-banner py-5">Edit Cards</h1>
        </div>
      </div>

      <div className="content">
        <form className="mx-auto w-25" onSubmit={formik.handleSubmit}>
          <div className="form-group mt-4 ">
            <input
              className="form-control"
              id="name"
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
              id="price"
              type="number"
              placeholder="Price"
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
              id="category"
              type="text"
              placeholder="Category"
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
              placeholder="Description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description ? (
              <p className="text-danger ">{formik.errors.category}</p>
            ) : null}
            <div className="form-group mt-4">
              <input
                className="form-control"
                id="image"
                type="text"
                placeholder="Image"
                name="image"
                value={formik.values.image}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.image && formik.errors.image ? (
                <p className="text-danger ">{formik.errors.image}</p>
              ) : null}
            </div>
          </div>
          <div className="form-group mt-4">
            <button
              disabled={!(formik.isValid && formik.dirty)}
              className="btn btn-success w-100"
              type="submit"
            >
              Done
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default EditProduct;
