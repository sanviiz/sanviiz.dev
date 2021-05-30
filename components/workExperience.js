export default function WorkExperience(props) {
  const { work } = props;

  return (
    <div className="my-2">
      <h5 className="text-lg font-bold">{work.COMPANY}</h5>
      <h6 className="text-base font-semibold">{work.ROLE}</h6>
      <p className="text-base font-base text-gray-600">
        {work.DATE} | {work.PLACE}
      </p>
      <ul className="list-disc list-inside text-base font-base text-gray-600">
        {work.DETAILS.map((detailElement) => {
          return (
            <li key={work.DETAILS.indexOf(detailElement)}>{detailElement}</li>
          );
        })}
      </ul>
    </div>
  );
}
