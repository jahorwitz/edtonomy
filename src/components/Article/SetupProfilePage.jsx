import image6 from "../../image/image6.png";
import Questionnaire from "./Questionnaire";

export default function SetupProfilePage({ questionnaire }) {
  return (
    <div className="profile__container">
      <h1 className="profile__title">How to Set Up Your Profile</h1>
      <p className="profile__paragraph profile__paragraph-1">
        Setting up a profile can be a great way to introduce yourself to the
        world and make connections with others who share your interests or
        goals. Whether you're creating a profile for a social media platform, a
        professional networking site, or a dating app, the process can be
        relatively straightforward.
      </p>
      <h2 className="profile__subheading profile__subheading-1">
        Steps to follow to set up a profile
      </h2>
      <p className="profile__paragraph profile__paragraph-2">
        Choose a platform: There are many different platforms out there for
        creating a profile, so choose one that fits your needs and interests.
        For example, if you're looking to network professionally, you might want
        to use LinkedIn. If you're looking to connect with friends and family,
        Facebook might be the right choice.
      </p>
      <img className="profile__image" src={image6} alt="logo" />
      <span className="profile__image-caption">Image caption</span>

      <ol className="profile__list">
        <li>
          Create an account: Once you've chosen a platform, create an account by
          providing your basic information such as your name, email address, and
          a password
        </li>
        <li>
          Add a profile photo: Choose a clear and recognizable photo that
          accurately represents you. A headshot or a photo of you doing
          something you enjoy are good options.
        </li>
        <li>
          Write a bio: Your bio should be a short summary of who you are and
          what you're all about. Consider including your interests, hobbies,
          professional background, and any other information that you think is
          important for others to know.
        </li>
        <li>
          Fill out your profile: Depending on the platform you're using, you may
          have the option to add additional information such as your education,
          work experience, skills, and contact information.{" "}
        </li>
        <li>
          Customize your profile: Make your profile stand out by customizing it
          with colors, fonts, and images that reflect your personality or brand.
        </li>
      </ol>

      <div className="profile__steps-contanier">
        <h2 className="profile__subheading profile__subheading-2">
          Final Steps
        </h2>
        <ol className="profile__steps">
          <li>Do this</li>
          <li>That</li>
          <li>And this</li>
        </ol>

        <span className="profile__bottom-line"></span>
      </div>

      <div className="questionnaire">
        <Questionnaire />
      </div>
    </div>
  );
}
