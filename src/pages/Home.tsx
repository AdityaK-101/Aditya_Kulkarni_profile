import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button, LinkButton, MagneticButton } from '../components/Button';
import { BinaryStreamBackground } from '../components/BinaryStreamBackground';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import { SkillCard } from '../components/SkillCard';
import { featuredProjects, projectDetails, skills, site } from '../data';

export function Home() {
  const [selectedProject, setSelectedProject] = useState<(typeof projectDetails)[number] | null>(null);

  return (
    <main>
      <section className="relative flex min-h-screen items-center px-4 pt-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <BinaryStreamBackground />
          <div className="absolute left-[8%] top-[12%] h-64 w-64 rounded-full bg-black/5 blur-3xl animate-pulseSoft dark:bg-white/5" />
          <div className="absolute right-[14%] top-[24%] h-72 w-72 rounded-full border border-border bg-transparent animate-floatSlow" />
          <div className="absolute bottom-[8%] left-[24%] h-40 w-40 rotate-12 rounded-[3rem] border border-border bg-black/[0.03] dark:bg-white/[0.03]" />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-muted">{site.name}</p>
            <h1 className="mt-6 max-w-5xl text-balance font-display text-5xl leading-[0.92] sm:text-6xl lg:text-[7rem] xl:text-[8rem]">
              {site.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">{site.summary}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button
                type="button"
                className="w-full sm:w-auto"
                onClick={() => document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                Explore Work <ArrowRight size={16} />
              </Button>
              <LinkButton href="mailto:aditya@example.com" className="w-full sm:w-auto justify-center">
                Email
              </LinkButton>
              <LinkButton href={site.linkedin} target="_blank" rel="noreferrer" className="w-full sm:w-auto justify-center">
                LinkedIn
              </LinkButton>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="glass-strong relative mx-auto w-full max-w-[320px] overflow-hidden rounded-[2.5rem] p-4 shadow-soft sm:max-w-[380px] lg:max-w-none lg:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(17,17,17,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top,rgba(244,239,230,0.08),transparent_50%)]" />
              <div className="relative aspect-[4/4.4] rounded-[2rem] border border-border bg-[linear-gradient(145deg,rgba(17,17,17,0.05),transparent)] sm:aspect-[4/5]">
                <div className="absolute inset-4 rounded-[1.25rem] border border-dashed border-border sm:inset-6 sm:rounded-[1.5rem]" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6 sm:gap-4">
                  <div className="max-w-[14rem] sm:max-w-xs">
                    <p className="text-xs uppercase tracking-[0.34em] text-muted">Portrait Placeholder</p>
                    <p className="mt-2 text-[0.72rem] leading-5 text-muted sm:text-sm sm:leading-6">Replace with a studio portrait, monochrome editorial shot, or product-style image.</p>
                  </div>
                  <div className="glass rounded-full px-3 py-2 text-[0.65rem] uppercase tracking-[0.18em] sm:px-4 sm:text-xs sm:tracking-[0.2em]">Open for roles</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.3em] text-muted md:flex">
          <span className="h-2 w-2 rounded-full bg-ink dark:bg-paper" /> Scroll
        </div>
      </section>

      <Section
        id="about"
        eyebrow="About"
        title="Minimal words, ambitious direction."
        subtitle="Computer Science student interested in AI, cybersecurity, and cloud computing, building real-world products and open-source projects while preparing for graduate studies."
      >
        <div className="max-w-2xl space-y-6 text-lg leading-8 text-muted">
          <Reveal>
            <div>
              <p>{site.intro}</p>
              <p className="mt-6">My work sits between engineering clarity and creative presentation, with a focus on systems that feel useful, elegant, and technically precise.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="skills" eyebrow="Skills" title="Core capabilities" subtitle="Interactive cards surface the stack across programming, AI/ML, cybersecurity, and cloud work.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <Reveal key={skill.category} delay={index * 0.05}>
              <SkillCard title={skill.category}>
                {skill.items.map((item) => (
                  <span key={item} className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.22em] text-muted">
                    {item}
                  </span>
                ))}
              </SkillCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="featured-projects" eyebrow="Featured Projects" title="Selected work" subtitle="A curated set of concept cards with hover motion and space for richer case studies later.">
        <div className="grid justify-items-center gap-5 lg:grid-cols-2 lg:justify-items-stretch">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <ProjectCard
                title={project.title}
                description={project.description}
                stack={project.stack}
                image={`/project-${(index % 5) + 1}.svg`}
                compact
                className="w-full max-w-[420px] lg:max-w-none"
              >
                <MagneticButton
                  type="button"
                  className="w-full bg-ink text-paper dark:bg-paper dark:text-ink"
                  onClick={() => setSelectedProject(projectDetails[index])}
                >
                  View Project
                </MagneticButton>
              </ProjectCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="glass-strong grid gap-8 rounded-[2.5rem] px-6 py-10 shadow-soft lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-muted">Contact</p>
            <h2 className="mt-4 font-display text-5xl leading-none sm:text-6xl">Let&apos;s build something meaningful.</h2>
          </div>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
            <LinkButton href={`mailto:${site.email}`} className="w-full justify-center sm:w-auto">
              <Mail size={16} /> Email
            </LinkButton>
            <LinkButton href={site.linkedin} target="_blank" rel="noreferrer" className="w-full justify-center sm:w-auto">
              <Linkedin size={16} /> LinkedIn
            </LinkButton>
            <LinkButton href={site.github} target="_blank" rel="noreferrer" className="w-full justify-center sm:w-auto">
              <Github size={16} /> GitHub
            </LinkButton>
          </div>
        </div>
      </Section>

      <ProjectModal
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title ?? ''}
        description={selectedProject?.descriptionLong ?? selectedProject?.description ?? ''}
        stack={selectedProject?.stack ?? []}
      />
    </main>
  );
}