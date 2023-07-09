import playIcon from "../../images/play.svg";
import { Button } from "../button";
import { ModalWithVideo } from "./modal-with-video";

export default {
  component: ModalWithVideo,
  title: "ModalWithVideo",
};
export const Primary = {
  render: () => (
    <ModalWithVideo
      OpenButton={Button.WithLink}
      openButtonProps={{
        icon: playIcon,
        to: "",
        textBold: "Get started with EdTonomy",
        text: "Watch our video tutorial",
      }}
    />
  ),
};
