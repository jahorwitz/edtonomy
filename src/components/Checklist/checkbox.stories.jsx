import { Checkbox } from "./checkbox";

export default {
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const CustomRadio = Template.bind({});

CustomRadio.args = {
  label: "Change Text here",
  backgroundColor: "grey",
};
