export default function WorkExperience(props) {
  const { work } = props;

  return (
    <div className="my-2">
      <p className="text-lg font-bold">{work.COMPANY}</p>
      <p className="text-base font-semibold">{work.ROLE}</p>
      <p className="text-base font-base text-gray-600">
        {work.DATE} | {work.PLACE}
      </p>
      <ul className="list-disc list-inside text-base font-base text-gray-600">
        {work.DETAILS.map((detailElement) => {
          return <li>{detailElement}</li>;
        })}
      </ul>
    </div>
  );
}
