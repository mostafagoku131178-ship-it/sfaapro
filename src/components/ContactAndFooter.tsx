import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowUp } from 'lucide-react';
import type { PortfolioData } from '../data/content';

interface ContactAndFooterProps {
  content: PortfolioData;
  lang: 'en' | 'ar';
}

export function ContactAndFooter({ content, lang }: ContactAndFooterProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 350);
  };

  return (
    <>
      <section
        id="contact"
        className="py-16 md:py-20 bg-white dark:bg-navy-950 border-t border-royal-100/60 dark:border-navy-800/60"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-royal-600 dark:text-skyaccent">
              {content.navigation.contact}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-deep dark:text-white mt-2">
              {content.contact.heading}
            </h2>
            <p className="text-base text-navy-text/80 dark:text-slate-300 mt-3">
              {content.contact.subheading}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Info Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl p-5 bg-surface-soft dark:bg-navy-900 border border-royal-100 dark:border-navy-800 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-royal-600 text-white shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy-text/60 dark:text-slate-400">
                    {content.contact.info.emailLabel}
                  </div>
                  <a
                    href={`mailto:${content.personal.emailPlaceholder}`}
                    className="font-semibold text-navy-deep dark:text-white hover:text-royal-600 dark:hover:text-skyaccent break-all"
                  >
                    {content.personal.emailPlaceholder}
                  </a>
                </div>
              </div>

              <div className="rounded-2xl p-5 bg-surface-soft dark:bg-navy-900 border border-royal-100 dark:border-navy-800 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-royal-600 text-white shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy-text/60 dark:text-slate-400">
                    {content.contact.info.phoneLabel}
                  </div>
                  <div className="font-semibold text-navy-deep dark:text-white">
                    {content.personal.phonePlaceholder}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-5 bg-surface-soft dark:bg-navy-900 border border-royal-100 dark:border-navy-800 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-royal-600 text-white shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy-text/60 dark:text-slate-400">
                    {content.contact.info.locationLabel}
                  </div>
                  <div className="font-semibold text-navy-deep dark:text-white">
                    {content.personal.location} — {content.experience.institution}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-5 bg-surface-soft dark:bg-navy-900 border border-royal-100 dark:border-navy-800 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-royal-600 text-white shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy-text/60 dark:text-slate-400">
                    {content.contact.info.hoursLabel}
                  </div>
                  <div className="font-semibold text-navy-deep dark:text-white">
                    {content.contact.info.hoursValue}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-surface-soft dark:bg-navy-900 border border-royal-100 dark:border-navy-800 shadow-card-blue space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold text-navy-deep dark:text-slate-200 mb-1.5"
                  >
                    {content.contact.form.name}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-navy-950 border border-royal-200 dark:border-navy-800 text-navy-deep dark:text-white focus:outline-none focus:ring-2 focus:ring-royal-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold text-navy-deep dark:text-slate-200 mb-1.5"
                  >
                    {content.contact.form.email}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-navy-950 border border-royal-200 dark:border-navy-800 text-navy-deep dark:text-white focus:outline-none focus:ring-2 focus:ring-royal-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-bold text-navy-deep dark:text-slate-200 mb-1.5"
                >
                  {content.contact.form.subject}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-navy-950 border border-royal-200 dark:border-navy-800 text-navy-deep dark:text-white focus:outline-none focus:ring-2 focus:ring-royal-500"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-bold text-navy-deep dark:text-slate-200 mb-1.5"
                >
                  {content.contact.form.message}
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-navy-950 border border-royal-200 dark:border-navy-800 text-navy-deep dark:text-white focus:outline-none focus:ring-2 focus:ring-royal-500"
                />
              </div>

              {submitted && (
                <div
                  role="status"
                  className="flex items-center gap-2.5 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-sm font-medium"
                >
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>{content.contact.form.successMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-royal-600 hover:bg-royal-700 disabled:opacity-60 text-white font-semibold shadow-soft-blue transition-all"
              >
                <Send className="w-4 h-4" />
                <span>
                  {submitting ? content.contact.form.sending : content.contact.form.send}
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-deep text-white py-8 border-t border-royal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/sgt-crest.svg" alt="SGT Crest" className="w-9 h-9" />
            <div className="text-sm">
              <div className="font-bold">{content.personal.fullName}</div>
              <div className="text-royal-200 text-xs">{content.personal.title}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-royal-200">
            <span>
              © {new Date().getFullYear()} {content.personal.fullName}
            </span>
            <a
              href="#home"
              aria-label={lang === 'ar' ? 'العودة للأعلى' : 'Back to top'}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
