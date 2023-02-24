import React, { useState, useNavigate } from "react";
import Centernav from "./navbars/centernav";
export default function Need() {
  const navigate = useNavigate;
  const [need, setNeed] = useState("");
  const [name, setName] = useState("");

  const validate = () => {
    if (!name || !need) {
      alert("Please Fill All Fields !!");
      return false;
    }

    handleUpload(alert("Needs Send Successfull"));
  };

  const handleUpload = () => {
    let param = {
      name: name,
      need: need,
    };
    // console.log(param);
    fetch("http://localhost/covid/public/api/storeneed ", {
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
      <Centernav />
      <div className="card mt-5">
        <div className="card-header">
          <i className="fa fa-plus"></i>
        </div>
        <div className="card-body">
          <form>
            <div className="row g-3 align-items-center">
              <div className="col-2">
                <label for="inputName" className="col-form-label">
                  QUARANTINE NAME
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

            <div className="row g-3 align-items-center">
              <div className="col-2">
                <label for="inputName" className="col-form-label">
                  QUARANTINE NEEDS
                </label>
              </div>
              <div className="col-4">
                <textarea
                  type="text"
                  id="inputName"
                  className="form-control"
                  placeholder="Enter Needs"
                  aria-describedby=""
                  onChange={(e) => {
                    setNeed(e.target.value);
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
