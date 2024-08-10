import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="flex flex-wrap justify-between">
			{INFO.projects.map((project, index) => (
				<div className="w-[200px] lg:w-[280px] xl:w-[350px] min-[320px]:mx-auto mb-10 h-[240px] min-[1024px]:h-[210px]" key={index}>
					<Project
						logo={project.logo}
						title={project.title}s
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
