const ProtectYouComponent = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-16">
      <h2 className="text-center font-sora text-4xl md:text-5xl font-semibold">
        Let Us Protect You
      </h2>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: points */}
        <div className="lg:col-span-2 space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="text-count font-sora text-2xl md:text-3xl">
                01
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold">We Analyze</h3>
            </div>
            <p className="text-blue-100 font-roboto text-sm md:text-base max-w-3xl">
              We score your open source dependencies, measuring community
              strength, maintainer expertise, and supply chain integrity.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="text-count font-sora text-2xl md:text-3xl">
                02
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold">We Alert</h3>
            </div>
            <p className="text-blue-100 font-roboto text-sm md:text-base max-w-3xl">
              We send actionable, real-time alerts—detecting hidden risks,
              mapping CVEs, and clarifying exploitability with VEX to eliminate
              false positives.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="text-count font-sora text-2xl md:text-3xl">
                03
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold">We Partner</h3>
            </div>
            <p className="text-blue-100 font-roboto text-sm md:text-base max-w-3xl">
              For your most critical dependencies, we provide direct support,
              collaborating with maintainers, hardening projects, and ensuring
              long-term security and sustainability.
            </p>
          </div>
        </div>

        {/* Right: risk card placeholder */}
        <aside className="border border-blue-900 rounded-xl p-6 bg-background/50">
          <h4 className="text-sm tracking-wide text-blue-200">RISK SCORE</h4>
          <div className="mt-6 h-24 w-full rounded-lg bg-blue-950/40 flex items-center justify-center text-blue-200 text-sm">
            {/* <img
                src={'/images/meter.png'}
                alt="Gauge"
                className="w-10 h-10"
              /> */}
          </div>

          <div className="mt-8 space-y-4">
            <h5 className="font-semibold text-blue-100 text-sm">
              Why This Score Matters
            </h5>
            <ul className="list-disc ml-5 text-blue-200 text-sm space-y-2">
              <li>Supply chain attacks increased 650% in 2022</li>
              <li>70% of vulnerabilities are in dependencies, not your code</li>
              <li>Medium risk dependencies need active monitoring</li>
            </ul>
          </div>

          <div className="mt-8 space-y-4">
            <h5 className="font-semibold text-blue-100 text-sm">
              What We Analyze
            </h5>
            <ul className="list-disc ml-5 text-blue-200 text-sm space-y-2">
              <li>Community Health</li>
              <li>Security Practices</li>
              <li>Supply Chain Integrity</li>
            </ul>
          </div>
        </aside>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-3xl md:text-5xl font-sora font-semibold">
          Don’t Wait For The Next Breach
        </h3>
        <p className="mt-4 max-w-3xl mx-auto text-blue-100 font-roboto text-sm md:text-base">
          We’re here to support your business. Whether you want to learn more
          about our services, explore collaboration opportunities, or need
          guidance, our team is ready to help you strengthen your open source
          security.
        </p>
      </div>
    </div>
  );
};

export default ProtectYouComponent;
