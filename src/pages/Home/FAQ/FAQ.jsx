import { FaQuestionCircle } from "react-icons/fa";

const FAQ = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="text-primary bg-transparent flex flex-col gap-12 justify-center items-center p-20">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        <FaQuestionCircle className="text-[200px]" />
      </div>
      <div>
        <div className="my-10 text-text">
          <div className="divide-y divide-gray--200 -my-9">
            <div className="py-9">
              <p className="text-xl font-semibold">
                How can I find volunteer opportunities near me?
              </p>
              <p className="mt-3 text-base">
                You can find volunteer opportunities near you by using our
                search feature. Simply enter your location and browse through
                the available opportunities in your area.
              </p>
            </div>
            <div className="py-9">
              <p className="text-xl font-semibold">
                How do I sign up to volunteer for a specific opportunity?
              </p>
              <p className="mt-3 text-base">
                To sign up for a volunteer opportunity, simply click on the
                "View Details" button on the opportunity card and follow the
                instructions provided to sign up.
              </p>
            </div>

            <div className="py-9">
              <p className="text-xl font-semibold">
                What types of volunteer opportunities are available?
              </p>
              <p className="mt-3 text-base">
                We offer a wide range of volunteer opportunities across various
                categories, including community service, environmental
                conservation, education, and more. You can explore these
                opportunities on our website.
              </p>
            </div>

            <div className="py-9">
              <p className="text-xl font-semibold">
                How can organizations post volunteer opportunities on your
                platform?
              </p>
              <p className="mt-3 text-base">
                Organizations can post volunteer opportunities on our platform
                by creating an account and submitting their opportunities
                through our online form. Our team will review the submissions
                and make them available for volunteers to view and sign up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
