export default function Education(props) {
  const { education } = props;

  return (
    <div className="my-2">
      <p className="text-lg font-bold">{education.ACADEMY}</p>
      <p className="text-base font-semibold">{education.PROGRAM}</p>
      <p className="text-base font-base text-gray-600">{education.STATUS}</p>
    </div>
  );
}
