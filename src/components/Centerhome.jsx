import React from "react";
import Centernav from "./navbars/centernav";

export default function Centerhome() {
  return (
    <>
      <Centernav />
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <img src="./img/q1.webp" class="img-thumbnail" alt="..." />

                <div class="card-body">
                  <p class="card-text">
                    <center>
                      <b>Quarantine Center</b>
                    </center>
                    Isolation and quarantine help protect the public by
                    preventing exposure to people who have or may have a
                    contagious disease. Isolation separates sick people with a
                    contagious disease from people who are not sick. Quarantine
                    separates and restricts the movement of people who were
                    exposed to a contagious disease to see if they become sick
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
                  <img src="./img/q2.webp" class="img-thumbnail" alt="..." />
                </a>
                <div class="card-body">
                  <p class="card-text">
                    <center>
                      <b>Qurantine Center </b>
                    </center>
                    Isolation and quarantine help protect the public by
                    preventing exposure to people who have or may have a
                    contagious disease. Isolation separates sick people with a
                    contagious disease from people who are not sick. Quarantine
                    separates and restricts the movement of people who were
                    exposed to a contagious disease to see if they become sick
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
                  <img src="./img/q3.jpg" class="img-thumbnail" alt="..." />
                </a>

                <div class="card-body">
                  <p class="card-text">
                    <center>
                      <b>Quarantine Center </b>
                    </center>
                    Isolation and quarantine help protect the public by
                    preventing exposure to people who have or may have a
                    contagious disease. Isolation separates sick people with a
                    contagious disease from people who are not sick. Quarantine
                    separates and restricts the movement of people who were
                    exposed to a contagious disease to see if they become sick.
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
