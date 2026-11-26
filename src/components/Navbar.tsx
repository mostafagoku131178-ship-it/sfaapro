import { useState } from 'react';
import { Moon, Sun, Globe, Menu, X, Download } from 'lucide-react';
import type { PortfolioData } from '../data/content';

interface NavbarProps {
  content: PortfolioData;
  lang: 'en' | 'ar';
  onToggleLang: () => void;
  dark: boolean;
  onToggleDark: () => void;
  onDownloadCV: () => void;
}

export function Navbar({
  content,
  lang,
  onToggleLang,
  dark,
  onToggleDark,
  onDownloadCV,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: content.navigation.home },
    { href: '#about', label: content.navigation.about },
    { href: '#experience', label: content.navigation.experience },
    { href: '#education', label: content.navigation.education },
    { href: '#certifications', label: content.navigation.certifications },
    { href: '#skills', label: content.navigation.skills },
    { href: '#achievements', label: content.navigation.achievements },
    { href: '#contact', label: content.navigation.contact },
  ];

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-royal-100/80 dark:border-navy-800/80 glass-panel transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-3">
          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-3 shrink-0 group focus:outline-none"
          >
            <img
              src="/sgt-crest.svg"
              alt="SGT Crest"
              className="w-10 h-10 md:w-11 md:h-11 drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-bold text-sm md:text-base text-navy-deep dark:text-white leading-tight">
                {lang === 'ar' ? 'أ. صفاء جمعة طه' : 'Safaa Gomaa Taha'}
              </span>
              <span className="text-[11px] md:text-xs text-royal-600 dark:text-skyaccent font-medium">
                {lang === 'ar' ? 'معلمة تمريض • TOT' : 'Nursing Educator • TOT'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-navy-text/80 hover:text-royal-600 hover:bg-royal-50 dark:text-slate-200 dark:hover:text-skyaccent dark:hover:bg-navy-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleLang}
              aria-label={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-royal-200 dark:border-navy-800 bg-white dark:bg-navy-900 text-navy-deep dark:text-slate-100 hover:border-royal-500 dark:hover:border-skyaccent transition-colors"
            >
              <Globe className="w-4 h-4 text-royal-600 dark:text-skyaccent" />
              <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
            </button>

            <button
              type="button"
              onClick={onToggleDark}
              aria-label={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2.5 rounded-xl border border-royal-200 dark:border-navy-800 bg-white dark:bg-navy-900 text-navy-deep dark:text-amber-300 hover:border-royal-500 dark:hover:border-skyaccent transition-colors"
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={onDownloadCV}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-royal-600 hover:bg-royal-700 text-white shadow-soft-blue transition-all"
            >
              <Download className="w-4 h-4" />
              <span>{content.navigation.downloadCV}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              className="xl:hidden p-2.5 rounded-xl border border-royal-200 dark:border-navy-800 bg-white dark:bg-navy-900 text-navy-deep dark:text-slate-100"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="xl:hidden py-4 border-t border-royal-100 dark:border-navy-800 space-y-2">
            <nav aria-label="Mobile Navigation" className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2.5 rounded-xl text-sm font-medium text-navy-text dark:text-slate-200 hover:bg-royal-50 dark:hover:bg-navy-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onDownloadCV();
              }}
              className="w-full sm:hidden inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-royal-600 hover:bg-royal-700 text-white shadow-soft-blue"
            >
              <Download className="w-4 h-4" />
              <span>{content.navigation.downloadCV}</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
