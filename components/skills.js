export default function Skills(props) {
  const { skill } = props;

  return (
    <div className="my-2">
      <h5 className="text-lg font-bold dark:text-white transition-all">
        {Object.keys(skill)}
      </h5>
      {Object.values(skill).map((skillArrayElement) => {
        return skillArrayElement.map((skillObjectElement) => {
          return (
            <div key={skillArrayElement.indexOf(skillObjectElement)}>
              <h6 className="text-base font-semibold text-purple-700 dark:text-green-500 transition-all">
                {Object.keys(skillObjectElement)}
              </h6>
              <p className="text-base font-normal text-gray-600 dark:text-gray-300 transition-all">
                {Object.values(skillObjectElement)[0].join(" • ")}
              </p>
            </div>
          );
        });
      })}
    </div>
  );
}
