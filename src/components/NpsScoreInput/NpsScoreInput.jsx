/*
const NpsScoreInput = ({ icon, alt, text }) => (
  <div className="modal__icon-text-wrapper">
    <img className="modal__icon" alt={alt} src={icon} />
    <p className="modal__icon-text">{text}</p>
  </div>
);
*/

const NpsScoreInput = ({ icon, alt, text, onClick, isSelected }) => (
  <div
    className={`modal__icon-text-wrapper ${
      isSelected ? "selected__button" : ""
    }`}
    onClick={onClick}
  >
    <img className="modal__icon" alt={alt} src={icon} />
    <p className="modal__icon-text">{text}</p>
  </div>
);

export default NpsScoreInput;
