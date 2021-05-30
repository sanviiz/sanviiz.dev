export default function Education(props) {
  const { education } = props;

  return (
    <div className="my-2">
      <h5 className="text-lg font-bold">{education.ACADEMY}</h5>
      <h6 className="text-base font-semibold">{education.PROGRAM}</h6>
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
