interface CustomcomponentProps {
  title: string;
  description: string;
  image: string;
  className?: React.ReactNode;
}

const Customcomponent = ({
  title,
  description,
  image,
}: CustomcomponentProps) => {
  return (
    <div className="w-full flex flex-col items-center text-center gap-3 mt-4">
      <img
        className="w-6 h-6 md:w-7 md:h-7 text-secondary"
        src={image}
        alt="icon"
      />
      <h3 className="font-sora text-secondary text-3xl md:text-4xl font-semibold">
        {title}
      </h3>
      <p className="w-1/2 font-roboto text-blue-100 text-xs md:text-sm leading-relaxed max-w-[18rem] md:max-w-[20rem]">
        {description}
      </p>
    </div>
  );
};

export default Customcomponent;
