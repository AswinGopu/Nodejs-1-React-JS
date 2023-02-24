import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FaUserAlt, FaHandHoldingMedical } from "react-icons/fa";
import { GiHumanTarget } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
function Admin() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  let usertype;

  const onlogout = () => {
    let param = {
      email: email,
      password: password,
      usertype: 2,
    };
    console.log(param);
    fetch("http://localhost/covid/public/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(param),
    }).then((data) => {
      data.json().then((res) => {
        // localStorage.setItem("userdata", res[0]);
        localStorage.getItem("userdata");
        localStorage.clear();
        navigate("/");
      });
    });
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Admin
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}
            </ul>
            <span class="navbar-text">
              <button
                class="btn btn-success"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                onClick={(e) => {
                  e.preventDefault();
                  onlogout();
                }}
              >
                LOGOUT
              </button>
            </span>
          </div>
        </div>
      </nav>
      {/* <img src="/img/A1.jpg" /> */}
      {/* side bar starts */}
      <Sidebar>
        <Menu>
          <MenuItem icon={<FaUserAlt />}>
            <a href="/usertable"></a>
          </MenuItem>
          <MenuItem icon={<FaHandHoldingMedical />}>
            <a href=""></a>
          </MenuItem>
          <MenuItem icon={<FaHandHoldingMedical />}>
            <a href=""></a>
          </MenuItem>
          <MenuItem icon={<GiHumanTarget />}>
            <a href=""></a>
          </MenuItem>
          <MenuItem icon={<GiHumanTarget />}>
            <a href=""></a>
          </MenuItem>
          <MenuItem icon={<GiHumanTarget />}>
            <a href=""> </a>
          </MenuItem>
          {/* <MenuItem icon={<GiCampingTent />}>
              <a href="/camptable">CAMP TABLE</a>
            </MenuItem> */}

          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
      {/* sidebar ends*/}
    </>
  );
}

export default Admin;
