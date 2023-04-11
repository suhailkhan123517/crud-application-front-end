import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Home({ userList, deleteUserList, setUserList }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-5">
        <div className="container">
          <div className="add_btn mt-2">
            <NavLink to="/register" className="btn btn-primary mb-2">
              Add Data
            </NavLink>
          </div>
          <table className="table">
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
              {userList.map((item) => (
                <tr key={item._id}>
                  <th scope="row">{item._id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.work}</td>
                  <td>{item.mobile}</td>
                  <td className="d-flex justify-content-between">
                    <button
                      onClick={() => navigate("/details")}
                      className="btn btn-success"
                    >
                      <i className="fa-solid fa-eye"></i>
                    </button>
                    <button className="btn btn-primary">
                      <i className="fa-solid fa-pen"></i>
                    </button>
                    <button
                      onClick={() => deleteUserList(item._id)}
                      className="btn btn-danger"
                    >
                      <i className="fa-sharp fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
