import React from "react";

export default function Details({ userList, deleteUserList }) {
  return (
    <>
      {userList.map((item) => (
        <div key={item._id} className="container my-5">
          <h1>WelCome to {item.name}</h1>
          <div className="row">
            <div className="col-12 card p-3">
              <div className="row">
                <div className="col-md-6">
                  <div className="img-card">
                    <img src="images/149071.png" alt="" />
                  </div>
                  <div className="card-details">
                    <h3 className="mt-3">
                      Name: <span>{item.name}</span>
                    </h3>
                    <h5 className="mt-3">
                      Age: <span>{item.age}</span>
                    </h5>
                    <h5 className="mt-3">
                      <i className="fa-solid fa-envelope"></i> Email:{" "}
                      <span>{item.email}</span>
                    </h5>
                    <h5 className="mt-3">
                      <i className="fa-sharp fa-solid fa-briefcase"></i>{" "}
                      Occuption: <span>{item.work}</span>
                    </h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-details">
                    <div className="card-button mt-2">
                      <button className="btn btn-primary">
                        <i className="fa-solid fa-pen"></i>
                      </button>
                      <button
                        onClick={() => deleteUserList(item._id)}
                        className="btn mx-3 btn-danger"
                      >
                        <i className="fa-sharp fa-solid fa-trash"></i>
                      </button>
                    </div>
                    <h5 className="mt-3">
                      <i className="fa-solid fa-mobile"></i> Mobile:{" "}
                      <span>{item.mobile}</span>
                    </h5>
                    <h5 className="mt-3">
                      <i className="fa-solid fa-location-dot"></i> location:{" "}
                      <span>{item.add}</span>
                    </h5>
                    <h5 className="mt-3">
                      Description: <span>{item.desc}</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
