
import { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  ArrowRight,
  User,
  LogOut,
} from "lucide-react";

const NAV_LINKS = [
  { href: "#courses", id: "courses", label: "Kurslar" },
  { href: "#results", id: "results", label: "Natijalar" },
  { href: "#mentors", id: "mentors", label: "Mentorlar" },
  { href: "#about", id: "about", label: "Biz haqimizda" },
  { href: "#Savolar", id: "Savolar", label: "Savollar" },
  { href: "#blog", id: "blog", label: "Blog" },
];

function Navbar({ onLogout }) {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      if (NAV_LINKS.some((l) => l.id === hashId)) {
        return hashId;
      }
    }
    return "";
  });

  const profileRef = useRef(null);
  const isClickScrolling = useRef(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setActiveSection(targetId);
    isClickScrolling.current = true;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    if (window.history.pushState) {
      window.history.pushState(null, "", `#${targetId}`);
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    scrollTimeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 900);

    setOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setActiveSection("");
    if (window.history.pushState) {
      window.history.pushState(null, "", window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;

      // Bottom of page check
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveSection(NAV_LINKS[NAV_LINKS.length - 1].id);
        return;
      }

      // Very top of page (Hero section)
      if (window.scrollY < 120) {
        setActiveSection("");
        return;
      }

      const offset = 140;
      let currentActive = "";

      for (const item of NAV_LINKS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom > offset) {
            currentActive = item.id;
            break;
          }
        }
      }

      if (currentActive) {
        setActiveSection(currentActive);
      }
    };

    const handleHashChange = () => {
      const hashId = window.location.hash.replace("#", "");
      if (NAV_LINKS.some((l) => l.id === hashId)) {
        setActiveSection(hashId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto flex h-[70px] max-w-[1200px] items-center justify-between rounded-[22px] border border-[#edf1ef] bg-white/95 px-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md">

        {/* LOGO */}
        <a
          href="#"
          onClick={handleLogoClick}
          className="flex shrink-0 items-center transition-opacity duration-300 hover:opacity-80"
        >
          <img
            src="/imgs/logo.png"
            alt="iTeach"
            className="h-9 w-auto lg:h-11"
          />
        </a>

        {/* DESKTOP NAV */}
        <ul className="hidden items-center gap-7 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`group relative py-2 text-[14px] transition-colors duration-300 ${
                    isActive
                      ? "font-semibold text-[#16a34a]"
                      : "font-medium text-[#59636b] hover:text-[#16a34a]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 h-[2.5px] -translate-x-1/2 rounded-full bg-[#16a34a] shadow-[0_0_8px_rgba(22,163,74,0.6)] transition-all duration-300 ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* DESKTOP RIGHT */}
        <div className="hidden shrink-0 items-center gap-5 lg:flex">

          <a
            href="tel:+998886657777"
            className="group flex items-center gap-2 text-[14px] font-semibold text-[#26323a] transition-colors duration-300 hover:text-[#16a34a]"
          >
            <Phone
              size={17}
              className="text-[#16a34a] transition-transform duration-300 group-hover:scale-110"
            />

            <span>+998 88 665 77 77</span>
          </a>

          <a
            href="#courses"
            onClick={(e) => handleLinkClick(e, "courses")}
            className="group flex items-center gap-3 rounded-full bg-[#16a34a] px-6 py-3 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(22,163,74,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#15803d] hover:shadow-[0_12px_28px_rgba(22,163,74,0.35)] active:translate-y-0"
          >
            Kursga yozilish

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          {/* PROFILE */}
          {onLogout && (
            <div ref={profileRef} className="relative">
              <button
                type="button"
                onClick={() =>
                  setProfileOpen((prev) => !prev)
                }
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111816] text-white transition-transform duration-300 hover:scale-105"
              >
                <User size={19} />
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-14 w-48 overflow-hidden rounded-xl border border-[#edf1ef] bg-white shadow-lg">

                  <button
                    type="button"
                    onClick={onLogout}
                    className="flex w-full items-center gap-2.5 px-4 py-3 text-left text-sm font-semibold text-red-500 transition-colors hover:bg-red-50"
                  >
                    <LogOut size={16} />
                    Chiqish
                  </button>

                </div>
              )}
            </div>
          )}

        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e3e8e6] text-[#26323a] transition-all duration-300 hover:border-[#16a34a] hover:text-[#16a34a] lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="mx-auto mt-2 max-w-[1200px] rounded-[20px] border border-[#edf1ef] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] lg:hidden">

          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`group relative rounded-xl px-4 py-3 text-base transition-all duration-300 ${
                    isActive
                      ? "bg-[#f0fdf4] font-semibold text-[#16a34a]"
                      : "font-medium text-[#59636b] hover:bg-[#f0fdf4] hover:text-[#16a34a]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-1 left-4 h-[2px] rounded-full bg-[#16a34a] transition-all duration-300 ${
                      isActive
                        ? "w-10 shadow-[0_0_8px_rgba(22,163,74,0.5)]"
                        : "w-0 group-hover:w-10"
                    }`}
                  />
                </a>
              );
            })}

            <div className="my-2 h-px bg-[#edf1ef]" />

            {/* PHONE */}
            <a
              href="tel:+998886657777"
              onClick={closeMenu}
              className="flex items-center gap-2 px-4 py-3 text-base font-semibold text-[#26323a] transition-colors hover:text-[#16a34a]"
            >
              <Phone
                size={18}
                className="text-[#16a34a]"
              />

              +998 88 665 77 77
            </a>

            {/* COURSE BUTTON */}
            <a
              href="#courses"
              onClick={(e) => handleLinkClick(e, "courses")}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#16a34a] py-3.5 text-base font-bold text-white shadow-[0_8px_20px_rgba(22,163,74,0.25)] transition-all duration-300 hover:bg-[#15803d] hover:shadow-[0_12px_28px_rgba(22,163,74,0.35)]"
            >
              Kursga yozilish

              <ArrowRight size={18} />
            </a>

            {/* LOGOUT */}
            {onLogout && (
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onLogout();
                }}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-red-200 py-3.5 text-base font-bold text-red-500 transition-all duration-300 hover:bg-red-50"
              >
                <LogOut size={18} />
                Chiqish
              </button>
            )}

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
