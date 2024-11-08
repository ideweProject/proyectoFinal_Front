import React from "react";
import { Card } from "react-bootstrap";

function AboutThisProject() {
  return (
    <div className="container ">
      <div className="mainTextAbout">
        <h2 className="text-center fs-4 fs-md-3 fs-lg-2">Sobre este proyecto</h2>
        <p className="text-center pMainAbout fs-6 fs-md-5 fs-lg-4 ">
          El presente sitio de e-commerce es un proyecto desarrollado por
          estudiantes del Coding Bootcamp de Hack Academy. El Bootcamp es un
          programa educativo extremadamente práctico de 3 meses y full-time,
          donde los estudiantes invierten más de 600 horas a aprender sobre
          Node.js, Express, React.js, SQL, MongoDB y Git.
        </p>
      </div>

      <div className="container aboutImg mt-3"></div>

      <div className="container mt-5 infoAbout mb-4">
        <div className="row d-flex">
          <div className="col-12 col-md-4 descriptionAbout mt-3 mb-5">
            <h3 className="titleDescription">Duración</h3>
            <p className="pDescriptionAbout">
              El proyecto fue desarrollado en tan sólo 3 semanas, durante
              noviembre de 2022. El mismo se dividió en sprints (Scrum) de una
              semana de duración. El proyecto fue desarrollado en tan sólo 3
              semanas, durante
            </p>
          </div>
          <div className="col-12 col-md-4 descriptionAbout mt-3">
            <h3 className="titleDescription"> Tecnologías</h3>
            <p className="pDescriptionAbout">
              Para el Front-End del sitio se desarrolló una aplicación en React
              (usando Create-React-App) mientras que para el Back-End se
              desarrolló una REST API hecha con Node.js, Express, SQL y
              Git/GitHub.
            </p>
          </div>
          <div className="col-12 col-md-4 descriptionAbout mt-3">
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

      <div className="teamAbout mb-5 mt-4 ">
        <h3 className="text-center titleTeamAbout mt-1">Equipo</h3>
        <p className="text-center pTeamAbout ">
          Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue
          ultrices sed arcu condimentum vestibulum suspendisse. Volutpat eu
          faucibus vivamus eget bibendum cras.
        </p>
      </div>
      <div className="container">
        <div className="row g-5 d-flex justify-content-center rowUs">
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <Card className="cardUs" style={{ height: "30rem" }}>
              <Card.Img
                className="img-fluid  imgTest"
                variant="top"
                src="/images/img_pages/bars.jpg"
                style={{ objectFit: "cover", height: "50%" }}
              />
              <Card.Body className="cardBodyUs">
                <Card.Title className="nameUsAbout">Agustin</Card.Title>
                <h6 className="nameUsAbout">Junior Full Stack Developer</h6>
                <Card.Text className="pTextUs">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <i className="bi bi-twitter-x me-3"></i>
                <i className="bi bi-linkedin"></i>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <Card className="cardUs" style={{ height: "30rem" }}>
              <Card.Img
                className="img-fluid imgTest"
                variant="top"
                src="/images/img_pages/bars.jpg"
                style={{ objectFit: "cover", height: "50%" }}
              />
              <Card.Body className="cardBodyUs">
                <Card.Title className="nameUsAbout">Bruno</Card.Title>
                <h6 className="nameUsAbout">Junior Full Stack Developer</h6>
                <Card.Text className="pTextUs">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <i className="bi bi-twitter-x me-3"></i>
                <i className="bi bi-linkedin"></i>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <Card className="cardUs" style={{ height: "30rem" }}>
              <Card.Img
                className="img-fluid imgTest"
                variant="top"
                src="/images/img_pages/bars.jpg"
                style={{ objectFit: "cover", height: "50%" }}
              />
              <Card.Body className="cardBodyUs">
                <Card.Title className="nameUsAbout">Pablo</Card.Title>
                <h6 className="nameUsAbout">Junior Full Stack Developer</h6>
                <Card.Text className="pTextUs">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <i className="bi bi-twitter-x me-3"></i>
                <i className="bi bi-linkedin"></i>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <Card className="cardUs" style={{ height: "30rem" }}>
              <Card.Img
                className="img-fluid imgTest"
                variant="top"
                src="/images/img_pages/bars.jpg"
                style={{ objectFit: "cover", height: "50%" }}
              />
              <Card.Body className="cardBodyUs">
                <Card.Title className="nameUsAbout">Nicolas</Card.Title>
                <h6 className="nameUsAbout">Junior Full Stack Developer</h6>
                <Card.Text className="pTextUs">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <i className="bi bi-twitter-x me-3"></i>
                <i className="bi bi-linkedin"></i>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutThisProject;
