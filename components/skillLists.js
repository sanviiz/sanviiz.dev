import * as _ from "../assets/constants";
import Fade from "react-reveal/Fade";
import Skills from "../components/skills";
import { skillList } from "../assets/contents/skills";

export default function SkillLists() {
  return (
    <Fade bottom>
      <>
        <h3 className="text-3xl font-normal text-gray-500 mt-5 dark:text-gray-300 transition-all">
          {_.SKILL_TITLE}
        </h3>
        {skillList.map((skillElement) => {
          return (
            <Skills
              skill={skillElement}
              key={skillList.indexOf(skillElement)}
            />
          );
        })}
      </>
    </Fade>
  );
}
