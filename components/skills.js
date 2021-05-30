export default function Skills(props) {
  const { skill } = props;

  return (
    <div className="my-2">
      <p className="text-lg font-bold">{Object.keys(skill)}</p>
      {Object.values(skill).map((skillArrayElement) => {
        return skillArrayElement.map((skillObjectElement) => {
          return (
            <div key={skillArrayElement.indexOf(skillObjectElement)}>
              <p className="text-base font-semibold">
                {Object.keys(skillObjectElement)}
              </p>
              <p className="text-base font-base text-gray-600">
                {Object.values(skillObjectElement)[0].join(" • ")}
              </p>
            </div>
          );
        });
      })}
    </div>
  );
}
