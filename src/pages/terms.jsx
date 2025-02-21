const TermsOfService = () => {
  return (
    <>
      <div className="bg-gray-50 pt-56 pb-16">
        <div className="max-w-7xl mx-auto px-3 md:px-8">
          <h1 className="text-3xl md:text-5xl font-medium mb-3">
            Terms of Service
          </h1>
          <p className="text-gray-700 font-normal text-sm md:text-base leading-7">
            By using our website and enrolling in our IT training programs, you
            agree to <br className="hidden md:block" /> these Terms of Service.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto md:w-[65%] w-[99%] px-3 md:px-8 py-16">
        <div className="space-y-5 text-sm md:text-base">
          <p className="text-gray-500 leading-8">
            You are expected to use our website and services responsibly and
            lawfully. Any unauthorized use, including attempts to disrupt our
            platform or misuse our content, may result in termination of access.
          </p>
          <p className="text-gray-500 leading-8">
            All content provided on our website and within our training programs
            is the intellectual property of Digital Fortress Institute. You may
            not reproduce, distribute, or modify any content without our express
            written permission.
          </p>
          <p className="text-gray-500 leading-8">
            While we strive to provide accurate and up-to-date information, we
            are not liable for any damages resulting from your use of our
            website or services. We may update these terms periodically.
            Continued use of our website and services constitutes your
            acceptance of any changes. If you have questions or concerns, please
            contact us at{" "}
            <a
              href="mailto:akoowonjo@digitalfortressltd.com"
              className="text-red-500 font-medium underline"
            >
              akoowonjo@digitalfortressltd.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
