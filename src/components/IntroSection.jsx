import arrow from "../images/icon-arrow-down.svg";

const IntroSection = () => {
  return (
    <div className="text-5xl md:text-6xl uppercase text-white  text-center px-8">
      <div className="flex flex-col gap-8">
        <h1 className="pt-[3rem] tracking-wide leading-[4rem] font-bold">
          We Are Creatives
        </h1>
        <div className="icon-arrow grid place-content-center p-10">
          <img
            src={arrow}
            className="h-[120px] translate-y-[-2rem] mb-20"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
