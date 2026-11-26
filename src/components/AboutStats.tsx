import { CheckCircle2, Briefcase, GraduationCap } from 'lucide-react';
import type { PortfolioData } from '../data/content';

interface AboutAndCareerProps {
  content: PortfolioData;
  lang: 'en' | 'ar';
}

export function AboutAndCareer({ content, lang }: AboutAndCareerProps) {
  return (
    <>
      {/* About & Stats Section */}
      <section
        id="about"
        className="py-16 md:py-20 bg-white dark:bg-navy-950 border-t border-royal-100/60 dark:border-navy-800/60"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-royal-600 dark:text-skyaccent">
              {content.navigation.about}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-deep dark:text-white mt-2">
              {lang === 'ar'
                ? 'رسالة تعليمية وبصمة مهنية ممتدة'
                : 'Academic Profile & Educational Mission'}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-navy-text/80 dark:text-slate-300 leading-relaxed">
              {content.personal.about}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {content.stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-6 bg-surface-soft dark:bg-navy-900 border border-royal-100 dark:border-navy-800 shadow-card-blue hover:shadow-soft-blue transition-shadow"
              >
                <div className="text-3xl font-extrabold text-royal-600 dark:text-skyaccent">
                  {item.number}
                </div>
                <div className="text-base font-bold text-navy-deep dark:text-white mt-2">
                  {item.label}
                </div>
                <div className="text-sm text-navy-text/70 dark:text-slate-400 mt-1">
                  {item.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-16 md:py-20 bg-surface-soft dark:bg-navy-900/50 border-t border-royal-100/60 dark:border-navy-800/60"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-royal-600 text-white">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-royal-600 dark:text-skyaccent">
                {content.navigation.experience}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-deep dark:text-white">
                {content.experience.position}
              </h2>
            </div>
          </div>

          <div className="rounded-3xl bg-white dark:bg-navy-900 p-6 sm:p-8 border border-royal-100 dark:border-navy-800 shadow-card-blue">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-royal-100 dark:border-navy-800">
              <div>
                <h3 className="text-xl font-bold text-navy-deep dark:text-white">
                  {content.experience.institution}
                </h3>
                <p className="text-sm text-royal-600 dark:text-skyaccent font-semibold mt-1">
                  {content.experience.position}
                </p>
              </div>
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-royal-50 dark:bg-navy-800 text-royal-700 dark:text-skyaccent border border-royal-200 dark:border-royal-800">
                {content.experience.period}
              </span>
            </div>

            <ul className="mt-6 grid md:grid-cols-2 gap-4">
              {content.experience.responsibilities.map((resp, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-surface-soft dark:bg-navy-950/60 border border-royal-100/70 dark:border-navy-800"
                >
                  <CheckCircle2 className="w-5 h-5 text-royal-600 dark:text-skyaccent shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-navy-text/90 dark:text-slate-200 leading-relaxed">
                    {resp}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-16 md:py-20 bg-white dark:bg-navy-950 border-t border-royal-100/60 dark:border-navy-800/60"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-navy-deep dark:bg-royal-600 text-white">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-royal-600 dark:text-skyaccent">
                {content.navigation.education}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-deep dark:text-white">
                {lang === 'ar' ? 'التأهيل الأكاديمي والسريري' : 'Academic & Clinical Foundation'}
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.education.map((edu) => (
              <div
                key={edu.degree}
                className="rounded-3xl p-6 sm:p-8 bg-surface-soft dark:bg-navy-900 border border-royal-100 dark:border-navy-800 shadow-card-blue flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-royal-100 dark:bg-navy-800 text-royal-700 dark:text-skyaccent">
                      {edu.period}
                    </span>
                    {edu.grade && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-navy-deep dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-royal-600 dark:text-skyaccent mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm sm:text-base text-navy-text/80 dark:text-slate-300 mt-4 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
