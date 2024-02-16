import {Col, Button} from "react-bootstrap";
import { useState } from "react";

export const ReactCard = ({
  
  title,
  description,
  imgUrl,
  onClick,
  link,
  repof,
  repob,
}) => {
  
  const [hovered, setHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false)


  const handleTitleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx" onClick={onClick}>
        <img style={{ height: 400, width: 416 }} src={imgUrl} alt={title} />

        <div className="proj-txtx">
          <h4
            style={{
              cursor: "pointer",
              marginBottom: "10px",
              color: hovered ? "#ECC44E" : "#B8B8B8",
            }}
            onClick={handleTitleClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {title}
          </h4>
          <span style={{ marginBottom: "10px" }}>{description}</span>
          <div style={{ marginTop: "10px" }}>
            {repof && (
              <Button
                variant="primary"
                href={repof}
                target="_blank"
                className="mr-2"
                style={{
                  backgroundColor: "#ECC44E",
                  marginRight: "5px",
                  border: "none",
                  outline: "none",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
              >
                Frontend Repo
              </Button>
            )}
            {repob && (
              <Button
                variant="primary"
                href={repob}
                target="_blank"
                style={{
                  backgroundColor: "#ECC44E",
                  marginRight: "5px",
                  border: "none",
                  outline: "none",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
              >
                Backend Repo
              </Button>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};