import { FunctionComponent, useEffect, useState } from "react";
import { Product } from "../interfaces/Product";
import { deleteProduct, getAllProducts } from "../services/productsService";
import Navbar from "./Navbar";
import { getIsPoster } from "../services/usersService";
import { Link } from "react-router-dom";
import { errorMsg, successMsg } from "../services/feedbacksService";
import { addToUserCart } from "../services/cartsService";
import Footer from "./Footer";

interface ProductsProps {}

const Products: FunctionComponent<ProductsProps> = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isChanged, setIsChanged] = useState<boolean>(false);

  useEffect(() => {
    getAllProducts()
      .then((result) => setProducts(result.data))
      .catch((error) => console.log(error));
  }, [isChanged]);

  const handleDelete = (product: Product) => {
    if (window.confirm(`Are you sure you want to delete ${product.name}`))
      deleteProduct(product._id as string)
        .then(() => {
          setIsChanged(!isChanged);
          successMsg("Product deleted succssfully");
        })
        .catch((err) => errorMsg(err));
  };

  const handleAddToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProductIndex = cart.findIndex(
      (p: Product) => p._id === product._id
    );
    addToUserCart(product);
    if (existingProductIndex >= 0) {
      cart[existingProductIndex].quantity += 1;
    } else {
      product.quantity = 1;
      cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    successMsg("Product was added to cart");
  };

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="main2 text-center pb-5">
          <h1 className="text-home-banner py-5">Apartments</h1>
          <Link className="btn btn-success" to="add">
            <i className="fa-solid fa-plus"></i> Add Product
          </Link>
          <div className="container pt-5">
            <div className="row">
              {products.length ? (
                products.map((product: Product) => (
                  <div className="col-12 col-md-6 col-lg-3" key={product._id}>
                    <div className="card text-start">
                      <div className=" col-12 ">
                        <img
                          src={product.image}
                          alt="Apartment Image Service"
                          className="card-img-top"
                        />
                        <div className="card-body">
                          <p className="card-text">
                            <b>Name: </b>
                            {product.name}
                          </p>
                          <p className="card-text">
                            <b>Description: </b>
                            {product.description}
                          </p>
                          <p className="card-text">
                            <b>Category: </b>
                            {product.category}
                          </p>
                          <p className="card-text">
                            <b>Price: </b> {product.price} $
                          </p>
                        </div>
                        <div className="card-footer text-center">
                          {getIsPoster() ? (
                            <>
                              <div className="row pb-2">
                                <div className="col pe-1">
                                  <Link
                                    to={`edit/${product._id}`}
                                    className="btn btn-primary w-100 sf-1"
                                  >
                                    <i className="fa-solid fa-pen-to-square"></i>{" "}
                                    Edit
                                  </Link>
                                </div>
                                <div className="col ps-1">
                                  <a
                                    onClick={() => handleDelete(product)}
                                    className="btn btn-danger w-100 sf-1"
                                  >
                                    <i className="fa-solid fa-trash"></i> Remove
                                  </a>
                                </div>
                              </div>
                            </>
                          ) : null}

                          <button
                            onClick={() => handleAddToCart(product)}
                            className="btn btn-success w-100 sf-1"
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-home">
                  No products in store... Please add some products, and boost up
                  your sells!<br></br>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
