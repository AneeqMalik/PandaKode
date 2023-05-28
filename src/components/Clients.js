import React from "react";

import pic1 from "../assets/1.png";
import pic2 from "../assets/2.png";
import pic3 from "../assets/3.png";
import pic4 from "../assets/4.png";
import pic5 from "../assets/5.png";
import pic6 from "../assets/6.png";
import pic7 from "../assets/7.png";

function Clients() {
  return (
    <div className="client-slider">
      <h2 className="main-title text-center">Our Clients</h2>
      <div
        className="row"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <div class="card" style={{ width: "100px", height: "100px" }}>
          <div class="card-img-top text-center px-5 mt-3">
            <img src={pic1} class="img-fluid"  alt="pic"/>
          </div>
        </div>
        <div class="card" style={{ width: "100px", height: "100px" }}>
          <div class="card-img-top text-center px-5 mt-3">
            <img src={pic2} class="img-fluid" alt="pic" />
          </div>
        </div>
        <div class="card" style={{ width: "100px", height: "100px" }}>
          <div class="card-img-top text-center px-5 mt-3">
            <img src={pic3} class="img-fluid" alt="pic"/>
          </div>
        </div>
        <div class="card" style={{ width: "100px", height: "100px" }}>
          <div class="card-img-top text-center px-5 mt-3">
            <img src={pic4} class="img-fluid" alt="pic"/>
          </div>
        </div>
        <div class="card" style={{ width: "100px", height: "100px" }}>
          <div class="card-img-top text-center px-5 mt-3">
            <img src={pic5} class="img-fluid" alt="pic"/>
          </div>
        </div>
        <div class="card" style={{ width: "100px", height: "100px" }}>
          <div class="card-img-top text-center px-5 mt-3">
            <img src={pic6} class="img-fluid" alt="pic" />
          </div>
        </div>
        <div class="card" style={{ width: "100px", height: "100px" }}>
          <div class="card-img-top text-center px-5 mt-3">
            <img src={pic7} class="img-fluid" alt="pic"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
