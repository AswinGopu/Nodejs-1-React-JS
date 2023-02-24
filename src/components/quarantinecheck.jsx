import React, { useState, useEffect } from "react";

import "../../src/components/quarantine.css";
import Publicnav from "./navbars/publicnav";

export default function Quarantineview() {
  const [camp, setCamp] = useState([]);

  useEffect(() => {
    fetch("http://localhost/covid/public/api/centerview", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    }).then((data) => {
      data.json().then((res) => {
        setCamp(res);
      });
    });
  }, []);

  return (
    <>
      <Publicnav />
      <section id="doctors" class="doctors">
        <div class="container">
          <div class="section-title">
            <h2>QUARANITINE CENTER</h2>
            <p>please contact in this Number if you are in trouble</p>
          </div>

          <div class="row">
            {camp.map((data, index) => {
              return (
                <div class="col-lg-6">
                  <div class="member d-flex align-items-start">
                    <div class="pic"></div>
                    <div class="member-info">
                      <h4>{data.address}</h4>
                      <span>{data.phonenumber}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
