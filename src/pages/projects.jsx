import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";
import Projectbot from "./project-bot";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "projects");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Projects | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="projects" />
        <div className="content-wrapper">
          <div className="projects-logo-container">
            <div className="mx-auto pt-[60px] md:mx-0 md:pt-[25px]">
              <Logo width={46} />
            </div>
          </div>
          <div className="projects-container">
            <div className="flex">
              <div className="hidden md:block">
                <div className="title projects-title">
                  Things I’ve made to showcase my skills.
                </div>
                <div className="subtitle projects-subtitle">
                  I've worked on a variety of projects and I'm proud of the
                  progress I've made within the shot span of time. All of
                  project are available on my github, you can explore there. If
                  you're interested in any of the projects I've worked on,
                  please feel free to suggest any improvements or enhancements
                  you might have in mind. Collaborating with others is a great
                  way to learn and grow, and I'm always open to new ideas and
                  feedback.
                </div>
              </div>
              <div className="">
              <Projectbot></Projectbot>
              </div>
            </div>

            <div className="projects-list">
              <AllProjects />
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
