import React from "react";
function Form() {
  return (
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

      <div className="card mt-5">
        <div className="card-header">
          <i className="fa fa-plus"></i>
        </div>
        <div className="card-body">
          <form>
            <div className="row g-3 align-items-center">
              <div className="col-2">
                <label for="inputPassword6" className="col-form-label">
                  ID
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  id="inputPassword6"
                  className="form-control"
                  placeholder="Enter  Id"
                  aria-describedby=""
                />
              </div>
            </div>
            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label for="inputPassword6" className="col-form-label">
                  NAME
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  id="inputPassword6"
                  className="form-control"
                  placeholder="Enter  Name"
                  aria-describedby=""
                />
              </div>
            </div>
            <div className="row g-3 mt-2 align-items-center">
              <div className="col-2">
                <label for="inputPassword6" className="col-form-label">
                  EMAIL ID
                </label>
              </div>
              <div className="col-4">
                <input
                  type="email"
                  id="inputPassword6"
                  className="form-control"
                  placeholder="Enter  Email ID "
                  aria-describedby=""
                />
              </div>
            </div>

            <button type="submit" className="btn btn-success mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Form;
