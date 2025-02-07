import { useState } from "react";
import { projectsArray } from "../../data/projects";

export default function Project({ project }) {
    // const [project, projectState] = useState(projectsArray);
    // console.log(project);
    return (
        <>
            <div className="projectDetails">
                <h3>{project.name}</h3>
                
            </div>

        </>
    )
}