import { useState } from "react";
import StepWizard from "react-step-wizard";

export const Wizard = ({ children, onStepChange }) => {
  const [state, updateState] = useState({});

  const setInstance = (SW) =>
    updateState({
      SW,
    });

  return (
    <StepWizard instance={setInstance} onStepChange={onStepChange}>
      {children}
    </StepWizard>
  );
};
