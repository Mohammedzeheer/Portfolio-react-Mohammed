import { useEffect, useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { melogo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // nothing is highlighted while the hero is on screen
      if (window.scrollY < window.innerHeight / 2) setActive("");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // highlight the nav link of the section currently on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.dataset.navId);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id)?.closest("section");
      if (section) {
        section.dataset.navId = id;
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  // lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [toggle]);

  return (
    <>
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-0 z-30 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-primary/80 backdrop-blur-lg border-b border-white/5 shadow-lg shadow-black/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="#"
          className="flex items-center gap-3"
          onClick={(e) => {
            e.preventDefault();
            setActive("");
            setToggle(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={melogo}
            alt="Mohammed"
            className="w-11 h-11 object-cover rounded-full ring-2 ring-[#915EFF]/60"
          />
          <p className="text-white text-[18px] font-bold flex items-center">
            Mohammed
            <span className="md:block hidden text-secondary font-medium">
              &nbsp;| Full Stack Developer
            </span>
          </p>
        </a>

        <ul className="list-none hidden lg:flex flex-row items-center gap-8">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className={`relative text-[16px] font-medium transition-colors hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#915EFF] after:transition-all ${
                  active === nav.id
                    ? "text-white after:w-full"
                    : "text-secondary after:w-0 hover:after:w-full"
                }`}
              >
                {nav.title}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-primary !px-5 !py-2 text-[15px]">
              Hire Me
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={toggle ? "Close menu" : "Open menu"}
          aria-expanded={toggle}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setToggle(!toggle)}
        >
          <img
            src={toggle ? close : menu}
            alt=""
            className="w-[26px] h-[26px] object-contain"
          />
        </button>
      </div>
    </nav>

      {/* mobile menu: kept outside <nav> because its backdrop-filter would trap this fixed overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-20 pt-[72px] bg-primary transition-all duration-300 ${
          toggle ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setToggle(false)}
      >
        <ul className="list-none flex flex-col items-center gap-2 pt-10 px-6">
          {navLinks.map((nav) => (
            <li key={nav.id} className="w-full max-w-sm">
              <a
                href={`#${nav.id}`}
                className={`block w-full text-center py-4 rounded-xl text-[18px] font-medium transition-colors ${
                  active === nav.id
                    ? "text-white bg-[#915EFF]/20"
                    : "text-secondary hover:text-white hover:bg-white/5"
                }`}
              >
                {nav.title}
              </a>
            </li>
          ))}
          <li className="w-full max-w-sm mt-4">
            <a href="#contact" className="btn-primary w-full">
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
