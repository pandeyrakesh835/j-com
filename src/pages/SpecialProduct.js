import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <>
      <div className="col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between  ">
            <div>
              <img src="images/watch.jpg" className="img-fluid" alt="watch" />
            </div>
            <div className="specil-product-content position-relative ">
              <h5 className="brand">Havels</h5>
              <h6>Samsung Galaxy Note10+ Mobile Phone; Sim...</h6>
              <ReactStars
                count={5}
                size={24}
                value={3}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">$100</span>&nbsp; <del>$200</del>
              </p>
              <div className="discount-till d-flex align-items-center gap-10  ">
                <p className="mb-0">
                 
                  <b>5 </b>days
                </p>
                <div className="d-flex gap-10 align-items-center ">
                  <span className="badge rounded-circle bg-danger">1</span>
                  :
                  <span className="badge rounded-circle bg-danger">1</span>
                  :
                  <span className="badge rounded-circle bg-danger">1</span>
                </div>
              </div>
              <div className="product-count my-2">
                <p>Product: 5</p>
                <div className="progress" style={{height: "10px"}}>
                <div className="progress-bar" role="progressbar" style={{width: "20%"}} aria-valuenow="15"  aria-valuemax="100"></div>
              </div>
              </div>
              <Link className="button">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;
