import React from "react";
import { projects } from "../data/data";
import { ProjectCard } from "./components/project-card";

const MyProjects = () => {
	return (
		<div className='flex flex-col w-11/12 content-center m-auto mt-10'>
			<h2 className='text-2xl font-bold mb-4'>My Projects</h2>
			<div className='flex flex-row flex-wrap gap-10 mt-6'>
				{projects.map((project, i) => (
			    <div key={i} className="flex rounded-lg shadow-lg bg-grey-light w-full ">
				<ProjectCard data={project}/>;
					</div>
				))}
			</div>
		</div>
	);
};

export default MyProjects;