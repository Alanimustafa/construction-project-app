import { useState } from "react";
import { projectsArray } from "../../data/projects";

export default function Project() {
    const [project, projectState] = useState(projectsArray);

    return (
        <>
            <div className="projectMainContainer">
                <h3 className="projectName">Project Name</h3>
            </div>

        </>
    )
}