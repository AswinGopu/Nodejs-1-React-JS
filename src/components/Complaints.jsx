import React, { useState, useNavigate } from "react";

import Publicnav from "./navbars/publicnav";
export default function Complaints() {
  const [name, setName] = useState("");
  const [complaints, setComplaints] = useState("");
  const [suggestions, setSuggestions] = useState("");

  const validate = () => {
    if (!name || !complaints || !suggestions) {
      alert("Please Fill All Fields !!");
      return false;
    }

    handleUpload(alert("Complaints Send Successfull"));
  };

  const handleUpload = () => {
    let param = {
      name: name,
      complaints: complaints,
      suggestions: suggestions,
    };
    fetch("http://localhost/covid/public/api/storecomplaints", {
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
    }, []);
  };
  return (
    <>
      <Publicnav />
      <div className="card mt-5">
        <div className="card-header">
          <i className="fa fa-plus"></i>
        </div>
        <div className="card-body">
          <form>
            <div className="row g-3 align-items-center">
              <div className="col-2">
                <label for="inputName" className="col-form-label">
                  Name
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  id="inputName"
                  className="form-control"
                  placeholder=" Enter Your Name"
                  aria-describedby=""
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row g-3 align-items-center">
              <div className="col-2">
                <label for="inputcom" className="col-form-label">
                  Complaints
                </label>
              </div>
              <div className="col-4">
                <textarea
                  type="text"
                  id="inputcom"
                  className="form-control"
                  placeholder=" Enter Your Complaints"
                  aria-describedby=""
                  onChange={(e) => {
                    setComplaints(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="row g-3 align-items-center">
              <div className="col-2">
                <label for="inputcom" className="col-form-label">
                  Suggestions
                </label>
              </div>
              <div className="col-4">
                <textarea
                  type="text"
                  id="inputcom"
                  className="form-control"
                  placeholder=" Enter Your Suggestions"
                  aria-describedby=""
                  onChange={(e) => {
                    setSuggestions(e.target.value);
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
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
