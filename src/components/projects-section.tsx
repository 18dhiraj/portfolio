import { projects } from '@/lib/data';
import { ProjectDisplay } from '@/components/project-display';

export function ProjectsSection() {
  return (
    <section id="projects" className="container py-12 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-tight">My Creative Work</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Here's a selection of projects I'm proud of.
        </p>
      </div>
      <div className="flex flex-col gap-16 md:gap-24">
        {projects.map((project, index) => (
          <ProjectDisplay key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
