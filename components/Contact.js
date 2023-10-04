import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import resume from "../assets/img/Anacristina.jpg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <p>Lets Stay in contact! </p>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
        
                  <Row>
                    
<body>
    <h2>Education</h2>
    <ul>
        <li>Marble Falls High School, Marble Falls TX — HS Diploma</li>
        <li>UT Austin, Austin TX — Programming</li>
    </ul>
    <h2>Experience</h2>
    <h3>Basave MS, Dallas TX — Data Entry Clerk</h3>
    <p>DEC 2021 - PRESENT</p>
    <ul>
        <li>Maintains database by entering new and updated customer and account information.</li>
        <li>Processes customer and account source documents by reviewing data for deficiencies.</li>
        <li>Maintains data entry requirements by following data program techniques and procedures.</li>
        <li>Combines data from both systems when account information is incomplete.</li>
        <li>Maintains customer confidence and protects operations by keeping information confidential.</li>
    </ul>

    <h3>Blackboard, Remote — Data Entry Clerk</h3>
    <p>NOV 2020 - DEC 2021</p>
    <ul>
        <li>Prepares source data for computer entry by compiling and sorting information.</li>
        <li>Enters customer and account data by inputting alphabetic and numeric information on the keyboard or optical scanner according to screen format.</li>
        <li>Tests customer and account system changes and upgrades by inputting new data.</li>
        <li>Secures information by completing database backups.</li>
    </ul>

    <h3>Deckers, Remote — Tech Support Agent</h3>
    <p>SEP 2019 - NOV 2020</p>
    <ul>
        <li>Maintains system functionality by testing computer components.</li>
        <li>Helped design and implement networks.</li>
        <li>Maximizes computer systems capabilities by studying technical applications and making recommendations.</li>
        <li>Confirms program objectives and specifications by testing new programs, comparing them with established standards, and making modifications.</li>
    </ul>
</body>
                    
                  </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
