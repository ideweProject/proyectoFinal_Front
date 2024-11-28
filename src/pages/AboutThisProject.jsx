import React from "react";
import { Card } from "react-bootstrap";

function AboutThisProject() {
  async function handleRestartBd() {
    const response = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_URL}/users/restart`,
    });

    toast.success("Base de datos reiniciada correctamente");
  }

  return (
    <div className="full-scree-about bodyAboutUs mt-3 mb-3 ">
      <div className="container mainAboutAll pt-2">
        <div
          className="aboutImg mt-0"
          style={{
            backgroundImage: ` url(${
              import.meta.env.VITE_SUPABASE_URL
            }/worker.webp)`,
          }}
        >
          <div className="mainTextAbout">
            <h2 className="text-center fs-2 fs-md-3 fs-lg-2">
              Sobre este proyecto
            </h2>
            <p className="text-center pMainAbout fs-6 fs-md-5 fs-lg-4">
              El presente sitio de e-commerce es un proyecto desarrollado por
              estudiantes del Coding Bootcamp de Hack Academy. El Bootcamp es un
              programa educativo extremadamente práctico, full-time, donde los
              estudiantes invierten más de 600 horas a aprender sobre Node.js,
              Express, React.js, SQL, MongoDB , Git entre otros.
            </p>
          </div>
        </div>
        <div className="container mt-4 infoAbout mb-3">
          <div className="row d-flex">
            <div className="col-12 col-md-4 descriptionAbout mt-1 ">
              <h3 className="titleDescription">Duración</h3>
              <p className="pDescriptionAbout">
                El proyecto fue desarrollado en 3 semanas, durante noviembre de
                2024. El mismo se dividió en sprints (Scrum) de una semana de
                duración.
              </p>
            </div>
            <div className="col-12 col-md-4 descriptionAbout mt-1">
              <h3 className="titleDescription">Tecnologías</h3>
              <p className="pDescriptionAbout">
                Para el Front-End del sitio se desarrolló una aplicación en
                React (usando Create-React-App) mientras que para el Back-End se
                desarrolló una REST API hecha con Node.js, Express, SQL y
                Git/GitHub.
              </p>
            </div>
            <div className="col-12 col-md-4 descriptionAbout mt-1 ">
              <h3 className="titleDescription">División de tareas</h3>
              <p className="pDescriptionAbout">
                Para la organización de tareas durante el proyecto se utilizó
                Trello. Esto permitió que cada integrante del equipo estuviese
                permanentemente al tanto del estado del proyecto así como de las
                tareas que debía realizar.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="teamAbout   ">
            <h3 className="text-center titleTeamAbout pt-3">Equipo</h3>
            <p className="text-center pTeamAbout">
              El equipo que desarrolló este proyecto está compuesto por
              estudiantes del Coding Bootcamp de Hack Academy. Cada miembro del
              equipo aportó sus habilidades y conocimientos en diferentes áreas
              del desarrollo de software. Los roles principales fueron los
              siguientes: Desarrollo Front-End, Desarrollo Back-End y
              Desarrollador Full-Stack.
            </p>
          </div>
          <div className="row d-flex justify-content-center  mx-1">
            <div className="col-12 col-sm-6 col-md-3 mb-3 d-flex justify-content-center">
              <Card className="cardUs mt-3">
                <Card.Img
                  className="img-fluid imgTest"
                  variant="top"
                  src={`${import.meta.env.VITE_SUPABASE_URL}/avatar.png`}
                />
                <Card.Body className="cardBodyUs">
                  <Card.Title className="nameUsAbout">Agustín Motta</Card.Title>
                  <h6 className="nameUsAbout">Junior Full Stack Developer</h6>
                  <i className="bi bi-twitter-x me-2 text-white"></i>
                  <i className="bi bi-linkedin text-white"></i>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-sm-6 col-md-3 mb-3 d-flex justify-content-center">
              <Card className="cardUs mt-3">
                <Card.Img
                  className="img-fluid imgTest"
                  variant="top"
                  src={`${import.meta.env.VITE_SUPABASE_URL}/avatar.png`}
                />
                <Card.Body className="cardBodyUs">
                  <Card.Title className="nameUsAbout">Bruno Lima</Card.Title>
                  <h6 className="nameUsAbout">Junior Full Stack Developer</h6>
                  <i className="bi bi-twitter-x me-2 text-white"></i>
                  <i className="bi bi-linkedin text-white"></i>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-sm-6 col-md-3 mb-3 d-flex justify-content-center">
              <Card className="cardUs mt-3">
                <Card.Img
                  className="img-fluid imgTest"
                  variant="top"
                  src={`${import.meta.env.VITE_SUPABASE_URL}/avatar.png`}
                />
                <Card.Body className="cardBodyUs">
                  <Card.Title className="nameUsAbout">Pablo Janavel</Card.Title>
                  <h6 className="nameUsAbout">Junior Full Stack Developer</h6>
                  <i className="bi bi-twitter-x me-2 text-white"></i>
                  <i className="bi bi-linkedin text-white"></i>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-sm-6 col-md-3 mb-3 d-flex justify-content-center">
              <Card className="cardUs mt-3">
                <Card.Img
                  className="img-fluid imgTest"
                  variant="top"
                  src={`${import.meta.env.VITE_SUPABASE_URL}/avatar.png`}
                />
                <Card.Body className="cardBodyUs">
                  <Card.Title className="nameUsAbout">
                    Nicolás Hornos
                  </Card.Title>
                  <h6 className="nameUsAbout">Junior Full Stack Developer</h6>
                  <i className="bi bi-twitter-x me-2 text-white"></i>
                  <i className="bi bi-linkedin text-white"></i>
                </Card.Body>
              </Card>
            </div>
          </div>{" "}
          <p className="fw-bold text">Reiniciar base de datos</p>
          <button
            className="restartDb text text-white px-3 py-1"
            onClick={handleRestartBd}
          >
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutThisProject;
