export default function Education(props) {
  const { education } = props;

  return (
    <div className="my-2">
      <p className="text-lg font-bold">{education.ACADEMY}</p>
      <p className="text-base font-semibold">{education.PROGRAM}</p>
      <p className="text-base font-base text-gray-600">{education.STATUS}</p>
      {education.STATUS_LIST && (
        <ul className="list-disc list-inside text-base font-base text-gray-600">
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
