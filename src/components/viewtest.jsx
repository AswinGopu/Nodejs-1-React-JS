import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Publicnav from "./navbars/publicnav";
import { Link } from "react-router-dom";
export default function Viewtest() {
  const navigate = useNavigate;
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   // setUid(JSON.parse(info).id);

  //   let param = {
  //     id: JSON.parse(localStorage.getItem("userdata")).id,
  //   };
  //   console.log(param);

  //   fetch("http://localhost/covid/public/api/gettestbyid", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(param),
  //   }).then((res) => {
  //     res.json().then((data) => {
  //       console.log(data);
  //       setTid(data);
  //     });
  //   });
  // }, []);

  useEffect(() => {
    fetch("http://localhost/covid/public/api/viewtest", {
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

  return (
    <>
      <Publicnav />
      {/* <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-light p-2 px-4 border border-1 rounded-3">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            HOSPITAL
          </li>
        </ol>
      </nav> */}

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
                  <th scope="col">Result</th>
                  <th scope="col">Report</th>
                </tr>
              </thead>
              <tbody>
                {users.map((data, index) => {
                  console.log(data);
                  return (
                    <tr key={index}>
                      <th scope="row">{data.id}</th>

                      <td>{data.report}</td>
                      <td>
                        <Link
                          className="btn btn-primary"
                          to="/files/Result.pdf"
                          target="_blank"
                          download
                        >
                          Download
                        </Link>

                        <a href="/testdate" className="btn btn-primary">
                          RESCHEDULE
                        </a>
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
