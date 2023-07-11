import Checklist from "./checklist";

// Defined argTypes property
export default {
  component: Checklist.Checkbox,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};

const Template = (args) => <Checklist.Checkbox {...args} />;

export const CustomRadio = Template.bind({});

// Set argTypes property
CustomRadio.args = {
  label: "Change Text here",
  backgroundColor: "",
  color: "",
};
