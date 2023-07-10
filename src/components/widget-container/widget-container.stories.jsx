import { useState } from "react";
import { Article, BugReport, Chat, Welcome } from "../../views";
import { ModalWithVideo } from "../modal-with-video";
import { WidgetContainer } from "./widget-container";

export default {
  title: "WidgetContainer",
  component: WidgetContainer,
};

export const Support = () => {
  const [showModal, setShowModal] = useState();

  return (
    <>
      {showModal && (
        <ModalWithVideo
          src="https://www.youtube.com/embed/vpvQfCLWOn8"
          onClose={() => setShowModal(false)}
        />
      )}
      <WidgetContainer>
        <Welcome stepName="welcome" onShowVideo={() => setShowModal(true)} />
        <BugReport stepName="bug-report" />
        <Chat stepName="chat" />
        <Article stepName="article" />
      </WidgetContainer>
    </>
  );
};
