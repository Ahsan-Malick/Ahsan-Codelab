import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/article.css";

const Article = (props) => {
  const { date, title, description, link } = props;

  return (
    <React.Fragment>
      <div className="article">
        <div className="article-left-side">
          <div className="article-date">{date}</div>
        </div>

        <div>
          <div className="article-right-side">
            <div className="article-title">{title}</div>
            <div className="article-description">{description}</div>
            <a
              href={link}
              className="article-link" target="_blank"
            >
              Visit Article
              <FontAwesomeIcon
                style={{ fontSize: "10px" }}
                icon={faChevronRight}
              />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Article;
