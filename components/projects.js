export default function Projects(props) {
  const { project } = props;

  return (
    <div className="my-2">
      <h5 className="text-lg font-semibold dark:text-green-500 transition-all">
        <span className="font-bold text-black dark:text-white transition-all">
          {project.TITLE}
        </span>
        <br className="lg:hidden" /> | {project.KEYWORDS.join(", ")}
      </h5>
      <p className="text-base font-normal text-gray-600 dark:text-gray-300 transition-all">
        {project.DATE} | {project.PLACE}
      </p>
      <ul className="list-disc list-inside text-base font-normal text-gray-600 dark:text-gray-300 transition-all">
        {project.LISTS.map((detailElement) => {
          return (
            <li key={project.LISTS.indexOf(detailElement)}>{detailElement}</li>
          );
        })}
      </ul>
    </div>
  );
}
