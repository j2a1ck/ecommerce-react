import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="bg-slate-100">
      <div className="flex gap-[10px] m-2">
        <a href="https://www.facebook.com" aria-label="Facebook">
          <FaFacebook size={17} className="fill-sky-700" />
        </a>
        <a href="https://www.instagram.com" aria-label="Instagram">
          <FaInstagram size={17} className="fill-sky-700 " />
        </a>
        <a href="https://www.x.com" aria-label="X">
          <FaTwitter size={17} className="fill-sky-700" />
        </a>
      </div>
    </div>
  );
};

const NewsLetterForm = () => {
  return (
    <div className="flex flex-col mt-10 lg:mt-0 justify-center">
      <div className="mb-3 font-bold text-base">Get In Touch</div>
      <form className="flex justify-start mt-4 lg:mt-0 mb-12 lg:mb-1">
        <label htmlFor="email" className="sr-only">
          Your Email
        </label>
        <input
          placeholder="Your Email"
          id="email"
          className="placeholder-gray-400 text-center w-32 h-12 bg-gray-200 rounded-sm"
          required
        ></input>
        <button
          type="submit"
          aria-label="Subscribe"
          className="w-20 bg-sky-500 text-white rounded-sm h-12 text-xs font-medium "
        >
          Subscribe
        </button>
      </form>
      <h4 className="text-gray-400 hidden lg:flex font-light text-sm mt-1">
        what a good day :L
      </h4>
    </div>
  );
};

interface FooterLinkSectionProps {
  title: string;
  links: string[];
}

const FooterLinkSection = ({ title, links }: FooterLinkSectionProps) => {
  return (
    <div className="flex-col flex">
      <nav className="flex flex-col justify-center lg:max-w-full mt-10 lg:mx-14 bg-white ">
        <h2 className="mb-5 font-bold text-base">{title}</h2>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-gray-400 font-medium text-start text-sm m-1"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
const Footer = () => {
  const companyLinks: string[] = [
    "About Us",
    "Careers",
    "We are hiring",
    "Blog",
  ];
  const legalLinks: string[] = [
    "Privacy Policy",
    "Terms of Service",
    "Disclaimer",
    "Blog",
  ];
  const featureLinks: string[] = [
    "Business Marketing",
    "User Analytics",
    "Live Chat",
    "Unlimited Support",
  ];
  const resourceLinks: string[] = [
    "iOS & Android",
    "Watch a Demo",
    "Customers",
    "API",
  ];
  return (
    <footer className="flex flex-col mt-10">
      <div className="bg-slate-100">
        <div className="h-[12px] max-w-full flex justify-between items-center m-[40px]">
          <div className="font-extrabold text-2xl font-mono">Bandage</div>
          <SocialLinks />
        </div>
      </div>

      <div>
        <div className="flex flex-col lg:flex-row  justify-center text-start ml-10 lg:ml-0 lg:space-x-28  lg:h-[242px] max-w-full">
          <div className="flex flex-col lg:flex-row justify-center mt-10 lg:mt-2 bg-white">
            <FooterLinkSection title="Company info" links={companyLinks} />
            <FooterLinkSection title="Legal" links={legalLinks} />
            <FooterLinkSection title="Feature" links={featureLinks} />
            <FooterLinkSection title="Resource" links={resourceLinks} />
            <NewsLetterForm />
          </div>
        </div>
      </div>

      <div>
        <div className="h-[74px] flex-col justify-center bg-gray-100 flex">
          <h2 className="text-start ml-10 text-gray-400">
            Made With Love By Finland All Right Reserved
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
