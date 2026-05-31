import { useMemo, useState } from 'react';
import { Github, Link2 } from 'lucide-react';
import { Button, LinkButton } from '../components/Button';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { categories, projectDetails } from '../data';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<(typeof projectDetails)[number] | null>(null);

  const projects = useMemo(() => {
    if (activeCategory === 'All') return projectDetails;
    return projectDetails.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="pt-28">
      <SectionHeading
        eyebrow="Projects"
        title="A showcase built for filtering, hovering, and deeper storytelling."
        description="This grid can grow into a full case-study library while staying fast and visually sharp."
      />
      <Section id="project-grid">
        <div className="mb-8 flex flex-wrap gap-3 justify-start sm:justify-center lg:justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeCategory === category
                  ? 'border-ink bg-ink text-paper dark:border-paper dark:bg-paper dark:text-ink'
                  : 'border-border bg-transparent text-muted hover:bg-black/5 dark:hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 items-stretch">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.04}>
              <ProjectCard
                title={project.title}
                description={project.descriptionLong}
                stack={project.stack}
                image={project.image}
                className="h-full"
              >
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <LinkButton href={project.github} target="_blank" rel="noreferrer" className="w-full justify-center sm:flex-1">
                    <Github size={16} /> GitHub
                  </LinkButton>
                  <LinkButton href={project.live} target="_blank" rel="noreferrer" className="w-full justify-center sm:flex-1">
                    <Link2 size={16} /> Live Demo
                  </LinkButton>
                </div>
                <Button type="button" className="mt-3 w-full" onClick={() => setSelectedProject(project)}>
                  View Details
                </Button>
              </ProjectCard>
            </Reveal>
          ))}
        </div>
      </Section>
      <ProjectModal
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title ?? ''}
        description={selectedProject?.descriptionLong ?? ''}
        stack={selectedProject?.stack ?? []}
      />
    </main>
  );
}