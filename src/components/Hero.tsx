import { motion } from 'framer-motion';
import { Award, MapPin, Mail, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import type { PortfolioData } from '../data/content';

interface HeroProps {
  content: PortfolioData;
  lang: 'en' | 'ar';
}

export function Hero({ content, lang }: HeroProps) {
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-surface-soft via-white to-white dark:from-navy-950 dark:via-navy-900 dark:to-navy-950 pt-14 pb-20 md:pt-20 md:pb-28"
    >
      {/* Subtle decorative radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 start-1/2 -translate-x-1/2 w-[42rem] h-[24rem] rounded-full bg-royal-200/40 dark:bg-royal-700/15 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-50 dark:bg-navy-800/80 border border-royal-200 dark:border-royal-800 text-royal-700 dark:text-skyaccent text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>
                {content.personal.experienceYears} •{' '}
                {lang === 'ar'
                  ? 'أخصائية تدريب مدربين معتمدة (TOT)'
                  : 'Certified Master Trainer (TOT)'}
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-deep dark:text-white leading-tight">
                {content.personal.fullName}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-royal-600 dark:text-skyaccent">
                {content.personal.title}
              </p>
            </div>

            <p className="text-base sm:text-lg text-navy-text/80 dark:text-slate-300 leading-relaxed max-w-2xl">
              {content.personal.about}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-royal-600 hover:bg-royal-700 text-white font-semibold shadow-soft-blue hover:shadow-glow-royal transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>{content.navigation.contact}</span>
                <ArrowIcon className="w-4 h-4" />
              </a>
              <a
                href="#certifications"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-royal-200 dark:border-navy-800 bg-white dark:bg-navy-900 text-navy-deep dark:text-slate-100 font-semibold hover:border-royal-500 dark:hover:border-skyaccent transition-colors"
              >
                <Award className="w-4 h-4 text-royal-600 dark:text-skyaccent" />
                <span>{content.navigation.certifications}</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-navy-text/70 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-royal-600 dark:text-skyaccent" />
                {content.personal.location}
              </span>
              <span>•</span>
              <span>{content.experience.institution}</span>
            </div>
          </motion.div>

          {/* Crest & Highlight Card Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-navy-deep via-royal-900 to-royal-700 p-8 text-white shadow-soft-blue border border-royal-500/30">
              <div className="flex flex-col items-center text-center space-y-5">
                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                  <img
                    src="/sgt-crest.svg"
                    alt="SGT Official Crest"
                    className="w-24 h-24 sm:w-28 sm:h-28"
                  />
                </div>

                <div className="space-y-1">
                  <h2 className="text-xl font-bold">{content.personal.fullName}</h2>
                  <p className="text-sm text-royal-100">
                    {content.education[0]?.institution}
                  </p>
                </div>

                <div className="w-full grid grid-cols-2 gap-3 pt-2">
                  {content.stats.slice(0, 4).map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-white/10 border border-white/10 p-3.5 text-center"
                    >
                      <div className="text-xl sm:text-2xl font-extrabold text-skyaccent">
                        {stat.number}
                      </div>
                      <div className="text-xs font-semibold text-white mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
