import { useState } from 'react';
import { Award, BadgeCheck } from 'lucide-react';
import type { PortfolioData } from '../data/content';

interface CertificationsProps {
  content: PortfolioData;
  lang: 'en' | 'ar';
}

type FilterCategory = 'all' | 'tot' | 'international' | 'leadership' | 'tech' | 'lang';

export function Certifications({ content, lang }: CertificationsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filters: Array<{ key: FilterCategory; label: string }> =
    lang === 'ar'
      ? [
          { key: 'all', label: 'الكل' },
          { key: 'tot', label: 'التدريب والـ TOT' },
          { key: 'international', label: 'اعتماد دولي' },
          { key: 'leadership', label: 'القيادة والتطوير' },
          { key: 'tech', label: 'تقنية' },
          { key: 'lang', label: 'اللغات' },
        ]
      : [
          { key: 'all', label: 'All' },
          { key: 'tot', label: 'TOT & Teaching' },
          { key: 'international', label: 'International' },
          { key: 'leadership', label: 'Leadership' },
          { key: 'tech', label: 'Technical' },
          { key: 'lang', label: 'Language' },
        ];

  const filtered =
    activeFilter === 'all'
      ? content.certifications
      : content.certifications.filter((c) => c.category === activeFilter);

  return (
    <section
      id="certifications"
      className="py-16 md:py-20 bg-surface-soft dark:bg-navy-900/50 border-t border-royal-100/60 dark:border-navy-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-royal-600 text-white">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-royal-600 dark:text-skyaccent">
                {content.navigation.certifications}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-deep dark:text-white">
                {lang === 'ar'
                  ? 'الشهادات المعتمدة والدورات التخصصية'
                  : 'Accredited Certifications & Training'}
              </h2>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Certification categories">
            {filters.map((f) => {
              const isActive = activeFilter === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(f.key)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-royal-600 text-white shadow-soft-blue'
                      : 'bg-white dark:bg-navy-900 text-navy-text dark:text-slate-300 border border-royal-200 dark:border-navy-800 hover:border-royal-500'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert) => (
            <article
              key={cert.id}
              className="rounded-3xl p-6 bg-white dark:bg-navy-900 border border-royal-100 dark:border-navy-800 shadow-card-blue hover:shadow-soft-blue transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-royal-50 dark:bg-navy-800 text-royal-600 dark:text-skyaccent">
                    <BadgeCheck className="w-5 h-5" />
                  </div>
                  {cert.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-royal-100 dark:bg-royal-900/60 text-royal-700 dark:text-skyaccent">
                      {cert.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-navy-deep dark:text-white leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm text-navy-text/75 dark:text-slate-300 mt-2 leading-relaxed">
                  {cert.institution}
                </p>
              </div>

              {cert.grade && (
                <div className="mt-5 pt-4 border-t border-royal-100 dark:border-navy-800 flex items-center justify-between text-xs font-bold">
                  <span className="text-navy-text/60 dark:text-slate-400">
                    {lang === 'ar' ? 'التقدير' : 'Grade'}
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400">{cert.grade}</span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
