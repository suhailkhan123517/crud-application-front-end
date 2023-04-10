import React from "react";

export default function Details() {
  return (
    <>
      <div className="container">
        <h1>WelCome to Suhail</h1>
        <div className="row">
          <div className="col-12 card p-3">
            <div className="row">
              <div className="col-md-6">
                <div className="img-card">
                  <img src="images/149071.png" alt="" />
                </div>
                <div className="card-details">
                  <h3 className="mt-3">
                    Name: <span>Suahil</span>
                  </h3>
                  <h5 className="mt-3">
                    Age: <span>Suahil</span>
                  </h5>
                  <h5 className="mt-3">
                    <i class="fa-solid fa-envelope"></i> Email:{" "}
                    <span>Example@gmail.com</span>
                  </h5>
                  <h5 className="mt-3">
                    <i class="fa-sharp fa-solid fa-briefcase"></i> Occuption:{" "}
                    <span>MERN Stack Developer</span>
                  </h5>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-details">
                  <div className="card-button mt-2">
                    <button className="btn btn-primary">
                      <i class="fa-solid fa-pen"></i>
                    </button>
                    <button className="btn mx-3 btn-danger">
                      <i class="fa-sharp fa-solid fa-trash"></i>
                    </button>
                  </div>
                  <h5 className="mt-3">
                    <i class="fa-solid fa-mobile"></i> Mobile:{" "}
                    <span>9876543210</span>
                  </h5>
                  <h5 className="mt-3">
                    <i class="fa-solid fa-location-dot"></i> location:{" "}
                    <span>Amar Nagar Navpada Kurla ( West) Mumbai 400070</span>
                  </h5>
                  <h5 className="mt-3">
                    Description:{" "}
                    <span>
                      Hey This is Mohammad Suhail from Mumbai Currently I'm
                      doing a MERN stack Project{" "}
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
