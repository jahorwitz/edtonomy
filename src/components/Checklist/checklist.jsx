import { useState } from "react";
import { Checkbox } from "./checkbox";

export default function Checklist() {
  const items = [
    {
      name: "Setup your profile",
      href: "",
      article: "",
      isChecked: false,
    },
    {
      name: "Connect your Stripe account",
      href: "",
      article: "",
      isChecked: false,
    },
    {
      name: "Create parent and learner contacts",
      href: "",
      article: "",
      isChecked: false,
    },
  ];
  const [todos, setTodos] = useState(items);
  // use setTodos on schema???

  return (
    <div className="w-full px-4 py-16">
      <div className="flex flex-col mx-auto w-full max-w-md h-90 overflow-auto">
        {todos.map((item, index) => (
          <ul key={index}>
            <Checkbox label={item.name} url={item.url} article={item.article} />
          </ul>
        ))}
      </div>
    </div>
  );
}
