import Checklist from "./checklist.jsx";

// Number of children is not a prop
// Add argTypes to label children
export default {
  component: Checklist,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
};

const Template = (args) => <Checklist {...args} />;

// Add interaction to add multiple 'children' or Default Checkboxes
export const Default = Template.bind({});
Default.args = {};
