import {Col} from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, onClick }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx" onClick={onClick}>
        <img style={{ width: 500, height: 400 }} src={imgUrl} alt="imageUrl" />

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}