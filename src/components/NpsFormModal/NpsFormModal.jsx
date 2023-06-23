import { useState } from "react";

import "./NpsFormModal.css";

import Awful from "../../image/Emotion-Awful.svg";
import Good from "../../image/Emotion-Good.svg";
import Great from "../../image/Emotion-Great.svg";
import Okay from "../../image/Emotion-Okay.svg";
import So_so from "../../image/Emotion-So-so.svg";

export default function NpsFormModal() {
  const [feedbackSubmittedYes, setFeedbackSubmittedYes] = useState(false);
  const [feedbackSubmittedNo, setFeedbackSubmittedNo] = useState(false);

  const [feedbackText, setFeedbackText] = useState("");

  const [formSubmit, setFormSubmit] = useState(false);

  const [isFeedbackValid, setIsFeedbackValid] = useState(false);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleYesButtonClick = (e) => {
    e.preventDefault();

    setFeedbackSubmittedYes(true);
    setFeedbackSubmittedNo(false);

    setIsFeedbackValid(true);
  };

  const handleNoButtonClick = () => {
    setFeedbackSubmittedNo(true);
    setFeedbackSubmittedYes(false);

    setIsFeedbackValid(false);
  };

  const handleFeedbackInputChange = (e) => {
    const inputText = e.target.value;
    setFeedbackText(inputText);
    setIsFeedbackValid(inputText.trim().length > 0);

    console.log(isFeedbackValid);
  };

  /*
  const handleFormSubmit = (e) => {
    e.preventDefault();

    setFormSubmit(true);
  };
  */

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setIsFormSubmitted(true);

    if ((feedbackSubmittedYes || feedbackSubmittedNo) && isFeedbackValid) {
      setIsFormSubmitted(true);
    }
  };

  return (
    <div className="modal__form-shadow">
      <form className="modal__form" onSubmit={handleFormSubmit}>
        <button className="modal__exit-button"></button>
        {isFormSubmitted ? (
          <div className="modal__form-container">
            <h1 className="modal__form-title">Thanks for your feedback!</h1>
          </div>
        ) : (
          <div className="modal__form-container">
            <h1 className="modal__form-title modal__form-title-1">
              Hey, do you enjoy using EdTonomy?
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
                className={`modal__form-button ${
                  feedbackSubmittedYes ? "selected__button" : ""
                }`}
                onClick={handleYesButtonClick}
              >
                Yes
              </button>
              <button
                className={`modal__form-button ${
                  feedbackSubmittedNo ? "selected__button" : ""
                }`}
                onClick={handleNoButtonClick}
              >
                No
              </button>
            </div>
            {feedbackSubmittedYes && (
              <>
                <p className="modal__referral-text">
                  Read more about our
                  <span className="modal__referral-program">
                    referral program
                  </span>
                </p>
              </>
            )}
            {feedbackSubmittedNo && (
              <>
                <h1 className="modal__form-title">
                  What stops you from recommending EdTonomy to a friend?
                </h1>

                <textarea
                  className={`modal__form-input ${
                    isFeedbackValid ? "" : "invalid"
                  }`}
                  type="text"
                  required
                  value={feedbackText}
                  onChange={handleFeedbackInputChange}
                  placeholder="Tell us"
                />
              </>
            )}
            <button
              className={`modal__form-submit ${
                (feedbackSubmittedYes || feedbackSubmittedNo) && isFeedbackValid
                  ? "enabled__submit"
                  : ""
              }`}
              type="submit"
            >
              Send feedback
            </button>
          </div>
        )}
        ;
      </form>
    </div>
  );
}
