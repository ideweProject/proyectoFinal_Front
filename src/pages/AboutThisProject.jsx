import React from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function AboutThisProject() {
  async function handleRestartBd() {
    const response = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_URL}/users/restart`,
    });

    toast.success("Base de datos reiniciada correctamente");
  }

  return (
    <div className="full-scree-about bodyAboutUs   ">
      <div className="container-about-us">
        <div className="about-us-text ">
          <p className="about-us-title">Acerca de este proyecto</p>
          <p className="text  w-100  ">
            El presente sitio de e-commerce es un proyecto desarrollado por
            estudiantes del curso intensivo de Hack Academy. Este es un programa
            educativo extremadamente práctico, full-time, donde los estudiantes
            invierten más de 600 horas en aprender sobre{" "}
            <strong>Node.js</strong>, <strong> Express</strong>,{" "}
            <strong>React</strong>, <strong>MySQL</strong>,{" "}
            <strong>MongoDB</strong>,<strong> Git</strong> entre otras
            herramientas.
          </p>
        </div>
      </div>

      <div className="container  p-0">
        <div className="row text-justify rounded section-about-container  ">
          <div className="col-md-12 col-lg-4 descriptionAbout mt-4 text-white  ">
            <h3 className="titleDescription">Duración</h3>
            <p className="text ">
              El proyecto fue desarrollado durante noviembre de 2024 en un plazo
              de 3 semanas, invirtiendo un total de 120 horas. El mismo se
              dividió en sprints (Scrum) de una semana de duración.
            </p>
          </div>
          <div className="col-md-12 col-lg-4 descriptionAbout mt-4 text-white ">
            <h3 className="titleDescription">Tecnologías</h3>
            <p className="text">
              Para el Front-End del sitio se desarrolló una aplicación en React
              (usando VITE) mientras que para el Back-End se desarrolló una REST
              API hecha con Node.js, Express y MySQL.
            </p>
          </div>
          <div className="col-md-12 col-lg-4 descriptionAbout mt-4 text-white ">
            <h3 className="titleDescription">División de tareas</h3>
            <p className="text">
              Para la organización de tareas durante el proyecto se utilizó
              Trello. Esto permitió que cada integrante del equipo estuviese
              permanentemente al tanto del estado del proyecto así como de las
              tareas que debía realizar.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="teamAbout mt-5">
          <h3 className="text-center titleTeamAbout pt-3 text-black title">
            Equipo
          </h3>
        </div>

        <div className="row ">
          <div className="col-lg-3 col-md-6 d-flex justify-content-center">
            <Card className="cardUs mt-3  ">
              <Card.Img
                className="img-fluid imgTest"
                variant="top"
                src={`${import.meta.env.VITE_SUPABASE_URL}/avatar.png`}
              />

              <Card.Body className="cardBodyUs">
                <Card.Title className="nameUsAbout">Agustín Motta</Card.Title>
                <h6 className="nameUsAbout">Junior Full Stack Developer</h6>
                <Link to={"https://github.com/agustinmota"}>
                  <i className="bi bi-github text-white me-1 fs-4"></i>
                </Link>
                <Link to={""}>
                  <i className="bi bi-linkedin text-white fs-4"></i>
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className=" col-lg-3 col-md-6 d-flex justify-content-center">
            <Card className="cardUs mt-3 ">
              <Card.Img
                className="img-fluid imgTest"
                variant="top"
                src={`${import.meta.env.VITE_SUPABASE_URL}/avatar.png`}
              />
              <Card.Body className="cardBodyUs">
                <Card.Title className="nameUsAbout">Bruno Lima</Card.Title>
                <h6 className="nameUsAbout">Junior Full Stack Developer</h6>
                <Link to={"https://github.com/bruno-lima135"}>
                  <i className="bi bi-github text-white me-1 fs-4"></i>
                </Link>
                <Link to={"https://www.linkedin.com/in/bruno-lima-63044a1b9/"}>
                  <i className="bi bi-linkedin text-white fs-4"></i>
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className=" col-lg-3 col-md-6 d-flex justify-content-center">
            <Card className="cardUs mt-3">
              <Card.Img
                className="img-fluid imgTest"
                variant="top"
                src={`${import.meta.env.VITE_SUPABASE_URL}/avatar.png`}
              />
              <Card.Body className="cardBodyUs">
                <Card.Title className="nameUsAbout">Pablo Janavel</Card.Title>
                <h6 className="nameUsAbout">Junior Full Stack Developer</h6>
                <Link to={"https://github.com/epigono"}>
                  <i className="bi bi-github text-white me-1 fs-4"></i>
                </Link>
                <Link to={""}>
                  <i className="bi bi-linkedin text-white fs-4"></i>
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className=" col-lg-3 col-md-6 d-flex justify-content-center">
            <Card className="cardUs mt-3">
              <Card.Img
                className="img-fluid imgTest"
                variant="top"
                src={`${import.meta.env.VITE_SUPABASE_URL}/avatar.png`}
              />
              <Card.Body className="cardBodyUs">
                <Card.Title className="nameUsAbout">Nicolás Hornos</Card.Title>
                <h6 className="nameUsAbout">Junior Full Stack Developer</h6>
                <Link to={"https://github.com/nicohornos"}>
                  <i className="bi bi-github text-white me-1 fs-4"></i>
                </Link>
                <Link to={""}>
                  <i className="bi bi-linkedin text-white fs-4"></i>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="btn-restart-container text-center">
          <p className="text fs-6 reload-text text-black m-1">Reiniciar BD</p>
          <button className="restartDb " onClick={handleRestartBd}>
            <i className="bi bi-arrow-counterclockwise fs-4 text-white"></i>
          </button>
        </div>
      </div>

      <section className="icons-sections p-5">
        <div className="">
          <h5 className="text-center mb-5 title">Tecnologías empleadas</h5>
          <div className="row">
            <div className="col-lg-4 ">
              <div className="d-flex justify-content-center mt-2">
                <div className="img-icons ">
                  <Link to={"https://getbootstrap.com/"}>
                    <img
                      src="https://tfistefyeywtnpgklclp.supabase.co/storage/v1/object/public/images/bootsrap.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>

                <div className="img-icons-html ">
                  <Link>
                    <img
                      src="https://tfistefyeywtnpgklclp.supabase.co/storage/v1/object/public/images/html.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>

                <div className="img-icons">
                  <Link to={"https://es.react.dev/"}>
                    <img
                      src="https://tfistefyeywtnpgklclp.supabase.co/storage/v1/object/public/images/react-svgrepo-com.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="img-icons-css">
                  <Link>
                    <img
                      src="https://tfistefyeywtnpgklclp.supabase.co/storage/v1/object/public/images/css.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 d-flex justify-content-center mt-2">
              <div className="d-flex ">
                <div className="img-icons-js mx-1 ">
                  <Link>
                    <img
                      src="https://tfistefyeywtnpgklclp.supabase.co/storage/v1/object/public/images/javascript.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="img-icons mt-3 mx-1  ">
                  <Link to={"https://nodejs.org/en/"}>
                    <img
                      src="https://tfistefyeywtnpgklclp.supabase.co/storage/v1/object/public/images/8546986_node_icon.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>{" "}
                <div className="img-icons mx-1">
                  <Link to={"https://expressjs.com/es/"}>
                    <img
                      src="https://tfistefyeywtnpgklclp.supabase.co/storage/v1/object/public/images/express.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>{" "}
                <div className="img-icons ">
                  <Link to={"https://www.mysql.com/"}>
                    <img
                      src="https://tfistefyeywtnpgklclp.supabase.co/storage/v1/object/public/images/mysql.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="d-flex justify-content-center mt-2">
                <div className="img-vercel-icon me-4 mt-2">
                  <Link to={"https://vercel.com"}>
                    <img
                      src="https://tfistefyeywtnpgklclp.supabase.co/storage/v1/object/public/images/vercel-PNG.png"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>

                <div className="img-icons-supa">
                  <Link to={"https://supabase.com/"}>
                    <img
                      src="https://tfistefyeywtnpgklclp.supabase.co/storage/v1/object/public/images/supabase_logo_icon_249481.png"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutThisProject;
