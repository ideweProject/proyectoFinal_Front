import React from "react";
import { Card } from "react-bootstrap";

function AboutThisProject() {
  return (
    <div className="full-scree-about bodyAboutUs">
      <div className="container mainAboutAll pt-2">
        <div className="aboutImg mt-0">
          <div className="mainTextAbout">
            <h2 className="text-center fs-2 fs-md-3 fs-lg-2">
              Sobre este proyecto
            </h2>
            <p className="text-center pMainAbout fs-6 fs-md-5 fs-lg-4">
              El presente sitio de e-commerce es un proyecto desarrollado por
              estudiantes del Coding Bootcamp de Hack Academy. El Bootcamp es un
              programa educativo extremadamente práctico, full-time,
              donde los estudiantes invierten más de 600 horas a aprender sobre
              Node.js, Express, React.js, SQL, MongoDB , Git entre otros.
            </p>
          </div>
        </div>
        <div className="container mt-1 infoAbout mb-1 ">
          <div className="row d-flex ms-2 me-2">
            <div className="col-12 col-md-4 descriptionAbout mt-1 mb-1">
              <h3 className="titleDescription">Duración</h3>
              <p className="pDescriptionAbout">
                El proyecto fue desarrollado en 3 semanas, durante noviembre
                de 2024. El mismo se dividió en sprints (Scrum) de una semana
                de duración.
              </p>
            </div>
            <div className="col-12 col-md-4 descriptionAbout mt-1">
              <h3 className="titleDescription">Tecnologías</h3>
              <p className="pDescriptionAbout">
                Para el Front-End del sitio se desarrolló una aplicación en
                React (usando Create-React-App) mientras que para el Back-End
                se desarrolló una REST API hecha con Node.js, Express, SQL y
                Git/GitHub.
              </p>
            </div>
            <div className="col-12 col-md-4 descriptionAbout mt-1">
              <h3 className="titleDescription">División de tareas</h3>
              <p className="pDescriptionAbout">
                Para la organización de tareas durante el proyecto se utilizó
                Trello. Esto permitió que cada integrante del equipo estuviese
                permanentemente al tanto del estado del proyecto así como de
                las tareas que debía realizar.
              </p>
            </div>
          </div>
        </div>

        <div className="teamAbout">
          <h3 className="text-center titleTeamAbout ">Equipo</h3>
          <p className="text-center pTeamAbout ms-5 me-5">
            El equipo que desarrolló este proyecto está compuesto por estudiantes
            del Coding Bootcamp de Hack Academy. Cada miembro del equipo aportó
            sus habilidades y conocimientos en diferentes áreas del desarrollo
            de software. Los roles principales fueron los siguientes: Desarrollo
            Front-End, Desarrollo Back-End y Desarrollador Full-Stack.
          </p>
        </div>

        <div className="container me-3 ms-3">
          <div className="row g-4 d-flex justify-content-center mt-3  p-0">
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <Card className="cardUs" style={{ height: "22rem", width: "14rem" }}>
                <Card.Img
                  className="img-fluid imgTest"
                  variant="top"
                  src="/images/img_pages/bars.jpg"
                  style={{ objectFit: "cover", height: "80%" }}
                />
                <Card.Body className="cardBodyUs">
                  <Card.Title className="nameUsAbout">Agustín Motta</Card.Title>
                  <h6 className="nameUsAbout">Junior Full Stack Developer</h6>
                  <i className="bi bi-twitter-x me-2 text-white"></i>
                  <i className="bi bi-linkedin text-white"></i>
                </Card.Body>
              </Card>
              
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <Card className="cardUs" style={{ height: "22rem", width: "14rem" }}>
                <Card.Img
                  className="img-fluid imgTest"
                  variant="top"
                  src="/images/img_pages/bars.jpg"
                  style={{ objectFit: "cover", height: "80%" }}
                />
                <Card.Body className="cardBodyUs">
                  <Card.Title className="nameUsAbout">Bruno Lima</Card.Title>
                  <h6 className="nameUsAbout">Junior Full Stack Developer</h6>
                  <i className="bi bi-twitter-x me-2 text-white"></i>
                  <i className="bi bi-linkedin text-white"></i>
                </Card.Body>
              </Card>
              
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <Card className="cardUs" style={{ height: "22rem", width: "14rem" }}>
                <Card.Img
                  className="img-fluid imgTest"
                  variant="top"
                  src="/images/img_pages/bars.jpg"
                  style={{ objectFit: "cover", height: "80%" }}
                />
                <Card.Body className="cardBodyUs">
                  <Card.Title className="nameUsAbout">Pablo Janavel</Card.Title>
                  <h6 className="nameUsAbout">Junior Full Stack Developer</h6>
                  <i className="bi bi-twitter-x me-2 text-white"></i>
                  <i className="bi bi-linkedin text-white"></i>
                </Card.Body>
              </Card>
              
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <Card className="cardUs" style={{ height: "22rem", width: "14rem" }}>
                <Card.Img
                  className="img-fluid imgTest"
                  variant="top"
                  src="/images/img_pages/bars.jpg"
                  style={{ objectFit: "cover", height: "80%" }}
                />
                <Card.Body className="cardBodyUs">
                  <Card.Title className="nameUsAbout">Nicolás Hornos</Card.Title>
                  <h6 className="nameUsAbout">Junior Full Stack Developer</h6>
                  <i className="bi bi-twitter-x me-2 text-white"></i>
                  <i className="bi bi-linkedin text-white"></i>
                </Card.Body>
              </Card>            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutThisProject;
