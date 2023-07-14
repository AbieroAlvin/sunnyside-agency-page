import emily from "../images/image-emily.jpg";
import thomas from "../images/image-thomas.jpg";
import jennie from "../images/image-jennie.jpg";

const Testimonials = () => {
  return (
    <div className="testimonials text-center p-8">
      <h1 className="text-2xl uppercase text-[var(--D-grayish-blue)] font-Fraunces mb-12">
        Client Testimonials
      </h1>
      <div className="tests flex flex-col gap-8 md:flex-row md:gap-4">
        <div className="test-emily flex flex-col gap-5 items-center mb-6 px-6">
          <img
            src={emily}
            className="h-[80px] w-[80px] rounded-full "
            alt="/"
          />
          <p className="text-[18px] font-Barlow text-[--VD-grayish-blue]">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div>
            <h3 className="text-xl font-Fraunces font-bold text-[var(--VD-blue)]">
              Emily R.
            </h3>
            <p className="font-Barlow text-[--VD-grayish-blue]">
              Marketing Director
            </p>
          </div>
        </div>
        <div className="test-thomas flex flex-col gap-5 items-center mb-6 px-6">
          <img
            src={thomas}
            className="h-[80px] w-[80px] rounded-full "
            alt="/"
          />
          <p className="text-[18px] font-Barlow text-[--VD-grayish-blue]">
            Sunnysides enthusiasm coupled with their keen interest in our brands
            success made it a satisfying and enjoyable experience.
          </p>
          <div>
            <h3 className="text-xl font-Fraunces font-bold text-[var(--VD-blue)]">
              Thomas S.
            </h3>
            <p className="font-Barlow text-[--VD-grayish-blue]">
              Chief Operating Officer
            </p>
          </div>
        </div>
        <div className="test-jennie flex flex-col gap-5 items-center mb-6 px-6">
          <img
            src={jennie}
            className="h-[80px] w-[80px] rounded-full "
            alt="/"
          />
          <p className="text-[18px] font-Barlow text-[--VD-grayish-blue]">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div>
            <h3 className="text-xl font-Fraunces font-bold text-[var(--VD-blue)]">
              Jennie F.
            </h3>
            <p className="font-Barlow text-[--VD-grayish-blue]">
              Business Owner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
