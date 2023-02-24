import React, { useEffect, useState } from "react";
import Hospitalnav from "../components/navbars/hospitalnav";
import hospital from "../../src/assests/hospital.png";
import { useNavigate, useLocation } from "react-router-dom";
export default function Hprofile() {
  const [name, setName] = useState("");
  const [phonenumber, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [district, setDis] = useState("");
  const [password, setPassword] = useState("");
  const [uid, setuid] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("userdata"));
    setuid(info.id);
    setAddress(info.address);
    setName(info.name);
    setPhone(info.phonenumber);
    setDis(info.district);
    setEmail(info.email);
    setPassword(info.password);
    console.log(info);

    fetch("http://localhost/covid/public/api/gethospital", {
      method: "get",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
      });
    });
  }, []);
  const handleUpload = () => {
    let param = {
      name: name,
      phonenumber: phonenumber,
      address: address,
      district: district,
      email: email,
      password: password,
      id: uid,
    };

    fetch("http://localhost/covid/public/api/updatehospital", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <Hospitalnav />
      <div class="row">
        <div class="col-lg-4">
          <div class="card mb-4">
            <div class="card-body text-center">
              <img
                src={hospital}
                alt="avatar"
                class="rounded-circle img-fluid"
                style={{ width: "150px" }}
              />
              <form>
                <div className="row g-3 align-items-center">
                  <div className="col-2">
                    <label for="inputName" className="col-form-label">
                      NAME
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="text"
                      id="inputName"
                      className="form-control"
                      aria-describedby=""
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="row g-3 align-items-center">
                  <div className="col-2">
                    <label for="inputName1" className="col-form-label">
                      PHONE NUMBER
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="text"
                      id="inputName1"
                      className="form-control"
                      aria-describedby=""
                      value={phonenumber}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row g-3 align-items-center">
                  <div className="col-2">
                    <label for="inputName2" className="col-form-label">
                      ADDRESS
                    </label>
                  </div>
                  <div className="col-4">
                    <textarea
                      type="text"
                      id="inputName2"
                      className="form-control"
                      aria-describedby=""
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row g-3 align-items-center">
                  <div className="col-2">
                    <label for="inputName3" className="col-form-label">
                      DISTRICT
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="email"
                      id="inputName3"
                      className="form-control"
                      aria-describedby=""
                      value={district}
                      onChange={(e) => {
                        setDis(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row g-3 align-items-center">
                  <div className="col-2">
                    <label for="inputName3" className="col-form-label">
                      EMAIL
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="email"
                      id="inputName3"
                      className="form-control"
                      aria-describedby=""
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="row g-3 align-items-center">
                  <div className="col-2">
                    <label for="inputName4" className="col-form-label">
                      PASSWORD
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="password"
                      id="inputName4"
                      className="form-control"
                      aria-describedby=""
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </form>
              <div class="d-flex justify-content-center mb-2">
                <button
                  type="button"
                  class="btn btn-primary"
                  className="btn btn-success mt-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleUpload();
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
