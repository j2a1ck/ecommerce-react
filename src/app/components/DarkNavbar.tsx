import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const SocialLinks = [
  {
    href: "https://www.instagram.com",
    label: "instagram",
    icon: <FaInstagram />,
  },
  {
    href: "https://www.youtube.com",
    label: "youtube",
    icon: <FaYoutube />,
  },
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    icon: <FaFacebook />,
  },
  {
    href: "https://twitter.com",
    label: "X",
    icon: <FaTwitter />,
  },
];

const DarkNavbar = () => {
  return (
    <nav>
      <div className="bg-slate-900 text-white items-center md:flex lg:flex h-[46px] w-full text-sm font-semibold hidden ">
        <div className="flex gap-1 justify-start ml-5 mx-4 mt-1 items-center">
          <FiPhone />
          <h6>98234234</h6>
        </div>
        <div className="flex gap-1 items-center mx-3 mt-1 ">
          <TfiEmail />
          <h6>Jack.70aw@gmail.com</h6>
        </div>
        <div className="flex flex-grow justify-center items-center">
          <h6>Follow Us and get chance to win 80% off</h6>
        </div>
        <div className="flex justify-end items-center gap-3 mr-6 ">
          <h6>Follow Us : </h6>
          {SocialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default DarkNavbar;
