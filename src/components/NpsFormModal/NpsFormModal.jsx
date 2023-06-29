import { useState } from "react";

import "./NpsFormModal.css";

import Awful from "../../image/Emotion-Awful.svg";
import Good from "../../image/Emotion-Good.svg";
import Great from "../../image/Emotion-Great.svg";
import Okay from "../../image/Emotion-Okay.svg";
import So_so from "../../image/Emotion-So-so.svg";

import NpsScoreInput from "../NpsScoreInput/NpsScoreInput";

export default function NpsFormModal() {
  const [feedbackSubmittedYes, setFeedbackSubmittedYes] = useState(false);
  const [feedbackSubmittedNo, setFeedbackSubmittedNo] = useState(false);

  const [feedbackText, setFeedbackText] = useState("");

  const [formSubmit, setFormSubmit] = useState(false);

  const [isFeedbackValid, setIsFeedbackValid] = useState(false);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(true);

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

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) {
    return null; // Return null if the modal should be closed
  }

  const [selectedRating, setSelectedRating] = useState(0);

  const updateSelectedRating = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div className="modal__form-shadow">
      <form className="modal__form" onSubmit={handleFormSubmit}>
        <button
          className="modal__exit-button"
          onClick={handleModalClose}
        ></button>
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
              <NpsScoreInput
                icon={Awful}
                alt="awful"
                text="Awful"
                onClick={() => updateSelectedRating(1)}
                isSelected={selectedRating === 1}
              />
              <NpsScoreInput
                icon={So_so}
                alt="so so"
                text="So-so"
                onClick={() => updateSelectedRating(2)}
                isSelected={selectedRating === 2}
              />
              <NpsScoreInput
                icon={Okay}
                alt="okay"
                text="Okay"
                onClick={() => updateSelectedRating(3)}
                isSelected={selectedRating === 3}
              />
              <NpsScoreInput
                icon={Good}
                alt="good"
                text="Good"
                onClick={() => updateSelectedRating(4)}
                isSelected={selectedRating === 4}
              />
              <NpsScoreInput
                icon={Great}
                alt="great"
                text="Perfect"
                onClick={() => updateSelectedRating(5)}
                isSelected={selectedRating === 5}
              />
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
