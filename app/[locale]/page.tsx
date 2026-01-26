import ThemeToggle from '@/components/ThemeToggle';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import DownloadCV from '@/components/DownloadCV';
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
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Header fijo */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-end gap-3">
          <ThemeToggle />
          <LanguageSwitcher locale={locale} />
        </div>
      </header>

      {/* HERO */}
      <section className="pt-28 pb-12 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="flex flex-col items-center text-center gap-6">
              {/* FOTO redonda */}
              <div className="relative">
                <div className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-90" />
                <div className="relative rounded-full bg-slate-950 p-1">
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

              {/* Nombre + Role */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                  {t('name')}
                </h1>
                <p className="text-lg sm:text-xl text-slate-300">
                  {t('role')}
                </p>
              </div>

              {/* Summary centrado */}
              <p className="max-w-2xl text-slate-300 leading-relaxed">
                {t('summary')}
              </p>

              {/* Contacto */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>{t('locationLine')}</span>
                </div>

                <a
                  href={`mailto:${links.email}`}
                  className="flex items-center gap-2 hover:text-blue-300 transition-colors"
                >
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>{links.email}</span>
                </a>
              </div>

              {/* Social buttons */}
              <div className="flex flex-wrap justify-center gap-3 pt-1">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:border-blue-400/60 hover:bg-white/10 transition-all"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                  <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                </a>

                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:border-blue-400/60 hover:bg-white/10 transition-all"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                  <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider suave */}
          <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="pb-16 px-6">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Experiencia */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-9">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              {t('experienceTitle')}
            </h2>

            <div className="space-y-10">
              {experience.map((job) => (
                <div key={`${job.title}-${job.date}`} className="relative pl-7 border-l border-white/10">
                  <div className="absolute -left-1 top-1.5 h-2.5 w-2.5 rounded-full bg-blue-400" />

                  <div className="space-y-3">
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-semibold">
                        {job.title}
                      </h3>
                      <p className="text-sm text-slate-400 mt-1">
                        {job.date}
                      </p>
                    </div>

                    <ul className="space-y-2 text-slate-300">
                      {job.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-blue-400 mt-1">▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {job.projects?.length ? (
                      <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm font-semibold mb-3 text-center sm:text-left">
                          {job.projectsTitle}
                        </p>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                          {job.projects.map((project) => (
                            <a
                              key={project.url}
                              href={project.url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:border-blue-400/60 hover:bg-white/10 transition-all"
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

          {/* Skills + Education + Languages + Competencies */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Skills */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-9">
              <h2 className="text-2xl font-semibold text-center mb-6">
                {t('skillsTitle')}
              </h2>

              <div className="space-y-6">
                <SkillBlock title={skills.languagesLabel} items={getSkillBadges(skills.languagesValue)} />
                <SkillBlock title={skills.frameworksLabel} items={getSkillBadges(skills.frameworksValue)} />
                <SkillBlock title={skills.toolsLabel} items={getSkillBadges(skills.toolsValue)} />
                <SkillBlock title={skills.otherLabel} items={getSkillBadges(skills.otherValue)} />
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-8">
              <Card title={t('educationTitle')}>
                <ul className="space-y-2 text-sm text-slate-300">
                  {education.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-blue-400 mt-0.5">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card title={t('languagesTitle')}>
                <ul className="space-y-2 text-sm text-slate-300">
                  {langs.map((lang, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-blue-400 mt-0.5">▸</span>
                      <span>{lang}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card title={t('competenciesTitle')}>
                <p className="text-sm text-slate-300 leading-relaxed text-center">
                  {t('competencies')}
                </p>
              </Card>
            </div>
          </div>

          {/* Download */}
          <div className="flex justify-center">
            <div className="w-full sm:w-auto">
              <DownloadCV
                title={t('downloadTitle')}
                downloadEs={t('downloadEs')}
                downloadEn={t('downloadEn')}
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-white/10">
        <div className="mx-auto max-w-4xl text-center text-sm text-slate-400">
          Built with Next.js · Theme + i18n · © {new Date().getFullYear()}
        </div>
      </footer>
    </main>
  );
}

/** Helpers (server-safe, no hooks) */
function Card({title, children}: {title: string; children: React.ReactNode}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-9">
      <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>
      {children}
    </div>
  );
}

function SkillBlock({title, items}: {title: string; items: string[]}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 text-center mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
