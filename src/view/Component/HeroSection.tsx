import '../../index.css';

const HeroSection = () => {
  return (
    <section className="bg-background text-white mt-6">
      <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-16">
        <div className="text-center space-y-4 md:space-y-6">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-sora font-semibold tracking-tight">
            Do You Remember <span className="font-bold">Log4Shell</span>?
          </h1>
          <p className="max-w-3xl mx-auto text-sm md:text-base text-blue-100 leading-relaxed">
            In December 2021,{' '}
            <span className="font-bold">Log4Shell (CVE-2021-44228)</span>{' '}
            exposed millions of Java-based systems worldwide. A single logging
            library triggered a global cybersecurity crisis with{' '}
            <span className="font-bold">catastrophic consequences</span>.
          </p>
        </div>

        <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="space-y-3 text-center md:text-left">
            <img
              src={'/images/financial.png'}
              alt="Reputational Damage"
              className="w-8 h-7 mx-auto md:mx-0"
            />
            <h3 className="text-xl md:text-2xl lg:text-3xl text-secondary font-semibold">
              Reputational Damage
            </h3>
            <ul className="space-y-2 text-blue-100 font-roboto text-sm leading-relaxed">
              <li>
                <span className="font-bold">Damaged brand reputation.</span>
              </li>
              <li>
                <span className="font-bold">Consumer trust erosion.</span>
              </li>
              <li>
                <span className="font-bold">
                  Negative press and public scrutiny.
                </span>
              </li>
            </ul>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <img
              src={'/images/dollar.png'}
              alt="Financial Devastation"
              className="w-8 h-8 mx-auto md:mx-0"
            />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-secondary">
              Financial Devastation
            </h3>
            <ul className="space-y-2 text-blue-100 font-roboto text-sm leading-relaxed">
              <li>
                <span className="font-bold">$700M+</span> legal exposure
                established.
              </li>
              <li>
                <span className="font-bold">$90,000+</span> average direct cost
                per breach.
              </li>
              <li>
                <span className="font-bold">Massive overtime</span> for 24/7
                "war rooms".
              </li>
            </ul>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <img
              src={'/images/pause.png'}
              alt="Operational Paralysis"
              className="w-8 h-7 mx-auto md:mx-0"
            />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-secondary">
              Operational Paralysis
            </h3>
            <ul className="space-y-2 text-blue-100 font-roboto text-sm leading-relaxed">
              <li>
                <span className="font-bold">Up to 3,300 developer hours</span>{' '}
                lost.
              </li>
              <li>
                <span className="font-bold">All innovation halted.</span>
              </li>
              <li>
                <span className="font-bold">29% recurrence rate</span> forced
                costly rework cycles.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-16 text-center text-blue-100 text-sora text-sm md:text-base">
          Don't let your organization be the{' '}
          <span className="font-bold">next case study</span>.
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
