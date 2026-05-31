import { ArrowDownToLine } from 'lucide-react';
import { Button, LinkButton } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { certifications, education, experience } from '../data';

const skills: Array<[string, number]> = [
  ['Python', 92],
  ['AI / ML', 85],
  ['Cybersecurity', 88],
  ['Cloud / DevOps', 80],
  ['Frontend', 74],
];

export function Resume() {
  return (
    <main className="pt-28">
      <SectionHeading
        eyebrow="Resume"
        title="A concise view of education, experience, and credentials."
        description="A premium resume page that feels editorial while remaining practical for recruiters and collaborators."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-6 rounded-[2rem] border border-border bg-[var(--surface-strong)] p-6 shadow-soft">
              <h3 className="text-2xl font-semibold">Education</h3>
              {education.map((item) => (
                <div key={item.title} className="space-y-2 border-t border-border pt-5">
                  <p className="text-lg font-medium">{item.title}</p>
                  <p className="text-sm uppercase tracking-[0.22em] text-muted">{item.subtitle}</p>
                  <p className="text-sm leading-6 text-muted">{item.details}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 rounded-[2rem] border border-border bg-[var(--surface-strong)] p-6 shadow-soft">
              <h3 className="text-2xl font-semibold">Skills</h3>
              {skills.map(([label, value]) => (
                <ProgressBar key={label} label={label} value={value} />
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-[2rem] border border-border bg-[var(--surface-strong)] p-6 shadow-soft">
              <h3 className="text-2xl font-semibold">Experience</h3>
              <div className="mt-6 space-y-5">
                {experience.map((item) => (
                  <article key={item.title} className="border-t border-border pt-5 first:border-0 first:pt-0">
                    <p className="text-lg font-medium">{item.title}</p>
                    <p className="text-sm uppercase tracking-[0.22em] text-muted">{item.subtitle}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.details}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-border bg-[var(--surface-strong)] p-6 shadow-soft">
              <h3 className="text-2xl font-semibold">Certifications</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {certifications.map((item) => (
                  <div key={item} className="glass rounded-[1.4rem] p-4 text-sm font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="glass-strong flex flex-col items-stretch justify-between gap-6 rounded-[2.5rem] px-6 py-8 shadow-soft md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-muted">Download</p>
            <h3 className="mt-3 font-display text-4xl">Download CV</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">Hook this button to a real PDF placed in public/ when you’re ready to ship the final resume.</p>
          </div>
          <LinkButton href="/resume.pdf" className="w-full justify-center bg-ink text-paper dark:bg-paper dark:text-ink md:w-auto">
            <ArrowDownToLine size={16} /> Download CV
          </LinkButton>
        </div>
      </Section>
    </main>
  );
}