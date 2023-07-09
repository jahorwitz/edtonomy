const NpsScoreInput = ({ icon, alt, text, onClick, isSelected }) => (
  <div
    className={`flex w-70 h-54 pt-8px pr-18px pb-8px pl-17px flex-col justify-center items-center gap-1 flex-shrink-0 rounded-xl ${
      isSelected
        ? "selected__button border border-ed-t-red rounded-lg bg-transparent"
        : ""
    } hover:border hover:border-black hover:bg-opacity-10`}
    onClick={onClick}
    style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
  >
    <img className="w-5 h-5 flex-shrink-0" alt={alt} src={icon} />
    <p className="text-edt-black text-center text-[12px] font-medium font-inter leading-extra-tight">
      {text}
    </p>
  </div>
);

/*
NpsScoreInput.Awful = ({ onClick, isSelected, icon }) => (
  <NpsScoreInput
    icon={icon}
    alt="awful"
    text="Awful"
    onClick={onClick}
    isSelected={isSelected}
  />
);

NpsScoreInput.SoSo = ({ onClick, isSelected, icon }) => (
  <NpsScoreInput
    icon={icon}
    alt="so so"
    text="So-so"
    onClick={onClick}
    isSelected={isSelected}
  />
);

NpsScoreInput.Okay = ({ onClick, isSelected, icon }) => (
  <NpsScoreInput
    icon={icon}
    alt="okay"
    text="Okay"
    onClick={onClick}
    isSelected={isSelected}
  />
);

NpsScoreInput.Good = ({ onClick, isSelected, icon }) => (
  <NpsScoreInput
    icon={icon}
    alt="good"
    text="Good"
    onClick={onClick}
    isSelected={isSelected}
  />
);

NpsScoreInput.Perfect = ({ onClick, isSelected, icon }) => (
  <NpsScoreInput
    icon={icon}
    alt="great"
    text="Perfect"
    onClick={onClick}
    isSelected={isSelected}
  />
);

*/

/*
              <NpsScoreInput.Awful
                onClick={() => updateSelectedRating(1)}
                isSelected={selectedRating === 1}
                icon={Awful}
              />
              <NpsScoreInput.SoSo
                onClick={() => updateSelectedRating(2)}
                isSelected={selectedRating === 2}
                icon={So_so}
              />
              <NpsScoreInput.Okay
                onClick={() => updateSelectedRating(3)}
                isSelected={selectedRating === 3}
                icon={Okay}
              />
              <NpsScoreInput.Good
                onClick={() => updateSelectedRating(4)}
                isSelected={selectedRating === 4}
                icon={Good}
              />
              <NpsScoreInput.Perfect
                onClick={() => updateSelectedRating(5)}
                isSelected={selectedRating === 5}
                icon={Perfect}
              />
*/

export default NpsScoreInput;
