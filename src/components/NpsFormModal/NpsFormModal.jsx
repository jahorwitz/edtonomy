import "./NpsFormModal.css";

import Awful from "../../image/Emotion-Awful.svg";
import Good from "../../image/Emotion-Good.svg";
import Great from "../../image/Emotion-Great.svg";
import Okay from "../../image/Emotion-Okay.svg";
import So_so from "../../image/Emotion-So-so.svg";

export default function NpsFormModal() {
  const handleYesButtonClick = () => {};

  const handleNoButtonClick = () => {};

  return (
    <div className="modal__form-shadow">
      <form className="modal__form">
        <button className="modal__exit-button"></button>
        <div className="modal__form-container">
          <h1 className="modal__form-title modal__form-title-1">
            Hey do you enjoy using EdTonomy?
          </h1>
          <div className="modal__form-rating-icons">
            <div className="modal__icon-text-wrapper">
              <img className="modal__icon" alt="awful" src={Awful} />
              <p className="modal__icon-text">Awful</p>
            </div>
            <div className="modal__icon-text-wrapper">
              <img className="modal__icon" alt="so so" src={So_so} />
              <p className="modal__icon-text">So-so</p>
            </div>
            <div className="modal__icon-text-wrapper">
              <img className="modal__icon" alt="okay" src={Okay} />
              <p className="modal__icon-text">Okay</p>
            </div>
            <div className="modal__icon-text-wrapper">
              <img className="modal__icon" alt="good" src={Good} />
              <p className="modal__icon-text">Good</p>
            </div>
            <div className="modal__icon-text-wrapper">
              <img className="modal__icon" alt="great" src={Great} />
              <p className="modal__icon-text">Perfect</p>
            </div>
          </div>
          <h1 className="modal__form-title">
            Would you recommend EdTonomy to a friend?
          </h1>
          <div className="modal__form-buttons">
            <button
              className="modal__form-button"
              onClick={handleYesButtonClick}
            >
              Yes
            </button>
            <button
              className="modal__form-button"
              onClick={handleNoButtonClick}
            >
              No
            </button>
          </div>
          <button className="modal__form-submit" type="submit">
            Send feedback
          </button>
        </div>
      </form>
    </div>
  );
}
