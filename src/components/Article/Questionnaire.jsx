import { useState } from "react";

import { Form } from "../../components/form/form";
import { SecondaryOutlineButton } from "../button/button";

export default function Questionnaire() {
  const [feedbackSubmittedYes, setFeedbackSubmittedYes] = useState(false);
  const [feedbackSubmittedNo, setFeedbackSubmittedNo] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);

  const handleYesButtonClick = () => {
    setFeedbackSubmittedYes(true);
  };

  const handleNoButtonClick = () => {
    setFeedbackSubmittedNo(true);
    setFeedbackSubmittedYes(false);
  };

  const handleFormSubmit = (e) => {
    // Perform the necessary actions with the feedback text, such as sending it to a server
    // You can access the feedback text using the feedbackText state variable
    setFormSubmit(true);
  };

  return (
    <div className="mt-16">
      {feedbackSubmittedYes ? (
        <h1 className="font-medium text-[1.25rem] text-black leading-[120%]">
          We're glad it was useful
        </h1>
      ) : (
        <>
          {!feedbackSubmittedNo && (
            <>
              <h1 className="font-medium text-[1.25rem] text-black leading-[120%]">
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
              <Form className="flex flex-col mt-5" onSubmit={handleFormSubmit}>
                <Form.TextArea
                  labelText="What was unclear?"
                  id="feedbackTextArea"
                  placeholder="Tell us"
                  required
                />

                <SecondaryOutlineButton text="Submit" type="submit" />
              </Form>
            </>
          )}
          {formSubmit && (
            <h1 className="font-medium text-[1.25rem] text-black leading-[120%]">
              Thanks for your feedback
            </h1>
          )}
        </>
      )}
    </div>
  );
}
