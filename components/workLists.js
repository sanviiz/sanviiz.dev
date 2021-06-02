import * as _ from "../assets/constants";
import Fade from "react-reveal/Fade";
import Work from "../components/work";
import { workList } from "../assets/contents/works";

export default function WorkLists() {
  return (
    <Fade bottom>
      <>
        <h3 className="text-3xl font-normal text-gray-500 mt-5">
          {_.WORK_TITLE}
        </h3>
        {workList.map((workElement) => {
          return (
            <Work work={workElement} key={workList.indexOf(workElement)} />
          );
        })}
      </>
    </Fade>
  );
}
