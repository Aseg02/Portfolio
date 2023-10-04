import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, button1, button2, button3, button4, button5, button6, button7, button8, button9, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <a id="bttn1" className="bttn"  href=" https://legendary-giggle-4c67ca9ca408.herokuapp.com/" role="button">{button1}</a>
          <a id="bttn2" className="bttn" href="https://gentle-fortress-84585-60555956fddc.herokuapp.com/" role="button">{button2}</a>
          <a id="bttn3" className="bttn" href=" https://cyphernyx.github.io/BookHub/index.html" role="button">{button3}</a>
          <a id="bttn4" className="bttn" href="http://asegoblog.com/" role="button">{button4}</a>
          <a id="bttn5" className="bttn" href="https://aseg02.github.io/pass-gen/" role="button">{button5}</a>
          <a id="bttn6" className="bttn" href="https://aseg02.github.io/workday/" role="button">{button6}</a>
          <a id="bttn7" className="bttn" href="https://aseg02.github.io/weather/" role="button">{button7}</a>
          <a id="bttn8" className="bttn" href="https://aseg02.github.io/store/" role="button">{button8}</a>
          <a id="bttn9" className="bttn" href="https://book-search-challenge-21-mern.herokuapp.com/" role="button">{button9}</a>
        </div>
      </div>
    </Col>
  )
}

export const ProjectCard1 = ({ title, description, button1, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx1">
        <img src={imgUrl} />
        <div className="proj-txtx1">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <a id="bttn1" className="bttn"  href="https://idp.bootcampspot.com/ui/?requestId=e9574370-a1c2-4625-b23d-bf5a0ecee9dc" role="button">{button1}</a>
          </div>
      </div>
    </Col>
  )
}


