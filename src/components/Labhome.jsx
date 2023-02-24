import React from "react";
import Labnav from "./navbars/labnav";

export default function Labhome() {
  return (
    <>
      <Labnav />

      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <img src="./img/ddrc.png" class="img-thumbnail" alt="..." />

                <div class="card-body">
                  <p class="card-text">
                    <center>
                      <b>DDRC</b>
                    </center>
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <a href="cricketfixture.html">
                  <img src="./img/lab1.jpg" class="img-thumbnail" alt="..." />
                </a>
                <div class="card-body">
                  <p class="card-text">
                    <center>
                      <b>GOVERMENT LAB </b>
                    </center>
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <a href="cricketfixture.html">
                  <img src="./img/lab2.jpg" class="img-thumbnail" alt="..." />
                </a>

                <div class="card-body">
                  <p class="card-text">
                    <center>
                      <b>METRO LAB</b>
                    </center>
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
