import chevron from "../images/chevron-left-black.svg";

export const Article = ({ goToNamedStep, title, children, onFormSubmit }) => (
  <>
    <div className="flex justify-between items-center my-[16px]">
      <div className="flex items-center gap-[16px]">
        <button onClick={() => goToNamedStep("getting-started")}>
          <img src={chevron} />
        </button>
      </div>
    </div>
    <div className="text-edt-black flex flex-col items-start max-h-[700px] overflow-scroll px-8">
      <h1 className="font-bold text-3xl leading-100">{title}</h1>

      {children}
    </div>
  </>
);
