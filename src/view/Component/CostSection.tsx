import Customcomponent from './Customcomponent';

const CostSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <h1 className="w-full md:w-2/3 text-3xl md:text-6xl text-center font-sora font-semibold tracking-tight">
        What’s The Cost Of Using Open Source Blindly?
      </h1>
      <p className="w-full md:w-3/5 text-center text-blue-100 font-roboto text-sm md:text-base mt-4">
        Open source is powerful — but it also opens the door to supply chain
        attacks.Too often, essential libraries are maintained by just a handful
        of volunteers without the resources to keep them secure.
      </p>
      <div className="mt-6 flex flex-col md:flex-row gap-6 items-center">
        <Customcomponent
          title="90%"
          description="of companies are using open source projects."
          image={'/images/companies.png'}
        />
        <Customcomponent
          title="76%"
          description="of code in codebases is open source"
          image={'/images/terminal.png'}
        />
        <Customcomponent
          title="60%"
          description="of maintainers are not paid for their work"
          image={'/images/users.png'}
        />
      </div>
    </div>
  );
};

export default CostSection;
