import Checklist from "./checklist.jsx";

// Number of children/items is not a prop here so...
// Add argTypes to label children
export default {
  component: Checklist,
};

export const ChecklistWithDefaultCheckboxes = () => {
  return (
    <Checklist>
      <Checklist.Checkbox url="" article="" label="Setup your profile" />
      <Checklist.Checkbox
        url=""
        article=""
        label="Connect your Stripe account"
      />
      <Checklist.Checkbox
        url=""
        article=""
        label="Create parent and learner contacts"
      />
      <Checklist.Checkbox
        url=""
        article=""
        label="Create parent and learner contacts"
      />
      <Checklist.Checkbox
        url=""
        article=""
        label="Create your first teaching event"
      />
      <Checklist.Checkbox
        url=""
        article=""
        label="Add public events to your personal booking page"
      />
      <Checklist.Checkbox url="" article="" label="Embed your booking page" />
      <Checklist.Checkbox url="" article="" label="Share your contact form" />
      <Checklist.Checkbox
        url=""
        article=""
        label="Checkout our Knowledge Base"
      />
      <Checklist.Checkbox url="" article="" label="Join the Facebook Group" />
      <Checklist.Checkbox url="" article="" label="Subscribe to the blod" />
      <Checklist.Checkbox url="" article="" label="Refer a friend" />
    </Checklist>
  );
};
