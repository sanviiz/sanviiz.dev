import Education from "../components/education";
import { educationList } from "../assets/contents/education";
import * as _ from "../assets/constants";
import Fade from "react-reveal/Fade";

export default function EducationLists() {
  return (
    <Fade left>
      <>
        <h3 className="text-3xl font-normal text-gray-500 dark:text-gray-400 transition-all">
          {_.EDUCATION_TITLE}
        </h3>
        {educationList.map((educationElement) => {
          return (
            <Education
              education={educationElement}
              key={educationList.indexOf(educationElement)}
            />
          );
        })}
      </>
    </Fade>
  );
}
