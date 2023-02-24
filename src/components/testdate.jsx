import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Publicnav from "./navbars/publicnav";

export default function TestDate() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [test, setTest] = useState("");
  const [name, setName] = useState("");
  const [phonenumber, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [labid, setLabid] = useState([]);
  const [publicid, setPublicid] = useState([]);
  const location = useLocation();
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("userdata"));
    setPublicid(info.id);
    setName(info.name);
    setPhone(info.phonenumber);
    console.log(info);
    let param = {
      id: publicid,
    };

    fetch("http://localhost/covid/public/api/getlabbyid", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
      });
    });
  }, []);

  const validate = () => {
    if (!test || !date || !labid) {
      alert("Please Fill All Fields !!");
      return false;
    }
    handleUpload(alert("Your Testdate is Saved"));
  };

  const handleUpload = () => {
    let param = {
      publicid: publicid,
      labid: labid,
      test: test,
      date: date,
    };
    fetch("http://localhost/covid/public/api/storetest ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(param),
    }).then((data) => {
      data.json().then((res) => {
        console.log(res);
        navigate("/card", {
          state: { id: labid },
        });
      });
    });
  };
  useEffect(() => {
    fetch("http://localhost/covid/public/api/getlab").then((res) => {
      res.json().then((data) => {
        setUsers(data);
      });
    });
  }, [refresh]);

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
                <label for="inputName" className="col-form-label">
                  PHONE NUMBER
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  id="inputName"
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
                <label for="date" className="col-form-label">
                  TEST DATE
                </label>
              </div>
              <div className="col-4">
                <input
                  type="date"
                  id="date"
                  className="form-control"
                  placeholder=""
                  aria-describedby="Choose Date For Test"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row g-3 align-items-center">
              <div className="col-2">
                <label for="inputName" className="col-form-label">
                  TEST
                </label>
              </div>
              <div className="col-4">
                <select
                  className="form-control"
                  onChange={(e) => {
                    setTest(e.target.value);
                  }}
                >
                  <option>SELECT TEST</option>
                  <option>ANTIGEN</option>
                  <option>RTPCR</option>
                </select>
              </div>
            </div>
            <div className="row g-3 align-items-center">
              <div className="col-2">
                <label for="inputName" className="col-form-label">
                  SELECT LAB
                </label>
              </div>
              <div className="col-4">
                <select
                  style={{
                    width: "100%",
                    padding: 10,
                    borderRadius: 9,
                    borderWidth: 0.01,
                    borderColor: "rgba(0,0,0,0.1)",
                  }}
                  onChange={(e) => {
                    setLabid(e.target.value);
                  }}
                >
                  <option>Select</option>
                  {users.map((data, index) => {
                    return (
                      <option value={data.id} key={index}>
                        {data.name}
                      </option>
                    );
                  })}
                </select>

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
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
