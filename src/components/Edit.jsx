import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Edit() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    desc: "",
  });

  // const setdata = (e) => {
  //   const { name, value } = e.target;
  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  // };

  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [age, setAge] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [work, setWork] = useState(null);
  const [add, setAdd] = useState(null);
  const [desc, setDesc] = useState(null);
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setAge(localStorage.getItem("age"));
    setMobile(localStorage.getItem("mobile"));
    setWork(localStorage.getItem("work"));
    setAdd(localStorage.getItem("add"));
    setDesc(localStorage.getItem("desc"));
  }, []);

  const udate = (e) => {
    axios.put(`http://localhost:9002/update ${id}`, {
      name,
      email,
      age,
      work,
      add,
      desc,
      mobile,
    });
    e.preventDefault();
  };

  return (
    <>
      {console.log("user", user)}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h1>Form Edit</h1>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
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
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
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
                  value={work}
                  onChange={(e) => setWork(e.target.value)}
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
                  value={add}
                  onChange={(e) => setAdd(e.target.value)}
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
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
                <button
                  type="submit"
                  onClick={udate}
                  className="btn mt-3 w-100 btn-primary"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
