import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

function Mushroom() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
          <a className="navbar-brand" href="#!">
            Myco App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Hongos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Mi cuenta
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Cerrar sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg"
              alt="..."
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light text-muted">Nombre científico</h1>
            <h1 className="font-weight-light">Nombre local</h1>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5">
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">¿Es comestible?</h2>
                <p className="card-text">
                  Aquí te indicaremos si tu hongo es comestible
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">¿Es alucinógeno?</h2>
                <p className="card-text">
                  Aquí te indicaremos si tu hongo es alucinógeno
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">¿Dónde lo puedo encontrar?</h2>
                <p className="card-text">
                  Aquí podrás saber en qué localidad se encuentra tu hongo
                </p>
              </div>
            </div>
          </div>
          <div className="card text-white bg-secondary my-5 py-4 text-center">
            <div className="card-body">
              <p className="text-white m-0">
                Si tu hongo es comestible aquí aparecerá una receta. De lo contrario aparecerá información relevante sobre el hongo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-5 bg-dark">
        <div className="container px-4 px-lg-5">
          <p className="m-0 text-center text-white">
            Copyright &copy; MycoApp 2021
          </p>
        </div>
      </footer>
    </>
  );
}

export default Mushroom;
