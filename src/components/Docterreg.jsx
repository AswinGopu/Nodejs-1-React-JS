import React, { useState, useNavigate } from "react";
import Nav1 from "./Navbar";

export default function Docterreg() {
  const navigate = useNavigate;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [gender, setGender] = useState("");
  const [phonenumber, setPhone] = useState("");
  const [age, setAge] = useState("");

  const handleUpload = () => {
    let param = {
      name: name,
      address: address,
      district: district,
      gender: gender,
      age: age,
      phonenumber: phonenumber,
      email: email,
    };
    // console.log(param);
    fetch("http://localhost/covid/public/api/storedocter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(param),
    }).then((data) => {
      data.json().then((res) => {
        console.log(res);
      });
    });
  };

  return (
    <>
      <Nav1 />

      <div className="card mt-5">
        <div className="card-header">
          <i className="fa fa-plus"></i>
        </div>
        <div className="card-body">
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
                  placeholder="Enter Docter's Name"
                  aria-describedby=""
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label for="inputAdress" className="col-form-label">
                  ADDRESS
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  id="inputAdress"
                  className="form-control"
                  placeholder="Enter Docter's Address"
                  aria-describedby=""
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label for="inputDistrict" className="col-form-label">
                  DISTRICT
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  id="nputDistrict"
                  className="form-control"
                  placeholder="Enter District "
                  aria-describedby=""
                  onChange={(e) => {
                    setDistrict(e.target.value);
                  }}
                />
              </div>
              <div className="row g-3 mt-2 align-items-center">
                <div className="col-2">
                  <label for="inputGender" className="col-form-label">
                    GENDER
                  </label>
                </div>
                <div className="col-4">
                  <input
                    type="text"
                    id="inputGender"
                    className="form-control"
                    placeholder="Enter Docter's Gender "
                    aria-describedby=""
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                </div>
                <div className="row g-3 mt-2 align-items-center">
                  <div className="col-2">
                    <label for="inputAge" className="col-form-label">
                      AGE
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="text"
                      id="inputAge"
                      className="form-control"
                      placeholder="Enter Docter's Age"
                      aria-describedby=""
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row g-3 mt-2 align-items-center">
                  <div className="col-2">
                    <label for="inputContact" className="col-form-label">
                      PHONE NUMBER
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="text"
                      id="inputContact"
                      className="form-control"
                      placeholder="Enter Docter's Phone Number"
                      aria-describedby=""
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row g-3 mt-2 align-items-center">
                  <div className="col-2">
                    <label for="inputEmail" className="col-form-label">
                      EMAIL
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="text"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Enter Docter's Email"
                      aria-describedby=""
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-success mt-2"
              onClick={(e) => {
                e.preventDefault();
                handleUpload();
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
