import ThemeToggle from '@/components/ThemeToggle';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import DownloadCV from '@/components/DownloadCV';
import ScrollReveal from '@/components/ScrollReveal';
import {getTranslations} from 'next-intl/server';
import Image from 'next/image';
import {Mail, MapPin, Github, Linkedin, ExternalLink} from 'lucide-react';

type Locale = 'es' | 'en';

type PageProps = {
  params: { locale: string } | Promise<{ locale: string }>;
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.locale as Locale;
  const t = await getTranslations({locale});

  const skills = t.raw('skills') as {
    languagesLabel: string; languagesValue: string;
    frameworksLabel: string; frameworksValue: string;
    toolsLabel: string; toolsValue: string;
    otherLabel: string; otherValue: string;
  };

  const experience = t.raw('experience') as Array<{
    title: string;
    date: string;
    bullets: string[];
    projectsTitle?: string;
    projects?: Array<{label: string; url: string}>;
  }>;

  const education = t.raw('education') as string[];
  const langs = t.raw('languages') as string[];

  const getSkillBadges = (skillsString: string) =>
    skillsString.split(',').map((s) => s.trim()).filter(Boolean);

  const links = {
    email: 'albertoguadron@gmail.com',
    github: 'https://github.com/AlbertoGuadron',
    linkedin: 'https://www.linkedin.com/in/albertoguadron/'
  };

  return (
    <main className="min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-indigo-100/80 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/70">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-end gap-3">
          <ThemeToggle />
          <LanguageSwitcher locale={locale} />
        </div>
      </header>

      {/* HERO */}
      <section className="pt-28 pb-12 px-6">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden border border-indigo-100 bg-white shadow-xl shadow-indigo-100/60 p-8 sm:p-10
                          dark:border-white/10 dark:bg-white/5 dark:shadow-none
                          transition-shadow duration-300 hover:shadow-2xl hover:shadow-indigo-200/50 dark:hover:shadow-indigo-900/30">
            {/* Orbe decorativo de fondo */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 blur-3xl dark:from-indigo-600/20 dark:to-purple-600/20" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-gradient-to-tr from-blue-400/15 to-cyan-400/15 blur-3xl dark:from-blue-600/15 dark:to-cyan-600/15" />

            <div className="relative flex flex-col items-center text-center gap-6">
              {/* Foto */}
              <div className="relative">
                <div className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-90 blur-sm" />
                <div className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-90" />
                <div className="relative rounded-full bg-white p-1 dark:bg-slate-950">
                  <Image
                    src="/img/profile.jpg"
                    alt="Alberto Guadron"
                    width={148}
                    height={148}
                    priority
                    className="h-[148px] w-[148px] rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Nombre */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                  {t('name')}
                </h1>
                <p className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300">
                  {t('role')}
                </p>
              </div>

              {/* Summary */}
              <p className="max-w-2xl text-slate-600 leading-relaxed dark:text-slate-400">
                {t('summary')}
              </p>

              {/* Contacto */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-indigo-500 dark:text-blue-400" />
                  <span>{t('locationLine')}</span>
                </div>
                <a
                  href={`mailto:${links.email}`}
                  className="flex items-center gap-2 transition-all duration-200 hover:text-indigo-600 hover:-translate-y-0.5 dark:hover:text-blue-300"
                >
                  <Mail className="h-4 w-4 text-indigo-500 dark:text-blue-400" />
                  <span>{links.email}</span>
                </a>
              </div>

              {/* Social */}
              <div className="flex flex-wrap justify-center gap-3 pt-1">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700
                             transition-all duration-200 hover:bg-indigo-100 hover:border-indigo-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-indigo-100
                             dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-blue-400/60 dark:hover:bg-white/10 dark:hover:shadow-indigo-900/30"
                >
                  <Github className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12" />
                  GitHub
                  <ExternalLink className="h-3.5 w-3.5 opacity-60 transition-opacity duration-200 hover:opacity-100" />
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700
                             transition-all duration-200 hover:bg-indigo-100 hover:border-indigo-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-indigo-100
                             dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-blue-400/60 dark:hover:bg-white/10 dark:hover:shadow-indigo-900/30"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                  <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          </ScrollReveal>
          <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-indigo-200 to-transparent dark:via-white/10" />
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="pb-16 px-6">
        <div className="mx-auto max-w-4xl space-y-10">

          {/* Experiencia */}
          <ScrollReveal>
          <div className="rounded-3xl border border-indigo-100 bg-white shadow-lg shadow-indigo-50 p-7 sm:p-9
                          dark:border-white/10 dark:bg-white/5 dark:shadow-none
                          transition-shadow duration-300 hover:shadow-xl hover:shadow-indigo-100/70 dark:hover:shadow-indigo-900/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
              {t('experienceTitle')}
            </h2>

            <div className="space-y-10">
              {experience.map((job) => (
                <div key={`${job.title}-${job.date}`} className="relative pl-7 border-l-2 border-indigo-200 dark:border-white/10">
                  <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 ring-2 ring-white dark:ring-slate-950" />

                  <div className="space-y-3">
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-100">
                        {job.title}
                      </h3>
                      <span className="inline-block mt-1 text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-0.5 dark:text-indigo-300 dark:bg-indigo-500/10 dark:border-indigo-500/20">
                        {job.date}
                      </span>
                    </div>

                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      {job.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-indigo-500 mt-1 dark:text-blue-400">▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {job.projects?.length ? (
                      <div className="mt-4 rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4 dark:border-white/10 dark:bg-white/5">
                        <p className="text-sm font-semibold mb-3 text-center sm:text-left text-slate-700 dark:text-slate-300">
                          {job.projectsTitle}
                        </p>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                          {job.projects.map((project) => (
                            <a
                              key={project.url}
                              href={project.url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm text-indigo-700 shadow-sm
                                         transition-all duration-200 hover:bg-indigo-50 hover:border-indigo-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-indigo-100/80
                                         dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-blue-400/60 dark:hover:bg-white/10 dark:hover:shadow-indigo-900/30"
                            >
                              {project.label}
                              <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
          </ScrollReveal>

          {/* Skills + Education + Languages + Competencias */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Skills */}
            <ScrollReveal delay={50}>
            <div className="rounded-3xl border border-indigo-100 bg-white shadow-lg shadow-indigo-50 p-7 sm:p-9
                            dark:border-white/10 dark:bg-white/5 dark:shadow-none
                            transition-shadow duration-300 hover:shadow-xl hover:shadow-indigo-100/70 dark:hover:shadow-indigo-900/20">
              <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
                {t('skillsTitle')}
              </h2>
              <div className="space-y-6">
                <SkillBlock title={skills.languagesLabel} items={getSkillBadges(skills.languagesValue)} />
                <SkillBlock title={skills.frameworksLabel} items={getSkillBadges(skills.frameworksValue)} />
                <SkillBlock title={skills.toolsLabel} items={getSkillBadges(skills.toolsValue)} />
                <SkillBlock title={skills.otherLabel} items={getSkillBadges(skills.otherValue)} />
              </div>
            </div>
            </ScrollReveal>

            {/* Columna derecha */}
            <ScrollReveal delay={150}>
            <div className="space-y-8">
              <Card title={t('educationTitle')}>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {education.map((item, i) => (
                    <li key={i} className="flex gap-2 stagger-item">
                      <span className="text-indigo-500 mt-0.5 dark:text-blue-400">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card title={t('languagesTitle')}>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {langs.map((lang, i) => (
                    <li key={i} className="flex gap-2 stagger-item">
                      <span className="text-indigo-500 mt-0.5 dark:text-blue-400">▸</span>
                      <span>{lang}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card title={t('competenciesTitle')}>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-center">
                  {t('competencies')}
                </p>
              </Card>
            </div>
            </ScrollReveal>
          </div>

          {/* Download */}
          <ScrollReveal delay={100}>
          <div className="flex justify-center">
            <div className="w-full sm:w-auto">
              <DownloadCV
                title={t('downloadTitle')}
                downloadEs={t('downloadEs')}
                downloadEn={t('downloadEn')}
              />
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-indigo-100 dark:border-white/10">
        <div className="mx-auto max-w-4xl text-center text-sm text-slate-400 dark:text-slate-500">
          Built with Next.js · Theme + i18n · © {new Date().getFullYear()}
        </div>
      </footer>
    </main>
  );
}

/** Helpers (server-safe, no hooks) */
function Card({title, children}: {title: string; children: React.ReactNode}) {
  return (
    <div className="rounded-3xl border border-indigo-100 bg-white shadow-lg shadow-indigo-50 p-7 sm:p-9
                    transition-shadow duration-300 hover:shadow-xl hover:shadow-indigo-100/70
                    dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:shadow-indigo-900/20">
      <h2 className="text-xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
        {title}
      </h2>
      {children}
    </div>
  );
}

function SkillBlock({title, items}: {title: string; items: string[]}) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400 text-center mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="rounded-xl border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700
                       transition-all duration-200 hover:bg-indigo-100 hover:border-indigo-300 hover:scale-105 hover:shadow-sm
                       dark:border-white/10 dark:bg-white/5 dark:text-slate-300
                       dark:hover:border-indigo-400/40 dark:hover:bg-indigo-500/10 dark:hover:scale-105"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
