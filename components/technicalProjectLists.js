import * as _ from "../assets/constants";
import Fade from "react-reveal/Fade";
import Projects from "../components/projects";
import { technicalProjectList } from "../assets/contents/technicalProjects";

export default function TechnicalProjectList() {
  return (
    <Fade right>
      <>
        <h3 className="text-3xl font-normal text-gray-500 dark:text-gray-300 transition-all">
          {_.TECHNICAL_PROJECT_TITLE}
        </h3>
        {technicalProjectList.map((projectElement) => {
          return (
            <Projects
              project={projectElement}
              key={technicalProjectList.indexOf(projectElement)}
            />
          );
        })}
      </>
    </Fade>
  );
}
