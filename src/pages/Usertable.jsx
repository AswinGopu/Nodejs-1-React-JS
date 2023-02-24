import React from "react";
function Usertable() {
  const data = [
    {
      name: "PRIYA",
      phonenumber: "9567545451",
      email: "exmple@gmail.com",
    },
    {
      name: "ASLAM",
      phonenumber: "9567545451",
      email: "exmple@gmail.com",
    },
    {
      name: "APSARA",
      phonenumber: "9567545451",
      email: "exmple@gmail.com",
    },
  ];
  //  const listItems = data.map((element, index) => {
  return (
    //  table Data
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-light p-2 px-4 border border-1 rounded-3">
          <li className="breadcrumb-item">
            <a href="/admin">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            USER
          </li>
        </ol>
      </nav>

      {/* table show */}

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
                  <th scope="col">USER ID</th>
                  <th scope="col">USER NAME</th>
                  <th scope="col">USER EMAIL</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>PRIYA</td>
                  <td>example@gmail.com</td>
                  <td>
                    <button type="submit" className="btn btn-primary ">
                      Edit
                    </button>
                    <button type="submit" className="btn btn-danger  ms-2">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>ASLAM</td>
                  <td>example1@gmail.com</td>
                  <td>
                    <button type="submit" className="btn btn-primary ">
                      Edit
                    </button>
                    <button type="submit" className="btn btn-danger  ms-2">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>APSARA</td>
                  <td>example2@gmail.com</td>
                  <td>
                    <button type="submit" className="btn btn-primary ">
                      Edit
                    </button>
                    <button type="submit" className="btn btn-danger  ms-2">
                      Delete
                    </button>
                  </td>
                </tr>
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

export default Usertable;
