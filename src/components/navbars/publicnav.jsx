import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function Publicnav() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const onlogout = () => {
    let param = {
      email: email,
      password: password,
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
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          COVID 19
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
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/home">
                HOME
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/publicprofile"
              >
                PROFILE
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/testdate">
                SCHEDULE TEST
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/result">
                RESULT
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/quarantineview"
              >
                QUARANTINE CENTER
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/complaints">
                COMPLAINTS
              </a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/feedback">
                FEEDBACK
              </a>
            </li> */}
          </ul>

          <span class="navbar-text">
            <a
              class="navbar-brand"
              onClick={(e) => {
                e.preventDefault();
                onlogout();
              }}
            >
              LOGOUT
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}
