import {
  BookOpen,
  Stethoscope,
  Monitor,
  Languages,
  Users,
  Trophy,
} from 'lucide-react';
import type { PortfolioData } from '../data/content';

interface SkillsAndAchievementsProps {
  content: PortfolioData;
  lang: 'en' | 'ar';
}

export function SkillsAndAchievements({ content, lang }: SkillsAndAchievementsProps) {
  const skillCards = [
    {
      icon: BookOpen,
      title: content.skills.teaching.title,
      items: content.skills.teaching.items,
    },
    {
      icon: Stethoscope,
      title: content.skills.nursing.title,
      items: content.skills.nursing.items,
    },
    {
      icon: Monitor,
      title: content.skills.technical.title,
      items: content.skills.technical.items,
    },
    {
      icon: Users,
      title: content.skills.personal.title,
      items: content.skills.personal.items,
    },
  ];

  return (
    <>
      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 md:py-20 bg-white dark:bg-navy-950 border-t border-royal-100/60 dark:border-navy-800/60"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-royal-600 dark:text-skyaccent">
              {content.navigation.skills}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-deep dark:text-white mt-2">
              {lang === 'ar'
                ? 'الكفاءات التدريسية والسريرية والتقنية'
                : 'Pedagogical, Clinical & Technical Competencies'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-3xl p-6 bg-surface-soft dark:bg-navy-900 border border-royal-100 dark:border-navy-800 shadow-card-blue"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-royal-600 text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-deep dark:text-white">
                      {card.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-navy-text/85 dark:text-slate-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-royal-500 dark:bg-skyaccent shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            {/* Languages Card */}
            <div className="rounded-3xl p-6 bg-surface-soft dark:bg-navy-900 border border-royal-100 dark:border-navy-800 shadow-card-blue md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-navy-deep dark:bg-royal-600 text-white">
                  <Languages className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-navy-deep dark:text-white">
                  {content.skills.languages.title}
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {content.skills.languages.items.map((langItem) => (
                  <div
                    key={langItem.name}
                    className="p-4 rounded-2xl bg-white dark:bg-navy-950/70 border border-royal-100 dark:border-navy-800"
                  >
                    <div className="font-bold text-navy-deep dark:text-white">
                      {langItem.name}
                    </div>
                    <div className="text-sm text-royal-600 dark:text-skyaccent font-medium mt-1">
                      {langItem.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        className="py-16 md:py-20 bg-surface-soft dark:bg-navy-900/50 border-t border-royal-100/60 dark:border-navy-800/60"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2.5 rounded-xl bg-royal-600 text-white">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-royal-600 dark:text-skyaccent">
                {content.navigation.achievements}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-deep dark:text-white">
                {lang === 'ar'
                  ? 'محطات التميز والإنجاز المهني'
                  : 'Career Highlights & Impact'}
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.achievements.map((ach) => (
              <div
                key={ach.title}
                className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-navy-900 border border-royal-100 dark:border-navy-800 shadow-card-blue hover:shadow-soft-blue transition-shadow"
              >
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-royal-50 dark:bg-navy-800 text-royal-700 dark:text-skyaccent mb-4">
                  {ach.tag}
                </span>
                <h3 className="text-xl font-bold text-navy-deep dark:text-white">
                  {ach.title}
                </h3>
                <p className="text-sm sm:text-base text-navy-text/80 dark:text-slate-300 mt-3 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
