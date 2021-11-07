export default function Work(props) {
  const { work } = props;

  return (
    <div className="my-2">
      <h5 className="text-lg font-bold dark:text-white transition-all">
        {work.COMPANY}
      </h5>
      <h6 className="text-base font-semibold text-purple-700 dark:text-green-500 transition-all">
        {work.ROLE}
      </h6>
      <p className="text-base font-normal text-gray-600 dark:text-gray-400 transition-all">
        {work.DATE} | {work.PLACE}
      </p>
      <ul className="list-disc ml-4 text-base font-normal text-gray-600 dark:text-gray-400 transition-all">
        {work.LISTS.map((detailElement) => {
          return (
            <li key={work.LISTS.indexOf(detailElement)}>{detailElement}</li>
          );
        })}
      </ul>
    </div>
  );
}
