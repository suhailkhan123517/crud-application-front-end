import axios from "axios";
import React, { useState } from "react";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    desc: "",
  });

  const setdata = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const regester = (e) => {
    e.preventDefault();
    const { name, email, age, mobile, work, add, desc } = user;
    if (name && email && age && mobile && work && add && desc) {
      axios
        .post("http://localhost:9002/register", user)
        .then((res) => console.log(res));
      alert("posted");
    } else {
      alert("invalid input");
    }
  };

  return (
    <>
      {console.log("user", user)}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h1>Form Register</h1>
            </div>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="name"
                  value={user.name}
                  onChange={setdata}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="email"
                  value={user.email}
                  onChange={setdata}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Age
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="age"
                  value={user.age}
                  onChange={setdata}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Mobile
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="mobile"
                  value={user.mobile}
                  onChange={setdata}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Work
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="work"
                  value={user.work}
                  onChange={setdata}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="add"
                  value={user.add}
                  onChange={setdata}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="desc"
                  value={user.desc}
                  onChange={setdata}
                ></textarea>
                <button
                  onClick={regester}
                  type="submit"
                  className="btn mt-3 w-100 btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
