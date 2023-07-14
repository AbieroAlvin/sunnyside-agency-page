import egg from "../images/mobile/image-transform.jpg";
import cup from "../images/mobile/image-stand-out.jpg";

const MidSection = () => {
  return (
    <div>
      <div className="section-1 text-center md:text-left mb-8 md:grid md:grid-cols-2 md:mb-0 md:items-center">
        <div className="img ">
          <img src={egg} alt="/" />
        </div>
        <div>
          <div className="details px-8 py-10  flex flex-col gap-4 md:px-12">
            <h1 className="text-4xl font-Fraunces text-[var(--VD-blue)]">
              Transform your brand
            </h1>
            <p className="text-[var(--VD-grayish-blue)] leading-relaxed font-Barlow text-[18px]">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <div className="text-xl uppercase font-semibold font-Fraunces underline decoration-yellow-200 hover:decoration-[var(--Yellow)] decoration-4 hover:underline-offset-2 cursor-pointer mt-6">
              Learn More
            </div>
          </div>
        </div>
      </div>
      <div className="section-2 text-center md:text-left mb-8 md:grid md:grid-cols-2 md:mb-0 md:justify-center md:items-center">
        <div className="img">
          <img src={cup} alt="/" />
        </div>
        <div>
          <div className="details px-8 py-10 md:px-12 flex flex-col gap-4">
            <h1 className="text-4xl font-Fraunces text-[var(--VD-blue)]">
              Stand out to the right audience
            </h1>
            <p className="text-[var(--VD-grayish-blue)] leading-relaxed font-Barlow text-[18px]">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, will build and
              extend your brand in digital places.
            </p>

            <div className="text-xl uppercase font-semibold font-Fraunces underline decoration-red-300 hover:decoration-[var(--Soft-red)] decoration-4 hover:underline-offset-2 cursor-pointer mt-6">
              Learn More
            </div>
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 md:grid-rows-1">
        <div className="section-3 text-center ">
          <div className="details bg-[url('./images/mobile/image-graphic-design.jpg')] bg-cover px-8 bg-no-repeat bg-center flex flex-col gap-4 pt-[22.65rem] pb-8">
            <h1 className="text-4xl font-Fraunces text-[var(--graphic-text-cyan)]">
              Graphic Design
            </h1>
            <p className="text-[var(--graphic-text-cyan)] leading-relaxed font-Barlow text-[18px]">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients
              attention.
            </p>
          </div>
        </div>
        <div className="section-4 text-center">
          <div className="details bg-[url('./images/mobile/image-photography.jpg')] bg-cover px-8 bg-no-repeat bg-center flex flex-col gap-4 pt-[24rem] pb-10">
            <h1 className="text-4xl font-Fraunces text-[var(--photo-txt-blue)]">
              Photography
            </h1>
            <p className="text-[var(--photo-txt-blue)] leading-relaxed font-Barlow text-[18px]">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
