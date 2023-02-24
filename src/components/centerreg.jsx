import React, { useState, useNavigate } from "react";

import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import { useEffect } from "react";

export default function Centerreg() {
  const navigate = useNavigate;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [latitude, setLat] = useState("");
  const [longitude, setLng] = useState("");
  const [phonenumber, setPhone] = useState("");
  const [pswd, setPswd] = useState("");
  const [loc, setLoc] = useState(null);
  const validate = () => {
    if (!name || !loc || !phonenumber || !email || !pswd) {
      alert("Please Fill All Fields !!");
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

    handleUpload(alert("Registration successfull "));
  };

  const handleUpload = () => {
    let param = {
      name: name,
      address: loc.label,
      latitude: latitude,
      longitude: longitude,
      phonenumber: phonenumber,
      email: email,
      password: pswd,
    };
    console.log(param);
    fetch("http://localhost/covid/public/api/storequarantine ", {
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

  useEffect(() => {
    if (loc) {
      geocodeByAddress(loc.label)
        .then((results) => getLatLng(results[0]))
        .then(
          ({ lat, lng }) => {
            setLat(lat);
            setLng(lng);
          }

          // setLoc(loc.label)

          // console.log("Successfully got latitude and longitude", {
          //   lat,
          //   lng,
          //   loc,
          // })
        );
    }
  }, [loc]);
  return (
    <>
      <div id="wrapper">
        <ul
          class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            class="sidebar-brand d-flex align-items-center justify-content-center"
            href="index.html"
          >
            <div class="sidebar-brand-text mx-3">Project 01</div>
          </a>

          <hr class="sidebar-divider my-0" />

          <li class="nav-item active">
            <a class="nav-link" href="index.html">
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <hr class="sidebar-divider" />

          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              <i class="fas fa-fw fa-table"></i>
              <h6>Tables</h6>
            </a>
            <li class="nav-item active">
              <a class="nav-link" href="/usertable">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <h6>USERS</h6>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/quarantinetable">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <h6>QUARANTINE</h6>
              </a>
            </li>

            <li class="nav-item active">
              <a class="nav-link" href="/quarantineneeds">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <h6>QUARANTINE NEEDS</h6>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/hospitaltable">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <h6>HOSPITAL </h6>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/labtable">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <h6>LAB </h6>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/complainttable">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <h6>COMPLAINTS</h6>
              </a>
            </li>
            {/* <li class="nav-item active">
              <a class="nav-link" href="/notification">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <h6>NOTIFICATION</h6>
              </a>
            </li> */}
          </li>
        </ul>

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-light p-2 px-4 border border-1 rounded-3">
            <li className="breadcrumb-item">
              <a href="/admin">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              QUARANTINE
            </li>
          </ol>
        </nav>

        <div className="card mt-5">
          <div className="card-header">
            <i className="fa fa-plus"></i>
          </div>
          <div className="card-body">
            <form>
              <div className="row g-3 align-items-center">
                <div className="col-2">
                  <label for="inputName" className="col-form-label">
                    QUARANTINE CENTER NAME
                  </label>
                </div>
                <div className="col-4">
                  <input
                    type="text"
                    id="inputName"
                    className="form-control"
                    placeholder="Enter  Name"
                    aria-describedby=""
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="row g-3 mt-2 align-items-center">
                <div className="col-2">
                  <label for="inputContact" className="col-form-label">
                    LOCATION
                  </label>
                </div>
                <div className="col-4">
                  <GooglePlacesAutocomplete
                    GooglePlacesDetailsQuery={{ fields: "geometry" }}
                    fetchDetails={true} // you need this to fetch the details object onPress
                    placeholder="Search"
                    query={{
                      key: "AIzaSyCWED24ut0NZVXBKwkiynWByxmjj__fVcw",
                      language: "en", // language of the results
                    }}
                    selectProps={{
                      loc,
                      onChange: setLoc,
                    }}
                    onFail={(error) => console.error(error)}
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
      </div>
    </>
  );
}
