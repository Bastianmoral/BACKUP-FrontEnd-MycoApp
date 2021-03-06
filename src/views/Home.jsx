import { React } from "react" ;
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid bg-dark text-light">
        <Link
                to="/login"
            >
                <a href="#" className="btn btn-success mt-3 float-end">Iniciar Sesión</a>
        </Link>
          <div className="container bg-dark p-3">
            <h1 className="display-4">Bienvenido a la Myco App</h1>
            <hr />
            <p></p>
          </div>
          <div className="container">
            <div className="row mt-5 justify-content-center">
              <div className="col-10 mt-3 mb-5">
                <div
                  className="carousel slide carousel-fade"
                  id="mi-carousel"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="img-fluid"
                        src="../images/hongo1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                      <div className="carousel-caption">
                        <h5>Reino fúngico</h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                      <img
                        className="img-fluid"
                        src="../images/hongo2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="img-fluid"
                        src="../images/hongo3.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#mi-carousel"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Anterior</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#mi-carousel"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Siguiente</span>
                  </button>
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      className="active"
                      data-bs-target="#mi-carousel"
                      data-bs-slide-to="0"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      className=""
                      data-bs-target="#mi-carousel"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      className=""
                      data-bs-target="#mi-carousel"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-between">
          <div className="col-4 mt-5 mb-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">¿Qué es un hongo?</h5>
                <p className="card-text">
                  En esta sección explicaremos que es un hongo cuales son su
                  partes y que es todo este reino fungi para los neófitos del
                  tema que no sepan nada sobre el asunto.
                </p>
                <a href="#" className="btn btn-primary">
                  Saber más
                </a>
              </div>
            </div>
          </div>
          <div className="col-4 mt-5 mb-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Myco App</h5>
                <p className="card-text">
                  Te invitamos a encontrar parte del reino fúngico, entre ellos
                  muchos hongos comestibles o tóxicos, con algunas
                  características bastante particulares.
                </p>
                <a href="#" className="btn btn-primary">
                  Ir a la App
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <footer className="text-center text-lg-start bg-light text-muted">
              <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                  <span>Conéctate con nosotros en las redes sociales:</span>
                </div>
                <div>
                  <a href="" className="me-4 text-reset">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="" className="me-4 text-reset">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="" className="me-4 text-reset">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="" className="me-4 text-reset">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="" className="me-4 text-reset">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="" className="me-4 text-reset">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </section>
              <section className="">
                <div className="container text-center text-md-start mt-3">
                  <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">
                        <i className="fas fa-gem me-3"></i>Myco App
                      </h6>
                      <p>Reino fúngico</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">Productos</h6>
                      <p>
                        <a href="#!" className="text-reset"></a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset"></a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset"></a>
                      </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">
                        links de interés
                      </h6>
                      <p>
                        <a href="#!" className="text-reset"></a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset"></a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset"></a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset"></a>
                      </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                      <p>
                        <i className="fas fa-home me-3"></i>
                      </p>
                      <p>
                        <i className="fas fa-envelope me-3"></i>
                      </p>
                      <p>
                        <i className="fas fa-phone me-3"></i>
                      </p>
                      <p>
                        <i className="fas fa-print me-3"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <div className="text-center p-4">
                © 2021 Copyright: Myco App Bastián Moral y Matías Quezada
                <a
                  className="text-reset fw-bold"
                  href="https://mdbootstrap.com/"
                ></a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
