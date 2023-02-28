import { FunctionComponent, useEffect, useState } from "react";
import { Product } from "../interfaces/Product";
import { deleteCart, getUserCart, updateCart } from "../services/cartsService";
import { errorMsg, successMsg } from "../services/feedbacksService";
import Footer from "./Footer";
import Navbar from "./Navbar";
interface CartProps {}

const Cart: FunctionComponent<CartProps> = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isChanged, setIsChanged] = useState<boolean>(false);

  useEffect(() => {
    getUserCart()
      .then((result) => {
        setCart(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (isChanged) {
      getUserCart()
        .then((result) => {
          setCart(result.data);
        })
        .catch((err) => console.log(err));
      setIsChanged(false);
    }
  }, [isChanged]);
  const handleDelete = (product: Product) => {
    if (window.confirm(`Are you sure you want to delete ${product.name}`))
      deleteCart(product._id as string)
        .then(() => {
          setCart((prevCart) => prevCart.filter((p) => p._id !== product._id));
          successMsg("Product deleted successfully");
        })
        .catch((err) => errorMsg(err));
  };

  const handleQuantityChange = (product: Product, quantity: number) => {
    if (!Number.isInteger(quantity) || quantity < 1) {
      errorMsg("Quantity must be a positive integer");
      return;
    }

    if (product.quantity !== undefined) {
      updateCart(product._id as string, { quantity })
        .then((result) => {
          const updatedProduct = result.data;
          setCart((prevCart) =>
            prevCart.map((p) =>
              p._id === updatedProduct._id ? updatedProduct : p
            )
          );
          setIsChanged(true);
          successMsg("Quantity updated successfully");
        })
        .catch((err) => errorMsg(err));
    }
  };
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="main2 ">
          <h1 className="text-home-banner py-5">Cart</h1>
          <div className="conatiner-fluid d-flex flex-wrap justify-content-center p-5 text-start">
            {cart.length ? (
              cart.map((product: Product) => (
                <div
                  key={product._id}
                  className="card mx-3 my-3 col-12 rounded "
                  style={{ width: "18rem" }}
                >
                  <img
                    src={product.image}
                    alt="product Image Service"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <b>Name:</b> {product.name}
                    </p>
                    <p className="card-text">
                      <b>Description:</b> {product.description}
                    </p>
                    <p className="card-text">
                      <b>Description:</b> {product.category}
                    </p>
                    <p className="card-text">
                      <b>Quantity:</b>{" "}
                      <input
                        type="number"
                        value={product.quantity ?? 0}
                        min={1}
                        max={10}
                        step={1}
                        onChange={(e) =>
                          handleQuantityChange(
                            product,
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </p>
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn btn-danger w-100"
                      onClick={() => handleDelete(product)}
                    >
                      <i className="fa-solid fa-trash"></i> Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-home">
                Your cart is empty.<br></br>
                <span className="red"> Please add card to view it.</span>
              </p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
