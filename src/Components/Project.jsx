import { useState } from "react";
import { projectsArray } from "../../data/projects";
import Location from "./location";

export default function Project({ project }) {
    // const [project, projectState] = useState(projectsArray);
    // console.log(project.location);
    return (
        <>
            <div className="projectDetails">
                <h3>{project.name}</h3>
                <h5 className="projectType">{project.projectType}</h5>
                <div>
                    {project.location.map((locations, index) => (
                        <Location key={index} location={locations} />
                    ))}
                </div>
                <div className="projectDescription">
                <h4 className="projectDescriptionHeader">Project Description</h4>
                    <p>{project.description}</p>

                </div>
                <div className="detailsbtnContainer">
                    <button className="detailsBtn">Details</button>
                </div>
            </div>
            

        </>
    )
}