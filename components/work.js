export default function Work(props) {
  const { work } = props;

  return (
    <div className="my-2">
      <h5 className="text-lg font-bold">{work.COMPANY}</h5>
      <h6 className="text-base font-semibold text-purple-700">{work.ROLE}</h6>
      <p className="text-base font-normal text-gray-600">
        {work.DATE} | {work.PLACE}
      </p>
      <ul className="list-disc list-inside text-base font-normal text-gray-600">
        {work.LISTS.map((detailElement) => {
          return (
            <li key={work.LISTS.indexOf(detailElement)}>{detailElement}</li>
          );
        })}
      </ul>
    </div>
  );
}
