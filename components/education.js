export default function Education(props) {
  const { education } = props;

  return (
    <div className="my-2">
      <h5 className="text-lg font-bold dark:text-white transition-all">
        {education.ACADEMY}
      </h5>
      <h6 className="text-base font-semibold text-purple-700 dark:text-green-500 transition-all">
        {education.PROGRAM}
      </h6>
      <p className="text-base font-normal text-gray-600 dark:text-gray-400 transition-all">
        {education.STATUS}
      </p>
      {education.STATUS_LIST && (
        <ul className="list-disc ml-4 text-base font-normal text-gray-600 dark:text-gray-400 transition-all">
          {education.STATUS_LIST.map((listElement) => {
            return (
              <li key={education.STATUS_LIST.indexOf(listElement)}>
                {listElement}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
