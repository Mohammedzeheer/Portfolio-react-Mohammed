import { styles } from "../styles";
import { navLinks, socialLinks, contactInfo } from "../constants";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-primary/80 backdrop-blur">
      <div className={`${styles.paddingX} max-w-7xl mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-6`}>
        <div className="text-center md:text-left">
          <p className="text-white text-[18px] font-bold">
            Mohammed<span className="text-[#915EFF]">.</span>
          </p>
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-secondary text-[14px] hover:text-white transition-colors"
          >
            {contactInfo.email}
          </a>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className="text-secondary text-[14px] hover:text-white transition-colors"
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              className="social-icon !w-9 !h-9"
            >
              <img src={social.icon} alt="" className="w-1/2 h-1/2 object-contain" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5 py-5 text-center text-secondary text-[13px]">
        © {new Date().getFullYear()} Mohammed zaheer.
      </div>
    </footer>
  );
};

export default Footer;
