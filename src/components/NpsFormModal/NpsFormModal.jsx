import { useState } from "react";

import "./NpsFormModal.css";

import Awful from "../../image/Emotion-Awful.svg";
import Good from "../../image/Emotion-Good.svg";
import Perfect from "../../image/Emotion-Great.svg";
import Okay from "../../image/Emotion-Okay.svg";
import So_so from "../../image/Emotion-So-so.svg";

import { Button, SecondarySelectedButton } from "../button/button";

import NpsScoreInput from "../NpsScoreInput/NpsScoreInput";

export default function NpsFormModal() {
  const [feedbackSubmittedYes, setFeedbackSubmittedYes] = useState(false);
  const [feedbackSubmittedNo, setFeedbackSubmittedNo] = useState(false);
  const [npsButtonClicked, setNpsButtonClicked] = useState(false);

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
    setFeedbackText("");
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
    setNpsButtonClicked(true);
  };

  return (
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
            <h1 className="text-black text-[20px] font-inter font-medium leading-120 pt-8">
              Thanks for your feedback!
            </h1>
          </div>
        ) : (
          <div className="pl-6">
            <h1 className="text-black text-[20px] font-inter font-medium leading-120 pt-8">
              Hey, do you enjoy using EdTonomy?
            </h1>
            <div className="w-372 h-54 flex-shrink-0 flex flex-row gap-x-2 pt-4">
              <Button required type="button">
                <NpsScoreInput
                  icon={Awful}
                  alt="awful"
                  text="Awful"
                  onClick={() => updateSelectedRating(1)}
                  isSelected={selectedRating === 1}
                />
              </Button>
              <Button required type="button">
                <NpsScoreInput
                  icon={So_so}
                  alt="so so"
                  text="So-so"
                  onClick={() => updateSelectedRating(2)}
                  isSelected={selectedRating === 2}
                />
              </Button>
              <Button required type="button">
                <NpsScoreInput
                  icon={Okay}
                  alt="okay"
                  text="Okay"
                  onClick={() => updateSelectedRating(3)}
                  isSelected={selectedRating === 3}
                />
              </Button>
              <Button required type="button">
                <NpsScoreInput
                  icon={Good}
                  alt="good"
                  text="Good"
                  onClick={() => updateSelectedRating(4)}
                  isSelected={selectedRating === 4}
                />
              </Button>
              <Button required type="button">
                <NpsScoreInput
                  icon={Perfect}
                  alt="great"
                  text="Perfect"
                  onClick={() => updateSelectedRating(5)}
                  isSelected={selectedRating === 5}
                />
              </Button>
            </div>

            <h1 className="text-black text-[20px] font-inter font-medium leading-120 pt-8">
              Would you recommend EdTonomy to a friend?
            </h1>

            <div className="flex flex-row gap-x-5 pt-4">
              <SecondarySelectedButton
                onClick={handleYesButtonClick}
                selected={feedbackSubmittedYes}
                text="Yes"
              />
              <SecondarySelectedButton
                onClick={handleNoButtonClick}
                selected={feedbackSubmittedNo}
                text="No"
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
  );
}
