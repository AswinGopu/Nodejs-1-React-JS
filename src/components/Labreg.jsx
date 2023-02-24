import React, { useState } from "react";
import Subnav from "./subnav";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SweetAlert from "react-bootstrap-sweetalert";

export default function Labreg() {
  const navigate = useNavigate;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [latitude, setLat] = useState("");
  const [longitude, setLng] = useState("");
  const [phonenumber, setPhone] = useState("");
  const [pswd, setPswd] = useState("");
  const [loc, setLoc] = useState(null);

  const Validate = () => {
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

    handleUpload(alert("Registration Is Successfull Now Login"));
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
    fetch("http://localhost/covid/public/api/storelab ", {
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
      <Subnav />
      <div className="card mt-5">
        <div className="card-header">
          <i className="fa fa-plus"></i>
        </div>
        <div className="card-body">
          <form>
            <div className="row g-3 align-items-center">
              <div className="col-2">
                <label for="inputName" className="col-form-label">
                  LAB NAME
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  id="inputName"
                  className="form-control"
                  placeholder="Enter Lab Name"
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
                Validate();
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
