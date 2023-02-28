import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import tv from "../uploads/tv.png";
import clean from "../uploads/clean.jpg";
import sofa from "../uploads/furniture.jpg";
import mirror from "../uploads/mirror.jpg";
import Footer from "./Footer";

import Navbar from "./Navbar";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <Navbar />

      <div className="container1">
        <h1 className="title">Apartments</h1>
        <h1 className="title title-large">Apartments</h1>
        <div id="img-1" className="img-container">
          <img
            className="img"
            src="https://images.unsplash.com/photo-1624204386084-dd8c05e32226?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwYnVpbGRpbmd8ZW58MHx8MHx8&w=1000&q=80"
          ></img>
        </div>

        <div className="img-container second-animation">
          <img
            className="img"
            src="https://images.unsplash.com/photo-1551361415-69c87624334f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          ></img>
        </div>

        <div className="img-container third-animation">
          <img
            className="img"
            src="https://images.unsplash.com/photo-1594484208280-efa00f96fc21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          ></img>
        </div>

        <div className="img-container fourth-animation">
          <img
            className="img nba"
            src="https://images.unsplash.com/photo-1619542402915-dcaf30e4e2a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          ></img>
        </div>

        <div className="img-container fifth-animation">
          <img
            className="img"
            src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          ></img>
        </div>

        <div id="img-6" className="img-container sixth-animation">
          <img
            className="img"
            src="https://images.unsplash.com/photo-1559338391-e14b84a22772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
          ></img>
        </div>

        <div id="img-7" className="img-container seventh-animation">
          <img
            className="img"
            src="https://images.unsplash.com/photo-1597047084993-bf337e09ede0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          ></img>
        </div>
      </div>
      <div className="container py-5">
        <h2 className="text-center fs-1">
          Hello, and welcome to apartments.com
        </h2>
        <p className="text-center fs-4">
          We specify in <b>buying-selling</b> everything you need or <b>not </b>{" "}
          need for your apartment!
        </p>
        <p className="text-center fs-5">
          we have added some examples below for you to understand how the
          everything works
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card">
              <img src={tv} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">
                  <b>Name: </b>Micahel.N
                </p>
                <p className="card-text">
                  <b>Description: </b>
                  High tech quipment. A pack of 3 laptops and 5 tv's.
                </p>
                <p className="card-text">
                  <b>Category: </b>Old School
                </p>
                <p className="card-text">
                  <b>Price: </b> 10000 $
                </p>
              </div>
              <div className="card-footer text-center">
                <div className="row pb-2">
                  <div className="col-6 pe-1">
                    <a className="btn btn-primary w-100 sf-1">
                      <i className="fa-solid fa-pen-to-square"></i> Edit
                    </a>
                  </div>
                  <div className="col-6 ps-1">
                    <a className="btn btn-danger w-100 sf-1">
                      <i className="fa-solid fa-trash"></i> Remove
                    </a>
                  </div>
                </div>

                <button className="btn btn-success w-100 sf-1">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card">
              <img src={clean} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">
                  <b>Name: </b>Alex.B
                </p>
                <p className="card-text">
                  <b>Description: </b>
                  Best tools to keep your apartment prepared for any kind of
                  trouble.
                </p>
                <p className="card-text">
                  <b>Category: </b>Clean and Care
                </p>
                <p className="card-text">
                  <b>Price: </b> 90 $
                </p>
              </div>
              <div className="card-footer text-center">
                <div className="row pb-2">
                  <div className="col-6 pe-1">
                    <a className="btn btn-primary w-100 sf-1">
                      <i className="fa-solid fa-pen-to-square"></i> Edit
                    </a>
                  </div>
                  <div className="col-6 ps-1">
                    <a className="btn btn-danger w-100 sf-1">
                      <i className="fa-solid fa-trash"></i> Remove
                    </a>
                  </div>
                </div>

                <button className="btn btn-success w-100 sf-1">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card">
              <img src={sofa} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">
                  <b>Name: </b>Joni.S
                </p>
                <p className="card-text">
                  <b>Description: </b>
                  Sofa. Best thing to fit into your apartment, big, comftrable,
                  eastern style.
                </p>
                <p className="card-text">
                  <b>Category: </b>Modern
                </p>
                <p className="card-text">
                  <b>Price: </b> 60000$
                </p>
              </div>
              <div className="card-footer text-center">
                <div className="row pb-2">
                  <div className="col-6 pe-1">
                    <a className="btn btn-primary w-100 sf-1">
                      <i className="fa-solid fa-pen-to-square"></i> Edit
                    </a>
                  </div>
                  <div className="col-6 ps-1">
                    <a className="btn btn-danger w-100 sf-1">
                      <i className="fa-solid fa-trash"></i> Remove
                    </a>
                  </div>
                </div>

                <button className="btn btn-success w-100 sf-1">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card ">
              <img src={mirror} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">
                  <b>Name: </b>Ivan.B
                </p>
                <p className="card-text">
                  <b>Description: </b>
                  Amazing mirror that decorates your apartment prefectly.
                </p>
                <p className="card-text">
                  <b>Category: </b>Modern
                </p>
                <p className="card-text">
                  <b>Price: </b> 1000$
                </p>
              </div>
              <div className="card-footer text-center">
                <div className="row pb-2">
                  <div className="col-6 pe-1">
                    <a className="btn btn-primary w-100 sf-1">
                      <i className="fa-solid fa-pen-to-square "></i> Edit
                    </a>
                  </div>
                  <div className="col-6 ps-1">
                    <a className="btn btn-danger w-100 sf-1">
                      <i className="fa-solid fa-trash"></i> Remove
                    </a>
                  </div>
                </div>

                <button className="btn btn-success w-100 sf-1">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center mx-auto">
          <Link to={`/products`} className="btn btn-primary my-4 ">
            CLICK HERE TO START POSTING
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
