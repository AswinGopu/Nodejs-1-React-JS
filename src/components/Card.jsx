import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Publicnav from "./navbars/publicnav";

export default function Card() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [expirydate, SetExp] = useState("");
  const [cardno, setCard] = useState("");
  const [cvv, SetCvv] = useState("");
  const [publicid, setPublicid] = useState([]);
  const [labid, setLabid] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("userdata"));
    setPublicid(info.id);
    console.log("idddd", location);
    setLabid(location.state.id);
    let param = {
      id: publicid,
      labid: location.state.id,
    };
    console.log(param);

    fetch("http://localhost/covid/public/api/getlabbyid", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
      });
    });
  }, []);

  const validate = () => {
    if (!amount || !cardno || !name || !cvv || !expirydate) {
      alert("Please Fill All Fields !!");
      return false;
    }
    if (isNaN(cardno) || cardno.length != 16) {
      alert("Please Enter A Valid Card Number !!");
      return false;
    }
    if (isNaN(cvv) || cvv.length != 4) {
      alert("Please Enter A Valid CVV Number !!");
      return false;
    }

    handleUpload(alert("Payment  Successfull"));
  };

  const handleUpload = () => {
    let param = {
      publicid: publicid,
      labid: labid,
      name: name,
      cardno: cardno,
      cvv: cvv,
      expirydate: expirydate,
      amount: amount,
    };
    fetch("http://localhost/covid/public/api/storecard ", {
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

  return (
    <>
      <Publicnav />
      <div class="container my-5 py-5">
        <div class="row d-flex justify-content-center py-5">
          <div class="col-md-7 col-lg-5 col-xl-4">
            <div class="card">
              <div class="card-body p-4">
                <form>
                  <div class="d-flex justify-content-between align-items-center mb-4">
                    <div class="form-outline">
                      <input
                        type="text"
                        id="typeName"
                        class="form-control form-control-lg"
                        siez="17"
                        placeholder="₹250"
                        onChange={(e) => {
                          setAmount(e.target.value);
                        }}
                      />
                      <label class="form-label" for="typeName">
                        Amount
                      </label>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <div class="form-outline">
                      <input
                        type="text"
                        id="typeText"
                        class="form-control form-control-lg"
                        siez="17"
                        placeholder="1234 5678 9012 3457"
                        minlength="19"
                        maxlength="19"
                        onChange={(e) => {
                          setCard(e.target.value);
                        }}
                      />
                      <label class="form-label" for="typeText">
                        Card Number
                      </label>
                    </div>
                    <img
                      src="https://img.icons8.com/color/48/000000/visa.png"
                      alt="visa"
                      width="64px"
                    />
                  </div>

                  <div class="d-flex justify-content-between align-items-center mb-4">
                    <div class="form-outline">
                      <input
                        type="text"
                        id="typeName"
                        class="form-control form-control-lg"
                        siez="17"
                        placeholder="Cardholder's Name"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                      <label class="form-label" for="typeName">
                        Cardholder's Name
                      </label>
                    </div>
                  </div>

                  <div class="d-flex justify-content-between align-items-center pb-2">
                    <div class="form-outline">
                      <input
                        type="text"
                        id="typeExp"
                        class="form-control form-control-lg"
                        placeholder="MM/YYYY"
                        size="7"
                        minlength="7"
                        maxlength="7"
                        onChange={(e) => {
                          SetExp(e.target.value);
                        }}
                      />
                      <label class="form-label" for="typeExp">
                        Expiration
                      </label>
                    </div>
                    <div class="form-outline">
                      <input
                        type="password"
                        id="typeText2"
                        class="form-control form-control-lg"
                        placeholder="&#9679;&#9679;&#9679;"
                        size="1"
                        minlength="3"
                        maxlength="3"
                        onChange={(e) => {
                          SetCvv(e.target.value);
                        }}
                      />
                      <label class="form-label" for="typeText2">
                        Cvv
                      </label>
                    </div>
                    <button
                      type="button"
                      class="btn btn-info btn-lg btn-rounded"
                      onClick={(e) => {
                        e.preventDefault();
                        validate();
                      }}
                    >
                      <i class="fas fa-arrow-right"></i>
                      Pay
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
