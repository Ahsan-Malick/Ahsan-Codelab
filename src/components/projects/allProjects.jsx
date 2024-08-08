import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkoneText={project.linkoneText}
						linktwoText={project.linktwoText}
						link={project.link}
						webLink={project.webLink}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
