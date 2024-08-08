import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
  const { logo, title, description, linkoneText, linktwoText, link, webLink } =
    props;

  return (
    <React.Fragment>
      <div className="project">
        <div className="project-container">
          <div className="project-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="project-title">{title}</div>
          <div className="project-description">{description}</div>
          <div className="project-all-link">
            <Link className="project-link-one" to={link} target="_blank">
              <div className="project-link-icon">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <div className="project-link-text">{linkoneText}</div>
            </Link>
            {webLink !== "" && (
              <Link className="project-link-two" to={webLink} target="_blank">
                <div className="project-link-icon">
                  <FontAwesomeIcon icon={faLink} />
                </div>
                <div className="project-link-text">{linktwoText}</div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;
