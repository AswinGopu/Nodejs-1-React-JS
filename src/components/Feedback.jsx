import React, { useState, useNavigate } from "react";

export default function Feedback() {
  const [name, setName] = useState("");
  const [cid, setCid] = useState("");
  const [feedback, setFeedback] = useState("");

  const validate = () => {
    if (!name || !feedback) {
      alert("Please Fill All Fields !!");
      return false;
    }

    handleUpload(alert("Feedback Send Successfull"));
  };

  const handleUpload = () => {
    let param = {
      name: name,
      cid: cid,
      feedback: feedback,
    };
    fetch("http://localhost/covid/public/api/getcomplaintid", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(param),
    }).then((data) => {
      data.json().then((res) => {
        setCid(res);
        console.log(res);
      });
    }, []);

    fetch("http://localhost/covid/public/api/storefeedback", {
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
  return (
    <>
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
                  placeholder=" Enter Your Name"
                  aria-describedby=""
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row g-3 align-items-center">
              <div className="col-2">
                <label for="inputcom" className="col-form-label">
                  Feedback
                </label>
              </div>
              <div className="col-4">
                <textarea
                  type="text"
                  id="inputcom"
                  className="form-control"
                  placeholder=" Enter Your Complaints"
                  aria-describedby=""
                  onChange={(e) => {
                    setFeedback(e.target.value);
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
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
