import React, { useState, useNavigate } from "react";
import Nav1 from "./Navbar";
export default function Publicreg() {
  const navigate = useNavigate;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [gender, setGender] = useState("");
  const [phonenumber, setPhone] = useState("");
  const [aadharnumber, setAadhar] = useState("");
  const [age, setAge] = useState("");
  const [pswd, setPswd] = useState("");

  const validate = () => {
    if (
      !name ||
      !address ||
      !district ||
      !gender ||
      !phonenumber ||
      !aadharnumber ||
      !age ||
      !pswd
    ) {
      alert("Please Fill All Fields !!");
      return false;
    }
    if (isNaN(aadharnumber) || aadharnumber.length != 16) {
      alert("Please Enter A Valid Aadhar Number !!");
      return false;
    }
    if (isNaN(phonenumber) || phonenumber.length != 10) {
      alert("Please Enter A Valid Phone number !!");
      return false;
    }
    if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
      alert("Please Use A Valid Email ID");
      return false;
    }

    handleUpload(alert("Registration successfull please login"));
  };

  const handleUpload = () => {
    let param = {
      name: name,
      address: address,
      district: district,
      gender: gender,
      age: age,
      phonenumber: phonenumber,
      aadharnumber: aadharnumber,
      email: email,
      password: pswd,
    };
    // console.log(param);
    fetch("http://localhost/covid/public/api/storepublic", {
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
                <label for="inputAdress" className="col-form-label">
                  ADDRESS
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  id="inputAdress"
                  className="form-control"
                  placeholder="Enter Your Address"
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
                <div className="row g-3 mt-2 align-items-center">
                  <div className="col-2">
                    <label for="inputContact" className="col-form-label">
                      AADHAR NUMBER
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="text"
                      id="inputContact"
                      className="form-control"
                      placeholder="Enter Your AadharNumber"
                      aria-describedby=""
                      onChange={(e) => {
                        setAadhar(e.target.value);
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
                      placeholder="Enter Your Email"
                      aria-describedby=""
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row g-3 mt-2 align-items-center">
                  <div className="col-2">
                    <label for="inputPassword" className="col-form-label">
                      PASSWORD
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="password"
                      id="iinputPassword"
                      className="form-control"
                      placeholder="Enter Your password"
                      aria-describedby=""
                      onChange={(e) => {
                        setPswd(e.target.value);
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
