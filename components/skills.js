export default function Skills(props) {
  const { skill } = props;

  return (
    <div className="my-2">
      <h5 className="text-lg font-bold">{Object.keys(skill)}</h5>
      {Object.values(skill).map((skillArrayElement) => {
        return skillArrayElement.map((skillObjectElement) => {
          return (
            <div key={skillArrayElement.indexOf(skillObjectElement)}>
              <h6 className="text-base font-semibold">
                {Object.keys(skillObjectElement)}
              </h6>
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
