import React, { useState, useEffect } from "react";
import Labnav from "./navbars/labnav";
import { useLocation } from "react-router-dom";
export default function Certificate() {
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [specimen, setSpec] = useState("");
  const [egen, setEgen] = useState("");
  const [Rdrp, setRdrp] = useState("");
  const [result, setResult] = useState("");
  const [report, setReport] = useState("");
  const [image, setFilename] = useState();
  const [publicid, setPublicid] = useState("");
  const location = useLocation();

  useEffect(() => {
    let param = {
      id: location.state.publicid,
    };
    fetch("http://localhost/covid/public/api/getpatientbyid", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((res) => {
      res.json().then((data) => {
        setName(data[0].name);
        setPhonenumber(data[0].phonenumber);
        setPublicid(data[0].id);
        console.log(data);
      });
    }, []);
  }, []);

  const validate = () => {
    if (
      !name ||
      !specimen ||
      !egen ||
      !Rdrp ||
      !phonenumber ||
      !report ||
      !result ||
      !image
    ) {
      alert("Please Fill All Fields !!");
      return false;
    }

    if (isNaN(phonenumber) || phonenumber.length != 10) {
      alert("Please Enter A Valid Phone number !!");
      return false;
    }

    handleUpload(alert("Result Stored  successfully "));
  };

  const handleUpload = () => {
    let param = {
      publicid: publicid,
      name: name,
      phonenumber: phonenumber,
      specimen: specimen,
      egen: egen,
      Rdrp: Rdrp,
      result: result,
      report: report,
      filename: image,
    };

    fetch("http://localhost/covid/public/api/storecertificate", {
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
      <Labnav />

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-light p-2 px-4 border border-1 rounded-3">
          <li className="breadcrumb-item">
            <a href="/labview">Previouspage</a>
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
                  Name
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
                  Phone Number
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
                    setPhonenumber(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row g-3 align-items-center">
              <div className="col-2">
                <label for="inputName" className="col-form-label">
                  Specimen
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  id="inputName"
                  className="form-control"
                  placeholder="Enter Specimen"
                  aria-describedby=""
                  onChange={(e) => {
                    setSpec(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label for="inputContact" className="col-form-label">
                  E Gene
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  id="inputContact"
                  className="form-control"
                  placeholder="Enter Egen"
                  aria-describedby=""
                  onChange={(e) => {
                    setEgen(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label for="inputEmail" className="col-form-label">
                  RdRP/N / ORF1ab Gene
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  id="inputEmail"
                  className="form-control"
                  placeholder="Enter RdRP/N / ORF1ab Gene"
                  aria-describedby=""
                  onChange={(e) => {
                    setRdrp(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label for="inputPassword" className="col-form-label">
                  Result
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  id="iinputPassword"
                  className="form-control"
                  placeholder="Enter result"
                  aria-describedby=""
                  onChange={(e) => {
                    setResult(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label for="inputPassword2" className="col-form-label">
                  Final Report
                </label>
              </div>
              <div className="col-4">
                <select
                  className="form-control"
                  onChange={(e) => {
                    setReport(e.target.value);
                  }}
                >
                  <option>SELECT FINAL RESULT </option>
                  <option>POSITIVE</option>
                  <option>NEGATIVE</option>
                </select>
              </div>
            </div>

            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label for="iinputfile" className="col-form-label">
                  UPLOAD RESULT
                </label>
              </div>
              <div className="col-4">
                <input
                  type="file"
                  id="iinputfile"
                  className="form-control"
                  placeholder="Enter result"
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
