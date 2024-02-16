import {Container, Row, Col, Nav, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/Project3_Figure_SThenappan_page-0001.jpg"
import projImg2 from "../assets/img/Project1_Figure_Thenappan copy_page-0001.jpg";
import projImg3 from "../assets/img/Project2_Figure_SThenappan copy_page-0001.jpg";
import projImg4 from "../assets/img/RplotCrimez_page-0001.jpg";
import projImg5 from "../assets/img/RplotAussie_page-0001.jpg";
import projImg6 from "../assets/img/RplotNBAz_page-0001.jpg";
import projImg7 from "../assets/img/RplotSAT_page-0001.jpg";
import projImg8 from "../assets/img/Rplotwhitefg_page-0001.jpg";
import projImg9 from "../assets/img/Final WP Plot.jpeg";
import projImg10 from "../assets/img/Rplotwiidz_page-0001.jpg";
import projectImg11 from "../assets/img/globalgems.png";
import projectImg12 from "../assets/img/globalgems (1).png";
import projectImg13 from "../assets/img/globalgems (2).png";
import projectImg14 from "../assets/img/globalgems (4).png";
import projectImg15 from "../assets/img/globalgems (3).png";
import projectImg16 from "../assets/img/night-view-7523474_1280.jpg";
import projectImg17 from "../assets/img/Screenshot 2024-02-16 at 4.20.29 PM.png";
import {useState} from "react";
import TrackVisibility from "react-on-screen";
import "animate.css"
import Modal from 'react-responsive-modal'; // Import the modal library
import 'react-responsive-modal/styles.css'; // Import the modal styles
import { ReactCard } from "./ReactCard";


export const Projects = () => {
  const [open, setOpen] = useState(false); // State to control the modal
  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image URL
  const [modalSize, setModalSize] = useState(null);

  const modalStyles = {
    modal: {
      width: "900px", // Adjust the width as needed
      height: "600px",
      borderRadius: "10px", // Round the corners
      padding: "20px", // Add padding for spacing
      backgroundColor: "white", // Set a background color
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // Add a shadow for depth
    },
  };

  const projects = [
    {
      title: "Instant Noodles in Asia",
      description: "A study on instant noodle consumption in Asia",
      imgUrl: projImg1,
      link: "https://www.kaggle.com/datasets/residentmario/ramen-ratings",
    },
    {
      title: "Equal Voting Rights",
      description:
        "Proportion of perceived importance and presence of equal voting rights of US public in 2019",
      imgUrl: projImg2,
    },
    {
      title: "Greenhouse Gas Emissions",
      description: "Breakdown of GH gas emissions by country",
      imgUrl: projImg3,
    },
    {
      title: "Arrests in USA",
      description: "Total arrests in major cities across the US from 1860-1920",
      imgUrl: projImg4,
    },
    {
      title: "Australian Copepods",
      description: "Plankton and crustacean concentrations in Australia",
      imgUrl: projImg5,
    },
    {
      title: "NBA Leagues",
      description: "What predicts winning in the NBA?",
      imgUrl: projImg6,
    },
    {
      title: "SAT Scores",
      description: "SAT scores by county in California from 2015-2016",
      imgUrl: projImg7,
    },
    {
      title: "Geese Migrations",
      description:
        "Migrations of white-fronted geese in Europe and Northern Asia",
      imgUrl: projImg8,
    },
    {
      title: "Trade Flow in England",
      description:
        "Recreation of W.Playfair plot on imports and exports in England",
      imgUrl: projImg9,
    },
    {
      title: "Gini Index Scores",
      description: "Centered Gini Index Scores by regions of the world",
      imgUrl: projImg10,
    },
  ];

  const webProjects = [
      {
        title: "GitHired",
        description:
          "Software engineer job application and Leetcode practice tracker",
        imgUrl: projectImg11,
        link: "https://git-hired-app.netlify.app",
        repof: "https://github.com/sathyat20/GitHired-Frontend",
        repob: "https://github.com/sathyat20/GitHired-Backend",
      },
      {
        title: "Sessions",
        description: "App to connect like-minded musicians and music groups",
        imgUrl: projectImg15,
        link: "https://sessionsv2.netlify.app",
        repof: "https://github.com/sathyat20/sessions-frontend",
        repob: "https://github.com/sathyat20/sessions-backend",
      },
      {
        title: "GlobalGems",
        description: "Personalized travel planner for hidden gems in Hong Kong",
        imgUrl: projectImg14,
        link: "https://globalgems.netlify.app",
        repof: "https://github.com/sathyat20/globalgems-frontend",
      },
      {
        title: "Lender",
        description: "Lending and borrowing app for college students",
        imgUrl: projectImg13,
        link: "https://lender.onrender.com",
        repof: "https://github.com/sathyat20/lenderWebsite",
      },
      {
        title: "Zenify",
        description: "Mental health web application for teens of color",
        imgUrl: projectImg12,
        link: "https://zenify.vercel.app",
        repof: "https://github.com/sathyat20/zenify-frontend",
      },
    ];

  const extraProjects = [
    {
      title: "Into the Seoul of Korea",
      description: "ArcGIS story map on my Seoul expedition",
      imgUrl: projectImg16,
      link: "https://storymaps.arcgis.com/stories/80d8ab2f1db04eb0a265744c285b3e5d",
    },
    {
      title: "Senior Honors Thesis",
      description:
        "Effects of daylight on college students’ physical and mental well-being",
      imgUrl: projectImg17,
      link: "https://www.linkedin.com/in/sathya-thenappan-28ba73174/overlay/1635531762053/single-media-viewer/?profileId=ACoAAClyxMsB3VS68mhq4Ctq4WRTWq1BS6xZ7W4",
    },
  ];

    const openModal = (imgUrl, size) => {
      setSelectedImage(imgUrl);
      setModalSize(size); // Set the size of the modal
      setOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
      setSelectedImage(null);
      setOpen(false);
    };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Check out some of the projects I've worked on so far!</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Data Analysis</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Web Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Other</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                          onClick={() => openModal(project.imgUrl, "sm")}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {webProjects.map((project, index) => {
                      return <ReactCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {extraProjects.map((project, index) => {
                      return <ReactCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="colorSharp"
      />
      <Modal open={open} onClose={closeModal} styles={modalStyles} center>
        <img
          src={selectedImage}
          alt="Full Size Image"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </Modal>
    </section>
  );
}