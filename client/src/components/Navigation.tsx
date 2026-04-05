import { useState } from "react";
import { useLanguage } from "@/_core/hooks/useLanguage";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  activePage?: "home" | "membership" | "whatsnew" | "contact";
}

export default function Navigation({ activePage = "home" }: NavigationProps) {
  const { language, t, localePath } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = activePage === "home";
  const homePrefix = isHome ? "" : localePath("/");

  const navLinks = [
    { href: `${homePrefix}#about`, label: t("nav.about"), active: false },
    { href: `${homePrefix}#solution`, label: t("nav.solution"), active: false },
    { href: `${homePrefix}#services`, label: t("nav.services"), active: false },
    { href: localePath("/membership"), label: t("nav.membership"), active: activePage === "membership" },
    { href: localePath("/whatsnew"), label: t("nav.news"), active: activePage === "whatsnew" },
    { href: localePath("/contact"), label: t("nav.contact"), active: activePage === "contact" },
    {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeN8mTf8hDxMpRcUCbmHnImCfVxCfCmMUK56fxtlrYHxawu2Q/viewform?usp=dialog",
      label: t("nav.register"),
      active: false,
      external: true,
    },
  ];

  const currentPagePath = activePage === "home"
    ? language === "ja" ? "/" : "/en"
    : language === "ja" ? `/${activePage === "whatsnew" ? "whatsnew" : activePage}` : `/en/${activePage === "whatsnew" ? "whatsnew" : activePage}`;
  const jaPath = activePage === "home" ? "/" : `/${activePage === "whatsnew" ? "whatsnew" : activePage}`;
  const enPath = activePage === "home" ? "/en" : `/en/${activePage === "whatsnew" ? "whatsnew" : activePage}`;

  const logoHref = isHome ? undefined : localePath("/");

  const logoImg = (
    <img
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663255440915/pZrMXUTAEjDsCOGE.jpg"
      alt="KAIB Logo"
      className="h-12 cursor-pointer"
      onClick={isHome ? () => window.scrollTo({ top: 0, behavior: "smooth" }) : undefined}
    />
  );

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          {logoHref ? <a href={logoHref}>{logoImg}</a> : logoImg}
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`text-sm transition ${
                link.active ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border">
            <a
              href={jaPath}
              className={`px-2 py-1 text-sm font-medium rounded transition ${
                language === "ja" ? "bg-primary text-white" : "text-foreground hover:bg-secondary/20"
              }`}
            >
              日本語
            </a>
            <a
              href={enPath}
              className={`px-2 py-1 text-sm font-medium rounded transition ${
                language === "en" ? "bg-primary text-white" : "text-foreground hover:bg-secondary/20"
              }`}
            >
              English
            </a>
          </div>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`text-base py-2 transition ${
                  link.active ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-border">
              <a
                href={jaPath}
                className={`px-3 py-2 text-sm font-medium rounded transition ${
                  language === "ja" ? "bg-primary text-white" : "text-foreground hover:bg-secondary/20"
                }`}
              >
                日本語
              </a>
              <a
                href={enPath}
                className={`px-3 py-2 text-sm font-medium rounded transition ${
                  language === "en" ? "bg-primary text-white" : "text-foreground hover:bg-secondary/20"
                }`}
              >
                English
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
