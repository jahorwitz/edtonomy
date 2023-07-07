import StepWizard from "react-step-wizard";
import { ReportBugView } from "./report-bug-view";

export const WidgetRouter = () => {
  return (
    <StepWizard>
      <WidgetContainer stepName={"main"} />
      <Article stepName={"article"} />
      <ChatContainer stepName={"chat"} />
      <ReportBugView stepName={"bug"} />
    </StepWizard>
  );
};
