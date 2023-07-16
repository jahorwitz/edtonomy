import { ModalWithVideo } from "./modal-with-video";

export default {
  component: ModalWithVideo,
  title: "ModalWithVideo",
};
export const Primary = {
  render: () => (
    <ModalWithVideo src="https://www.youtube.com/embed/vpvQfCLWOn8" />
  ),
};
