import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hospitaltable() {
  const navigate = useNavigate;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost/covid/public/api/alertview", {
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

  const deletePatient = (id) => {
    let param = {
      id: id,
    };

    fetch("http://localhost/covid/public/api/deletepatient", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((res) => {
      res.json().then((data) => {
        navigate.go(0);
      });
    });
  };

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
              PATIENT
            </li>
          </ol>
        </nav>

        <div>
          <button type="submit" className="btn btn-dark mt-2" navigate="/form">
            +ADD PATIENT
          </button>
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
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Medical History</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((data, index) => {
                    console.log(data);
                    return (
                      <tr key={index}>
                        <th scope="row">{data.id}</th>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                        <td>{data.gender}</td>
                        <td>
                          <img
                            src={
                              "http://localhost/covid/public/upload/" +
                              data.image
                            }
                            height="100"
                          />
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={(e) => {
                              e.preventDefault();
                              deletePatient(data.id);
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
      </div>
    </>
  );
}
