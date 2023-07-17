import { useState } from "react";
import {
  Article,
  BugReport,
  Chat,
  GettingStarted,
  ProfileSetup,
  Welcome,
} from "../../views";
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
        <GettingStarted stepName="getting-started" />
        <Article stepName="profile-setup" title="How to Set Up Your Profile">
          <ProfileSetup />
        </Article>
        <Article stepName="article-name" title="Another Helpful Article" />
      </WidgetContainer>
    </>
  );
};
