import React, { useNavigate } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Nav1() {
  const navigate = useNavigate;
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
          </ul>

          <div
            class="collapse navbar-collapse"
            id="navbarNavDarkDropdown"
          ></div>

          <span class="navbar-text">
            <a class="navbar-brand" href="/login">
              LOGIN
            </a>
          </span>
          <li class="nav-item dropdown navbar-brand navbar-text">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDarkDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              REGISTER
            </a>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="navbarDarkDropdownMenuLink"
            >
              <li>
                <a class="dropdown-item" href="/publicreg">
                  PUBLIC
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/labreg">
                  LAB
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/hospitalreg">
                  HOSPITAL
                </a>
                <a class="dropdown-item" href="/quarantine">
                  QUARANTINE
                </a>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </nav>
  );
}
