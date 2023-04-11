import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./components/Edit";
import Details from "./components/Details";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9002/getAll")
      .then((res) => setUserList(res.data));
  }, []);

  const deleteUserList = (id) => {
    axios
      .post("http://localhost:9002/delete", { id })
      .then((res) => setUserList(res.data));
  };

  return (
    <>
      {console.log("userList:", userList)}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                userList={userList}
                deleteUserList={deleteUserList}
                setUserList={setUserList}
              />
            }
          />
          <Route
            path="/register"
            element={<Register userList={userList} setUserList={setUserList} />}
          />
          <Route path="/edit" element={<Edit />} />
          <Route
            path="/details"
            element={
              <Details deleteUserList={deleteUserList} userList={userList} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
