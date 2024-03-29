import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/components/admin.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Adminpanal() {
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const [password, setPassword] = useState();

  const onlogout = () => {
    let param = {
      email: email,
      password: password,
      usertype: 0,
    };
    console.log(param);
    fetch("http://localhost/covid/public/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(param),
    }).then((data) => {
      data.json().then((res) => {
        // localStorage.setItem("userdata", res[0]);
        localStorage.getItem("userdata");
        localStorage.clear();
        navigate("/");
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
              <a class="nav-link" href="//centerneed">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <h6>QUARANTINE NEEDS</h6>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/patient">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <h6>EMERGENCY ALERT</h6>
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

            <div
              id="collapseUtilities"
              class="collapse"
              aria-labelledby="headingUtilities"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <h3 class="collapse-header">Tables:</h3>
              </div>
            </div>
          </li>

          <hr class="sidebar-divider d-none d-md-block" />

          <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
        </ul>

        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <button
                id="sidebarToggleTop"
                class="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i class="fa fa-bars"></i>
              </button>

              <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="button">
                      <i class="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>

              <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown no-arrow d-sm-none">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="searchDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fas fa-search fa-fw"></i>
                  </a>

                  <div
                    class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown"
                  >
                    <form class="form-inline mr-auto w-100 navbar-search">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control bg-light border-0 small"
                          placeholder="Search for..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div class="input-group-append">
                          <button class="btn btn-primary" type="button">
                            <i class="fas fa-search fa-sm"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>

                <li class="nav-item dropdown no-arrow">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span
                      class="mr-2 d-none d-lg-inline text-gray-600 small"
                      onClick={(e) => {
                        e.preventDefault();
                        onlogout();
                      }}
                    >
                      logout
                    </span>
                  </a>

                  <div
                    class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Profile
                    </a>
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                      Settings
                    </a>
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                      Activity Log
                    </a>
                    <div class="dropdown-divider"></div>
                    <a
                      class="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#logoutModal"
                    >
                      <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav>

            <div class="container-fluid">
              <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                <a
                  href="#"
                  class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i class="fas fa-download fa-sm text-white-50"></i> Generate
                  Report
                </a>
              </div>

              <div class="row">
                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Earnings (Monthly)
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            $40,000
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-calendar fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Earnings (Annual)
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            $215,000
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-info shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                            Tasks
                          </div>
                          <div class="row no-gutters align-items-center">
                            <div class="col-auto">
                              <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                50%
                              </div>
                            </div>
                            <div class="col">
                              <div class="progress progress-sm mr-2">
                                <div
                                  class="progress-bar bg-info"
                                  role="progressbar"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-warning shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Pending Requests
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            18
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xl-8 col-lg-7">
                  <div class="card shadow mb-4">
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 class="m-0 font-weight-bold text-primary">
                        Earnings Overview
                      </h6>
                      <div class="dropdown no-arrow">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div
                          class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <div class="dropdown-header">Dropdown Header:</div>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="card-body">
                      <div class="chart-area">
                        <canvas id="myAreaChart"></canvas>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-lg-5">
                  <div class="card shadow mb-4">
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 class="m-0 font-weight-bold text-primary">
                        Revenue Sources
                      </h6>
                      <div class="dropdown no-arrow">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div
                          class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <div class="dropdown-header">Dropdown Header:</div>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="card-body">
                      <div class="chart-pie pt-4 pb-2">
                        <canvas id="myPieChart"></canvas>
                      </div>
                      <div class="mt-4 text-center small">
                        <span class="mr-2">
                          <i class="fas fa-circle text-primary"></i> Direct
                        </span>
                        <span class="mr-2">
                          <i class="fas fa-circle text-success"></i> Social
                        </span>
                        <span class="mr-2">
                          <i class="fas fa-circle text-info"></i> Referral
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 mb-4">
                  <div class="card shadow mb-4">
                    <div class="card-header py-3">
                      <h6 class="m-0 font-weight-bold text-primary">
                        Projects
                      </h6>
                    </div>
                    <div class="card-body">
                      <h6 class="small font-weight-bold">
                        Server Migration <span class="float-right">20%</span>
                      </h6>
                      <div class="progress mb-4">
                        <div
                          class="progress-bar bg-danger"
                          role="progressbar"
                        ></div>
                      </div>
                      <h6 class="small font-weight-bold">
                        Sales Tracking <span class="float-right">40%</span>
                      </h6>
                      <div class="progress mb-4">
                        <div
                          class="progress-bar bg-warning"
                          role="progressbar"
                        ></div>
                      </div>
                      <h6 class="small font-weight-bold">
                        Customer Database <span class="float-right">60%</span>
                      </h6>
                      <div class="progress mb-4">
                        <div class="progress-bar" role="progressbar"></div>
                      </div>
                      <h6 class="small font-weight-bold">
                        Payout Details <span class="float-right">80%</span>
                      </h6>
                      <div class="progress mb-4">
                        <div
                          class="progress-bar bg-info"
                          role="progressbar"
                        ></div>
                      </div>
                      <h6 class="small font-weight-bold">
                        Account Setup <span class="float-right">Complete!</span>
                      </h6>
                      <div class="progress">
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 mb-4">
                  <div class="card shadow mb-4">
                    <div class="card-header py-3">
                      <h6 class="m-0 font-weight-bold text-primary">
                        Illustrations
                      </h6>
                    </div>
                    <div class="card-body">
                      <div class="text-center">
                        <img
                          class="img-fluid px-3 px-sm-4 mt-3 mb-4"
                          src="img/undraw_posting_photo.svg"
                          alt="..."
                        />
                      </div>
                      <p>
                        Add some quality, svg illustrations to your project
                        courtesy of{" "}
                        <a
                          target="_blank"
                          rel="nofollow"
                          href="https://undraw.co/"
                        >
                          unDraw
                        </a>
                        , a constantly updated collection of beautiful svg
                        images that you can use completely free and without
                        attribution!
                      </p>
                      <a
                        target="_blank"
                        rel="nofollow"
                        href="https://undraw.co/"
                      >
                        Browse Illustrations on unDraw &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer class="sticky-footer bg-white">
            <div class="container my-auto">
              <div class="copyright text-center my-auto">
                <span>Copyright &copy; Logiprompt 2022</span>
              </div>
            </div>
          </footer>
        </div>
      </div>

      <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
      </a>

      <div
        class="modal fade"
        id="logoutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                class="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a class="btn btn-primary" href="login.html">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
