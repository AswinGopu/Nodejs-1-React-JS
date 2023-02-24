import React, { useState, useNavigate } from "react";

import Hospitalnav from "./navbars/hospitalnav";
export default function Patientreg() {
  const navigate = useNavigate;
  const [image, setFilename] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phonenumber, setPhone] = useState("");
  const [age, setAge] = useState("");

  const validate = () => {
    if (!name || !gender || !image || !phonenumber || !age) {
      alert("Please Fill All Fields !!");
      return false;
    }

    handleUpload(alert("Emergency alert Pass Successfull"));
  };
  const handleUpload = () => {
    let param = {
      name: name,
      gender: gender,
      age: age,
      phonenumber: phonenumber,
      filename: image,
    };
    // console.log(param);
    fetch("http://localhost/covid/public/api/storepatient", {
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
  const handleFileUpload = (file) => {
    const formdata = new FormData();
    formdata.append("file", file);
    fetch("http://localhost/covid/public/api/fileupload", {
      method: "post",
      body: formdata,
    }).then((res) => {
      res.json().then((data) => {
        setFilename(data);
        console.log(res);
      });
    });
  };

  return (
    <>
      <Hospitalnav />

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
                  placeholder="Enter Your Name"
                  aria-describedby=""
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
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
                  placeholder="Enter Your Gender "
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
                    placeholder="Enter Your Age"
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
                    placeholder="Enter Your Phone Number"
                    aria-describedby=""
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label for="inputContact" className="col-form-label">
                  MEDICAL HISTORY
                </label>
              </div>
              <div className="col-4">
                <input
                  type="file"
                  id="inputContact"
                  className="form-control"
                  placeholder="Enter Your Phone Number"
                  aria-describedby=""
                  onChange={(e) => {
                    handleFileUpload(e.target.files[0]);
                    console.log(e.target.files);
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-success mt-2"
              onClick={(e) => {
                e.preventDefault();
                validate();
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
