import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="flex flex-wrap">
			{INFO.projects.map((project, index) => (
				<div className="w-[200px] md:[250px] lg:w-[280px] xl:w-[350px] mx-auto" key={index}>
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
