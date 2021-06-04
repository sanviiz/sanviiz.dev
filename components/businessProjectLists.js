import * as _ from "../assets/constants";
import Fade from "react-reveal/Fade";
import Projects from "../components/projects";
import { businessProjectList } from "../assets/contents/businessProjects";

export default function TechnicalProjectList() {
  return (
    <Fade bottom>
      <>
        <h3 className="text-3xl font-normal text-gray-500 mt-5 dark:text-gray-400 transition-all">
          {_.BUSINESS_PROJECT_TITLE}
        </h3>
        {businessProjectList.map((projectElement) => {
          return (
            <Projects
              project={projectElement}
              key={businessProjectList.indexOf(projectElement)}
            />
          );
        })}
      </>
    </Fade>
  );
}
