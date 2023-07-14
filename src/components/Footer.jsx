import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterestP
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-8 footer flex flex-col items-center text-center">
      <div className="logo text-4xl font-bold font-Barlow text-[var(--graphic-text-cyan)] flex justify-center mb-6">
        sunnyside
      </div>
      <div
        className="font-Barlow text-[var(--footer-cyan)] flex  gap-12
      justify-center mb-20"
      >
        <p className="hover:text-[var(--graphic-text-cyan)] hover:scale-110 cursor-pointer">
          About
        </p>
        <p className="hover:text-[var(--graphic-text-cyan)] hover:scale-110 cursor-pointer">
          {" "}
          Services
        </p>
        <p className="hover:text-[var(--graphic-text-cyan)] hover:scale-110 cursor-pointer">
          Projects
        </p>
      </div>
      <div className="icons flex gap-6">
        <FaFacebook
          size={20}
          className="text-[var(--footer-cyan)] hover:text-[var(--graphic-text-cyan)] hover:scale-110 cursor-pointer"
        />
        <FaInstagram
          size={20}
          className="text-[var(--footer-cyan)] hover:text-[var(--graphic-text-cyan)] hover:scale-110 cursor-pointer"
        />
        <FaTwitter
          size={20}
          className="text-[var(--footer-cyan)] hover:text-[var(--graphic-text-cyan)] hover:scale-110 cursor-pointer"
        />
        <FaPinterestP
          size={20}
          className="text-[var(--footer-cyan)] hover:text-[var(--graphic-text-cyan)] hover:scale-110 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;
