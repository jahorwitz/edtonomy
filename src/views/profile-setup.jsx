import dashboard from "../images/dashboard.png";

export const ProfileSetup = () => (
  <>
    <p className="font-normal text-xl mt-10">
      Setting up a profile can be a great way to introduce yourself to the world
      and make connections with others who share your interests or goals.
      Whether you're creating a profile for a social media platform, a
      professional networking site, or a dating app, the process can be
      relatively straightforward.
    </p>
    <h2 className="font-semibold text-3xl mt-16">
      Steps to follow to set up a profile
    </h2>
    <p className="font-normal text-xl mt-5">
      Choose a platform: There are many different platforms out there for
      creating a profile, so choose one that fits your needs and interests. For
      example, if you're looking to network professionally, you might want to
      use LinkedIn. If you're looking to connect with friends and family,
      Facebook might be the right choice.
    </p>
    <img className="mt-5" src={dashboard} alt="logo" />
    <span className="font-normal text-base leading-100 mt-3">
      Image caption
    </span>

    <ol className="list-decimal font-normal text-xl flex flex-col gap-2.5 mt-10">
      <li>
        Create an account: Once you've chosen a platform, create an account by
        providing your basic information such as your name, email address, and a
        password
      </li>
      <li>
        Add a profile photo: Choose a clear and recognizable photo that
        accurately represents you. A headshot or a photo of you doing something
        you enjoy are good options.
      </li>
      <li>
        Write a bio: Your bio should be a short summary of who you are and what
        you're all about. Consider including your interests, hobbies,
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

    <div>
      <h2 className="font-semibold text-3xl mt-16">Final Steps</h2>
      <ol className="list-disc font-normal text-xl flex flex-col gap-2.5 mt-5">
        <li>Do this</li>
        <li>That</li>
        <li>And this</li>
      </ol>
    </div>
  </>
);
