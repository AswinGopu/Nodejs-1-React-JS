import React from "react";

import { Navigate, useNavigate } from "react-router-dom";
import Nav1 from "../../src/components/Navbar";
// import "../components/login.css";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [type, setType] = useState("");
  const [password, setPassword] = useState("");

  const onlogin = () => {
    let param = {
      email: email,
      password: password,
      type: type,
    };
    console.log(param);
    fetch("http://localhost/covid/public/api/lablogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(param),
    }).then((data) => {
      console.log(data);
      data.json().then((res) => {
        localStorage.setItem("userdata", JSON.stringify(res[0]));
        console.log(res);
        // let info = localStorage.getItem('userdata')
        // localStorage.clear()

        if (res[0].usertype === 1) {
          navigate("/adminpanal");
        }
        if (res[0].usertype === 2) {
          navigate("/hospitalhome");
        }

        if (res[0].usertype === 3) {
          navigate("/labhome");
        }
        if (res[0].usertype === 4) {
          navigate("/centerhome");
        }
        if (res[0].usertype === 0) {
          navigate("/publichome");
        }
      });
    });
  };

  return (
    <>
      <Nav1 />
      <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card bg-dark text-white">
                <div class="card-body p-5 text-center">
                  <div class="mb-md-5 mt-md-4 pb-5">
                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                    <p class="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

                    <div class="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        class="form-control form-control-lg"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label class="form-label" for="typeEmailX">
                        Email
                      </label>
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        class="form-control form-control-lg"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label class="form-label" for="typePasswordX">
                        Password
                      </label>
                    </div>

                    <div class="form-outline form-white mb-4">
                      <select
                        class="form-control form-control-lg"
                        onChange={(e) => setType(e.target.value)}
                      >
                        <option>SELECT USERTYPE</option>
                        <option value={0}>Public</option>
                        <option value={2}>Hospital</option>

                        <option value={3}>Lab</option>
                        <option value={4}>Quarantine</option>
                      </select>
                    </div>

                    <p class="small mb-5 pb-lg-2">
                      <a class="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>

                    <button
                      class="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        onlogin();
                      }}
                    >
                      Login
                    </button>

                    <div class="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" class="text-white">
                        <i class="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a href="#!" class="text-white">
                        <i class="fab fa-twitter fa-lg mx-4 px-2"></i>
                      </a>
                      <a href="#!" class="text-white">
                        <i class="fab fa-google fa-lg"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p class="mb-0">
                      Don't have an account?{" "}
                      <a href="#!" class="text-white-50 fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
