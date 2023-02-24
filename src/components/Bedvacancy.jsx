import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hospitalnav from "./navbars/hospitalnav";

export default function Bed() {
  const navigate = useNavigate();
  const [bed, setBed] = useState("");
  const [users, setUsers] = useState([]);
  const [hospitalid, setHospitalid] = useState([]);

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("userdata"));
    setHospitalid(info.id);

    let param = {
      id: hospitalid,
    };
    console.log(param);

    fetch("http://localhost/covid/public/api/gettestbyid", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
      });
    });
  }, []);
  const handleUpload = () => {
    let param = {
      hospitalid: hospitalid,
      bed: bed,
      date: new Date(),
    };
    fetch("http://localhost/covid/public/api/storebed ", {
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
    fetch("http://localhost/covid/public/api/viewbed", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    }).then((data) => {
      data.json().then((res) => {
        setUsers(res);
      });
    });
  }, []);

  const deleteBed = (id) => {
    let param = {
      id: id,
    };

    fetch("http://localhost/covid/public/api/deletebed", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((res) => {
      res.json().then((data) => {
        navigate.go(0);
      });
    });
  };

  const convertToDate = (date) => {
    let d = new Date(date);
    return (
      [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
      " " +
      [d.getHours(), d.getMinutes(), d.getSeconds()].join(":")
    );
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
                  BED DETAILS
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  id="inputName"
                  className="form-control"
                  placeholder="Enter Number of bed"
                  aria-describedby=""
                  onChange={(e) => {
                    setBed(e.target.value);
                  }}
                />
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

      <div className="dataTable my-5 pb-5">
        <div className="row justify-content-between my-3">
          <div className="col-sm-12 col-md-2">
            <div
              className="dataTables_length d-flex align-items-center gap-3"
              id="dataTable_length"
            >
              <label> Show</label>
              <select
                name="dataTable_length"
                aria-controls="dataTable"
                className="form-control form-control-sm"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <label>entries </label>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div
              id="dataTable_filter"
              className="dataTables_filter d-flex align-items-center gap-3"
            >
              <label>Search:</label>
              <input
                type="search"
                className="form-control form-control-sm  "
                placeholder=""
                aria-controls="dataTable"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <table className="table table-bordered table-hover rounded">
              <thead>
                <tr>
                  <th scope="col"> ID</th>
                  <th scope="col">Date</th>

                  <th scope="col">NUMBER OF BED</th>
                </tr>
              </thead>
              <tbody>
                {users.map((data, index) => {
                  console.log(data);
                  return (
                    <tr key={index}>
                      <th scope="row">{data.id}</th>

                      <td>{convertToDate(data.date)}</td>
                      <td>{data.bed}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={(e) => {
                            e.preventDefault();
                            deleteBed();
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="row justify-content-between my-3">
          <div className="col-sm-12 col-md-2">
            <div
              className="dataTables_length d-flex align-items-center gap-3"
              id="dataTable_length"
            >
              <label> Showing 1 to 6 of 6 entries</label>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <nav aria-label="Page navigation">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
