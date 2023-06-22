import { useState } from "react";

export default function Questionnaire() {
  const [feedbackSubmittedYes, setFeedbackSubmittedYes] = useState(false);
  const [feedbackSubmittedNo, setFeedbackSubmittedNo] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);

  const [feedbackText, setFeedbackText] = useState("");

  const handleYesButtonClick = () => {
    setFeedbackSubmittedYes(true);
  };

  const handleNoButtonClick = () => {
    setFeedbackSubmittedNo(true);
    setFeedbackSubmittedYes(false);
    setFeedbackText("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform the necessary actions with the feedback text, such as sending it to a server
    // You can access the feedback text using the feedbackText state variable
    setFormSubmit(true);
  };

  return (
    <div className="questionnaire__container">
      {feedbackSubmittedYes ? (
        <h1 className="questionnaire__title">We're glad it was useful</h1>
      ) : (
        <>
          {!feedbackSubmittedNo && (
            <>
              <h1 className="questionnaire__title">
                Was this article helpful?
              </h1>
              <div className="questionnaire__buttons">
                <button
                  className="questionnaire__button"
                  onClick={handleYesButtonClick}
                >
                  Yes
                </button>
                <button
                  className="questionnaire__button"
                  onClick={handleNoButtonClick}
                >
                  No
                </button>
              </div>
            </>
          )}
          {feedbackSubmittedNo && !formSubmit && (
            <>
              <h1 className="questionnaire__title">What was unclear?</h1>
              <form
                className="questionnare__feedback-form"
                onSubmit={handleFormSubmit}
              >
                <input
                  className="feedback__form-input"
                  type="text"
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Tell us"
                />
                <button className="questionnaire__submit" type="submit">
                  Submit
                </button>
              </form>
            </>
          )}
          {formSubmit && (
            <h1 className="questionnaire__title">Thanks for your feedback</h1>
          )}
        </>
      )}
    </div>
  );
}
