import { Checklist } from "./checklist.jsx";

// Number of children/items is not a prop here so...
// Add argTypes to label children
export default {
  component: Checklist,
};

export const ChecklistWithDefaultCheckboxes = () => {
  return (
    <Checklist>
      <Checklist.Checkbox label="Setup your profile" />
      <Checklist.Checkbox label="Connect your Stripe account" />
      <Checklist.Checkbox label="Create parent and learner contacts" />
      <Checklist.Checkbox label="Create parent and learner contacts" />
      <Checklist.Checkbox label="Create your first teaching event" />
      <Checklist.Checkbox label="Add public events to your personal booking page" />
      <Checklist.Checkbox label="Embed your booking page" />
      <Checklist.Checkbox label="Share your contact form" />
      <Checklist.Checkbox label="Checkout our Knowledge Base" />
      <Checklist.Checkbox label="Join the Facebook Group" />
      <Checklist.Checkbox label="Subscribe to the blod" />
      <Checklist.Checkbox label="Refer a friend" />
    </Checklist>
  );
};
