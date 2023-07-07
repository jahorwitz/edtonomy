export default function Sidebar() {
  return (
    <div className="border-r border-black border-opacity-40 w-352 h-2060">
      <div className="font-inter font-normal text-base leading-120 text-black pt-8 pl-8">
        <div>
          <h1 className="font-semibold text-lg">Getting started checklist</h1>
          <h2 className="pt-2">8 easy steps to get you on board</h2>
        </div>
        <nav className="pt-8">
          <ul className="flex flex-col gap-6 w-268 h-468">
            <li>
              <a href="#section-1">Setup your profile</a>
            </li>
            <li>
              <a href="#section-2">Connect your Stripe account</a>
            </li>
            <li>
              <a href="#section-3">Create parent and learner contacts</a>
            </li>
            <li>
              <a href="#section-4">Create your first teaching event</a>
            </li>
            <li>
              <a href="#section-5">
                Add public event to your personal booking page
              </a>
            </li>
            <li>
              <a href="#section-6">Embed your booking page</a>
            </li>
            <li>
              <a href="#section-7">Share your contact form</a>
            </li>
            <li>
              <a href="#section-8">Checkout our Knowledge Base</a>
            </li>
            <li>
              <a href="#section-9">Join the Facebook Group</a>
            </li>
            <li>
              <a href="#section-10">Subscribe to the blog</a>
            </li>
            <li>
              <a href="#section-11">Refer a friend</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
