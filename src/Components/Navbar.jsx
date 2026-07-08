import { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  Mail,
  FileText,
} from "lucide-react";

const items = [
  { name: "Home", icon: Home, href: "#home" },
  { name: "About", icon: User, href: "#about" },
  { name: "Projects", icon: FolderGit2, href: "#projects" },
  { name: "Experience", icon: Briefcase, href: "#experience" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

export default function Navbar() {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const onScroll = () => setSmall(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Status Badge */}

      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <nav
          className={`
          transition-all duration-300
          rounded-full
          border border-white/10
          bg-slate-900/40
          backdrop-blur-2xl
          shadow-2xl
          ${small ? "px-6 py-3" : "px-8 py-4"}
          `}
        >
          <ul className="flex items-center gap-2">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="
                    group
                    relative
                    flex
                    items-center
                    gap-2
                    rounded-full
                    px-4
                    py-2
                    text-slate-300
                    transition
                    hover:bg-white/10
                    hover:text-white
                  "
                  >
                    <Icon size={18} />

                    <span className="hidden md:block text-sm">{item.name}</span>

                    <span
                      className="
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      rounded-full
                      bg-gradient-to-r
                      from-blue-400
                      to-cyan-400
                      transition-all
                      duration-300
                      group-hover:w-8
                    "
                    />
                  </a>
                </li>
              );
            })}

            <a
              href="/resume.pdf"
              className="
              ml-3
              flex
              items-center
              gap-2
              rounded-full
              bg-gradient-to-r
              from-blue-600
              via-cyan-500
              to-blue-600
              px-5
              py-2
              text-white
              transition
              hover:scale-105
            "
            >
              <FileText size={17} />
              Resume
            </a>
          </ul>
        </nav>

        
          </div>
          <div className="fixed top-9 right-8 z-[60]">
          
        </div>
    </>
  );
}
