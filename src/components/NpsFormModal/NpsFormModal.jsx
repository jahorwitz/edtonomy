import { useState } from "react";

import "./NpsFormModal.css";

import Awful from "../../image/Emotion-Awful.svg";
import Good from "../../image/Emotion-Good.svg";
import Great from "../../image/Emotion-Great.svg";
import Okay from "../../image/Emotion-Okay.svg";
import So_so from "../../image/Emotion-So-so.svg";

import { Button, RadioButton } from "../button/button";

import { useForm } from "react-hook-form";
import { Form } from "../../components/form/form";

export default function NpsFormModal() {
  const [feedbackSubmittedYes, setFeedbackSubmittedYes] =
    useState(false); /*If yes is clicked */
  const [feedbackSubmittedNo, setFeedbackSubmittedNo] =
    useState(false); /*If no is clicked */
  const [npsButtonClicked, setNpsButtonClicked] =
    useState(false); /*If one of the nps button is clicked */

  const [feedbackText, setFeedbackText] =
    useState(""); /*Sets values in textarea to none */

  const [formSubmit, setFormSubmit] = useState(false);

  const [isFeedbackValid, setIsFeedbackValid] =
    useState(false); /*If there is input inside the textarea */

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(true);

  /*Checks if the yes button is clicked before submitting */
  const handleYesButtonClick = (e) => {
    e.preventDefault();

    setFeedbackSubmittedYes(true);
    setFeedbackSubmittedNo(false);

    setIsFeedbackValid(true);
    setFeedbackText(
      ""
    ); /*If user presses no, then yes, it will reset/remove any input the textarea */
  };

  /*Checks if the no button is clicked before submitting */

  const handleNoButtonClick = () => {
    setFeedbackSubmittedNo(true);
    setFeedbackSubmittedYes(false);

    setIsFeedbackValid(false);
  };

  /*Checks if there is any input inside the textArea before submitting */
  const handleFeedbackInputChange = (e) => {
    const inputText = e.target.value;
    setFeedbackText(inputText);
    setIsFeedbackValid(inputText.trim().length > 0);
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

  const { register, handleSubmit, setValue, watch } = useForm();

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  /*
  if (!isModalOpen) {
    return null; // Return null if the modal should be closed
  }
  */

  const [selectedRating, setSelectedRating] = useState(0);

  return (
    isModalOpen && (
      <div className="z-0 bg-black bg-opacity-50 w-full h-882 flex-shrink-0 relative">
        <form
          className="w-420 h-auto flex-shrink-0 rounded-12 bg-white relative top-243 bottom-243 left-510 z-1"
          onSubmit={handleFormSubmit}
        >
          <button
            className="absolute bg-exitbutton left-440  w-24 h-24 flex-shrink-0 ]"
            onClick={handleModalClose}
          ></button>
          {isFormSubmitted ? (
            <div className="pl-6">
              <h1 className="text-black text-[20px] font-inter font-medium leading-120 pl-60 pr-84 pt-80 pb-60">
                Thanks for your feedback!
              </h1>
            </div>
          ) : (
            <div className="pl-6">
              <h1 className="text-black text-[20px] font-inter font-medium leading-120 pt-8">
                Hey, do you enjoy using EdTonomy?
              </h1>
              <div className="w-372 h-54 flex-shrink-0 flex flex-row gap-x-2 pt-4">
                <Form
                  onSubmit={handleSubmit((values) => {
                    alert(JSON.stringify(values));
                  })}
                  onClick={() => setNpsButtonClicked(true)}
                >
                  <Form.RadioButtonGroup
                    id="nps-score"
                    className="flex gap-2 my-3 "
                    setValue={setValue}
                    watch={watch}
                    options={[
                      {
                        value: 1,
                        Icon: Awful,
                        text: "Awful",
                      },
                      {
                        value: 2,
                        Icon: So_so,
                        text: "So-so",
                      },
                      {
                        value: 3,
                        Icon: Okay,
                        text: "Okay",
                      },
                      {
                        value: 4,
                        Icon: Good,
                        text: "Good",
                      },
                      {
                        value: 5,
                        Icon: Great,
                        text: "Great",
                      },
                    ]}
                  />
                </Form>
              </div>

              <h1 className="text-black text-[20px] font-inter font-medium leading-120 pt-8 mt-8">
                Would you recommend EdTonomy to a friend?
              </h1>

              <div className="flex flex-row gap-x-5 pt-4">
                <RadioButton
                  onClick={handleYesButtonClick}
                  selected={feedbackSubmittedYes}
                  text="Yes"
                  className="w-44"
                />
                <RadioButton
                  onClick={handleNoButtonClick}
                  selected={feedbackSubmittedNo}
                  text="No"
                  className="w-44"
                />
              </div>

              {feedbackSubmittedYes && (
                <>
                  <p className="text-black text-center text-[18px] font-inter leading-120 flex items-center justify-center flex-wrap flex-shrink-0 mt-5 w-372">
                    Read more about our
                    <span className="text-red-700 underline ml-1">
                      referral program
                    </span>
                  </p>
                </>
              )}
              {feedbackSubmittedNo && (
                <>
                  <h1 className="text-black text-[20px] font-inter font-medium leading-120 pt-8">
                    What stops you from recommending EdTonomy to a friend?
                  </h1>

                  <textarea
                    className={`w-372 h-105 rounded-lg border border-black-40 bg-white mt-4 pt-2.5 pl-2.5 ${
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
              <Button
                onClick={handleFormSubmit}
                className={`w-372 h-54 flex-shrink-0 rounded-lg bg-edt-red  mt-8 text-white text-center text-[20px] font-medium font-inter leading-120 ${
                  (feedbackSubmittedYes || feedbackSubmittedNo) &&
                  isFeedbackValid &&
                  npsButtonClicked
                    ? "opacity-100"
                    : "opacity-30"
                }`}
                type="submit"
                disabled={
                  !(
                    (feedbackSubmittedYes || feedbackSubmittedNo) &&
                    isFeedbackValid &&
                    npsButtonClicked
                  )
                }
              >
                Send feedback
              </Button>
            </div>
          )}
          ;
        </form>
      </div>
    )
  );
}
