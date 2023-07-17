import cx from "classnames";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import closeButton from "../../images/close-button.svg";
import Awful from "../../images/Emotion=Awful.svg";
import Good from "../../images/Emotion=Good.svg";
import Great from "../../images/Emotion=Great.svg";
import Okay from "../../images/Emotion=Okay.svg";
import Soso from "../../images/Emotion=So-so.svg";
import { Form } from "../form";

export const NpsModal = ({ className, onClose, ...rest }) => {
  const { register, handleSubmit, setValue, watch } = useForm();

  const recommendToAFriend = watch("recommendation");

  function closePopup() {
    onClose();
  }

  function closeByEsc(e) {
    if (e.key === "Escape") {
      onClose();
    }
  }

  function handleOverlayClick(e) {
    if (e.target.classList.contains("modal-opened")) {
      onClose();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", closeByEsc);
    window.addEventListener("click", handleOverlayClick);
    return () => {
      window.removeEventListener("keydown", closeByEsc);
      window.removeEventListener("click", handleOverlayClick);
    };
  }, []);

  return (
    <>
      <div
        title="nps-modal"
        onClick={handleOverlayClick}
        onKeyDown={closeByEsc}
        className={cx(
          "modal-opened absolute top-0 w-screen h-screen flex items-center justify-center bg-gray-950/[.5] z-20",
          className
        )}
        {...rest}
      >
        <div className="relative">
          <button
            className="absolute top-[-20px] right-[-18.5px]"
            onClick={closePopup}
          >
            <img
              src={closeButton}
              className="w-[13.5px] h-[13.5px]"
              alt="close-button"
            ></img>
          </button>
          <div className="bg-white p-8 rounded-xl max-w-[420px]">
            <Form
              onSubmit={handleSubmit((values) => {
                alert(JSON.stringify(values));
              })}
            >
              <Form.RadioButtonGroup
                id="nps-score"
                labelText="Hey, do you enjoy using EdTonomy?"
                className="flex gap-2 my-3"
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
                    Icon: Soso,
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
              <Form.RadioButtonGroup
                id="recommendation"
                labelText="Would you recommend EdTonomy to a friend?"
                className="grid grid-cols-2 gap-2 my-3"
                setValue={setValue}
                watch={watch}
                options={[
                  {
                    value: "Yes",
                    text: "Yes",
                    className: "w-full",
                  },
                  {
                    value: "No",
                    text: "No",
                    className: "w-full",
                  },
                ]}
              />
              {recommendToAFriend === "Yes" ? (
                <p className="text-center text-lg mt-5 mb-8">
                  Read more about our{" "}
                  <a
                    className="text-edt-red underline"
                    href="/referral-link"
                    target="_blank"
                  >
                    referral program
                  </a>
                </p>
              ) : recommendToAFriend === "No" ? (
                <Form.TextArea
                  id="additional-comments"
                  labelText="What stops you from recommending EdTonomy to a friend?"
                  placeholder="Tell us"
                  register={register}
                />
              ) : null}

              <Form.Submit>Send Report</Form.Submit>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
