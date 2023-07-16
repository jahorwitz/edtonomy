import { Button, Checklist } from "../components";
import chatIcon from "../images/chat.svg";
import chevron from "../images/chevron-left-black.svg";
import emailIcon from "../images/email.svg";

export const GettingStarted = ({ goToNamedStep }) => (
  <>
    <div className="flex justify-between items-center my-[16px]">
      <div className="flex items-center gap-[16px]">
        <button onClick={() => goToNamedStep("welcome")}>
          <img src={chevron} />
        </button>
        <h1 className="text-xl">Getting started checklist</h1>
      </div>
    </div>
    <Checklist className="py-4">
      <Checklist.Checkbox
        onClick={() => goToNamedStep("article-name")}
        article=""
        label="Setup your profile"
      />
      <Checklist.Checkbox
        onClick={() => goToNamedStep("article-name")}
        article=""
        label="Connect your Stripe account"
      />
      <Checklist.Checkbox
        onClick={() => goToNamedStep("article-name")}
        article=""
        label="Create parent and learner contacts"
      />
      <Checklist.Checkbox
        onClick={() => goToNamedStep("article-name")}
        article=""
        label="Create parent and learner contacts"
      />
      <Checklist.Checkbox
        onClick={() => goToNamedStep("article-name")}
        article=""
        label="Create your first teaching event"
      />
      <Checklist.Checkbox
        onClick={() => goToNamedStep("article-name")}
        article=""
        label="Add public events to your personal booking page"
      />
      <Checklist.Checkbox
        onClick={() => goToNamedStep("article-name")}
        article=""
        label="Embed your booking page"
      />
      <Checklist.Checkbox
        onClick={() => goToNamedStep("article-name")}
        article=""
        label="Share your contact form"
      />
      <Checklist.Checkbox
        onClick={() => goToNamedStep("article-name")}
        article=""
        label="Checkout our Knowledge Base"
      />
      <Checklist.Checkbox
        onClick={() => goToNamedStep("article-name")}
        article=""
        label="Join the Facebook Group"
      />
      <Checklist.Checkbox
        onClick={() => goToNamedStep("article-name")}
        article=""
        label="Subscribe to the blod"
      />
      <Checklist.Checkbox
        onClick={() => goToNamedStep("article-name")}
        article=""
        label="Refer a friend"
      />
    </Checklist>
    <div className="grid grid-cols-2 gap-[12px] mb-8">
      <Button.WithIcon
        icon={chatIcon}
        onClick={() => goToNamedStep("chat")}
        text="Start a live chat"
      />
      <Button.WithIcon
        icon={emailIcon}
        text="Email support"
        href="mailto:your-email@edtonomy.com"
      />
    </div>
  </>
);
