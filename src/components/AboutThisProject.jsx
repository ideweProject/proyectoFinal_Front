import React from "react";
import { Card } from "react-bootstrap";

function AboutThisProject() {
  return (
    <div className="container mt-5">
      <div className="container aboutImg mt-5">
        <h2 className="text-center mt-5">Sobre este proyecto</h2>

        <p className="text-center w-75 mx-auto fw-light">
          El presente sitio de e-commerce es un proyecto desarrollado por
          estudiantes del Coding Bootcamp de Hack Academy. El Bootcamp es un
          programa educativo extremadamente práctico de 3 meses y full-time,
          donde los estudiantes invierten más de 600 horas a aprender sobre
          Node.js, Express, React.js, SQL, MongoDB y Git.
        </p>
      </div>
      <div className="container mt-5 infoAbout mb-5">
        <div className="row">
          <div className="col-12 col-md-4">
            <h3>Duración</h3>
            <p>
              El proyecto fue desarrollado en tan sólo 3 semanas, durante
              noviembre de 2022. El mismo se dividió en sprints (Scrum) de una
              semana de duración.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <h3>Tecnologías</h3>
            <p>
              Para el Front-End del sitio se desarrolló una aplicación en React
              (usando Create-React-App) mientras que para el Back-End se
              desarrolló una REST API hecha con Node.js, Express, SQL y
              Git/GitHub.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <h3>División de tareas</h3>
            <p>
              Para la organización de tareas durante el proyecto se utilizó
              Trello. Esto permitió que cada integrante del equipo estuviese
              permanentemente al tanto del estado del proyecto así como de las
              tareas que debía realizar.
            </p>
          </div>
        </div>
      </div>
      <div className="teamAbout mb-5">
        <h3 className="text-center">Equipo</h3>
        <p className="text-center">
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
                <Card.Title>Agustin</Card.Title>
                <h6>Junior Full Stack Developer</h6>
                <Card.Text>
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
                <Card.Title>Bruno</Card.Title>
                <h6>Junior Full Stack Developer</h6>
                <Card.Text>
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
                <Card.Title>Pablo</Card.Title>
                <h6>Junior Full Stack Developer</h6>
                <Card.Text>
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
                <Card.Title>Nicolas</Card.Title>
                <h6>Junior Full Stack Developer</h6>
                <Card.Text>
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
