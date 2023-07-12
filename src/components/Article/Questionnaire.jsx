import { useState } from "react";

import { SecondaryOutlineButton } from "../button/button";

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
    <div className="mt-16">
      {feedbackSubmittedYes ? (
        <h1 className="text-black text-2xl font-inter font-semibold leading-130%">
          We're glad it was useful
        </h1>
      ) : (
        <>
          {!feedbackSubmittedNo && (
            <>
              <h1 className="text-black text-2xl font-inter font-semibold leading-130%">
                Was this article helpful?
              </h1>
              <div className="flex flex-row gap-5 mt-5">
                <SecondaryOutlineButton
                  onClick={handleYesButtonClick}
                  text="Yes"
                />
                <SecondaryOutlineButton
                  onClick={handleNoButtonClick}
                  text="No"
                />
              </div>
            </>
          )}
          {feedbackSubmittedNo && !formSubmit && (
            <>
              <h1 className="text-black text-2xl font-inter font-semibold leading-130%">
                What was unclear?
              </h1>
              <form className="flex flex-col mt-5" onSubmit={handleFormSubmit}>
                <input
                  className="w-363 h-105 rounded-md border border-black-40 bg-white mb-5"
                  type="text"
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Tell us"
                  required
                />

                <SecondaryOutlineButton text="Submit" type="submit" />
              </form>
            </>
          )}
          {formSubmit && (
            <h1 className="text-black text-2xl font-inter font-semibold leading-130%">
              Thanks for your feedback
            </h1>
          )}
        </>
      )}
    </div>
  );
}
