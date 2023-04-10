import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="mt-5">
        <div className="container">
          <div className="add_btn mt-2">
            <NavLink to="/register" className="btn btn-primary mb-2">
              Add Data
            </NavLink>
          </div>
          <table class="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">id</th>
                <th scope="col">Username</th>
                <th scope="col">email</th>
                <th scope="col">job</th>
                <th scope="col">Number</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>meet</td>
                <td>meet@email.com</td>
                <td>webdeveloper</td>
                <td>1234567890</td>
                <td className="d-flex justify-content-between">
                  <button className="btn btn-success">
                    <i class="fa-solid fa-eye"></i>
                  </button>
                  <button className="btn btn-primary">
                    <i class="fa-solid fa-pen"></i>
                  </button>
                  <button className="btn btn-danger">
                    <i class="fa-sharp fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
