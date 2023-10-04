import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import book from "../assets/img/book.png";
import store from "../assets/img/store.png";
import blog from "../assets/img/blog.png";
import passgen from "../assets/img/passgen.png";
import schedule from "../assets/img/schedule.png";
import weather from "../assets/img/waether.png";
import booksearch from "../assets/img/booksearch.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Legendary Giggles",
      description: "Legendary Giggles is a two player guessing game! Player 1 will be presented with a image while making sounds that represent whats on the picture, while player 2 guesses what the picture is. For example, if a cat pic is shown then player 1 will make a 'meow' sound.",
      button1:"LOAD GAME",
      imgUrl: projImg1,
    },
    {
      title: "Green Thumb Hub",
      description: "Green thumb hub is a garden helper app! Green thumb hub is a app where you can keep track on how much you've watered your plants, get reminders, and see a breif description on your plants ",
      button2:"GO TO THE GARDEN",
      imgUrl: projImg2,
    },
    {
      title: "Book Hub",
      description: "Book hub helps you quit the screen! If you are a movie/ show binger and would like to start reading then book hub is the place to go, You will take a short test inputting the types of shows/movie you like to watch, you will then be given recommendaions based on your inputs  ",
      button3:"LETS GO READ",
      imgUrl: book,
    },
    {
      title: "Tech Blog",
      description: "This app allows a user to view any blogs on the main page and click them to see the comments. Both the post and comments will show who posted them. If a user would like to create their own blog they can sign up to create an account or login to an existing one. Once logged in they now have access to a dashboard for posting blogs. They can also go to other blogs and comment on them leaving their name and a date. The user then can logout and end their session or a timeout exists on the session as well. ",
      button4:"CHECK OUT THE BLOG",
      imgUrl: blog,
    },
    {
      title: "Password Generator",
      description: "Design & Development",
      button5:"GENERATE A NEW PASSWORD",
      imgUrl: passgen,
    },
    {
      title: "Workday",
      description: "Design & Development",
      button6:"LETS GET ORGANIZED",
      imgUrl: schedule,
    },
    {
      title: "Weather",
      description: "Design & Development",
      button7:"CHECK THE WEATHER",
      imgUrl: weather,
    },
    {
      title: "store",
      description: "Design & Development",
      button8:"NEED MILK?",
      imgUrl: store,
    },
    {
      title: "Book Search",
      description: "Design & Development",
      button9:"LET'S READ!",
      imgUrl: booksearch,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p><br></br></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      {/* <Nav.Link eventKey="first">Tab 1</Nav.Link> */}
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p><br></br></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
