import { useEffect, useState } from 'react';
import { Printer, X } from 'lucide-react';
import { contentEn, contentAr } from './data/content';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutAndCareer } from './components/AboutStats';
import { Certifications } from './components/Certifications';
import { SkillsAndAchievements } from './components/SkillsAndAchievements';
import { ContactAndFooter } from './components/ContactAndFooter';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [dark, setDark] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const content = lang === 'ar' ? contentAr : contentEn;

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className={`min-h-screen ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      <Navbar
        content={content}
        lang={lang}
        onToggleLang={() => setLang((prev) => (prev === 'en' ? 'ar' : 'en'))}
        dark={dark}
        onToggleDark={() => setDark((prev) => !prev)}
        onDownloadCV={() => setCvModalOpen(true)}
      />

      <main>
        <Hero content={content} lang={lang} />
        <AboutAndCareer content={content} lang={lang} />
        <Certifications content={content} lang={lang} />
        <SkillsAndAchievements content={content} lang={lang} />
        <ContactAndFooter content={content} lang={lang} />
      </main>

      {/* Printable CV Summary Modal */}
      {cvModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={content.navigation.downloadCV}
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/70 backdrop-blur-sm p-4"
        >
          <div className="w-full max-w-2xl rounded-3xl bg-white dark:bg-navy-900 border border-royal-200 dark:border-navy-800 shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-royal-100 dark:border-navy-800">
              <div>
                <h2 className="text-xl font-bold text-navy-deep dark:text-white">
                  {content.personal.fullName}
                </h2>
                <p className="text-sm font-semibold text-royal-600 dark:text-skyaccent">
                  {content.personal.title}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCvModalOpen(false)}
                aria-label="Close CV preview"
                className="p-2 rounded-xl bg-surface-soft dark:bg-navy-800 text-navy-deep dark:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 space-y-4 text-sm text-navy-text/85 dark:text-slate-300">
              <p>{content.personal.about}</p>
              <div>
                <h3 className="font-bold text-navy-deep dark:text-white mb-1">
                  {content.navigation.experience}
                </h3>
                <p>
                  {content.experience.position} — {content.experience.institution} (
                  {content.experience.period})
                </p>
              </div>
              <div>
                <h3 className="font-bold text-navy-deep dark:text-white mb-1">
                  {content.navigation.education}
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {content.education.map((edu) => (
                    <li key={edu.degree}>
                      {edu.degree} — {edu.institution} ({edu.grade})
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-navy-deep dark:text-white mb-1">
                  {content.navigation.certifications}
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {content.certifications.map((cert) => (
                    <li key={cert.id}>
                      {cert.title} — {cert.institution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-royal-100 dark:border-navy-800 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setCvModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-royal-200 dark:border-navy-800 text-sm font-semibold text-navy-deep dark:text-slate-200"
              >
                {lang === 'ar' ? 'إغلاق' : 'Close'}
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-royal-600 hover:bg-royal-700 text-white text-sm font-semibold"
              >
                <Printer className="w-4 h-4" />
                <span>{lang === 'ar' ? 'طباعة / حفظ PDF' : 'Print / Save PDF'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
