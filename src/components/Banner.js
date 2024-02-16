import { Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/image-from-rawpixel-id-13002529-png.png";
import face from "../assets/img/sathyahs.jpeg"
import { useState, useEffect } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Data Analyst"]
  const [text, setText] = useState("")
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)
    
    return() => { clearInterval(ticker)}
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1)
    setText(updatedText)

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }

  return (
    <section className="banner" id="home">
      
      <Container>
        <Row className="align-items-center">
          
          <Col xs={12} md={6} xl={7}>
            
            <TrackVisibility>
              {({ isVisible }) => (
                
                <div className={isVisible ? "animate__animated" : ""}>
                  
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm a `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    I am a graduate from Dartmouth College with majors in
                    Computer Science and Quantitative Social Science. I have
                    spent the past 4 years in college honing my skills in coding
                    and data analysis, and worked on a range of exciting
                    projects. I have foundational skills in Data and Web
                    technologies. <br></br>
                  </p>
                  {/* <button onClick={() => console.log("connect")}>
                    Let's connect{" "}
                    <ArrowRightCircle size={25}></ArrowRightCircle>
                  </button> */}
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={15} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" className="smaller-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}