'use client';

import { useState } from 'react';
import { projects } from '@/lib/data';
import { ProjectDisplay } from '@/components/project-display';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile'>('all');

  const filteredProjects = projects.filter(project => 
    filter === 'all' ? true : project.category === filter
  );

  return (
    <section id="projects" className="container py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="text-center mb-16 space-y-4 reveal">
        <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-black">
          Featured Projects
        </h2>
        <p className="text-xl text-black/60 max-w-2xl mx-auto">
          A collection of my work in web and mobile development.
        </p>
      </div>

      <div className="flex justify-center mb-16 reveal delay-100 w-full">
        <Tabs defaultValue="all" className="w-full max-w-full" onValueChange={(value) => setFilter(value as any)}>
          <div className="flex justify-center w-full overflow-x-auto pb-4 no-scrollbar">
            <TabsList className="inline-flex h-12 items-center justify-center rounded-full bg-secondary/50 p-1 min-w-max">
              <TabsTrigger value="all" className="rounded-full px-6 md:px-10 text-sm h-10 data-[state=active]:bg-background data-[state=active]:text-black data-[state=active]:shadow-sm transition-all font-semibold">All</TabsTrigger>
              <TabsTrigger value="web" className="rounded-full px-6 md:px-10 text-sm h-10 data-[state=active]:bg-background data-[state=active]:text-black data-[state=active]:shadow-sm transition-all font-semibold">Web</TabsTrigger>
              <TabsTrigger value="mobile" className="rounded-full px-6 md:px-10 text-sm h-10 data-[state=active]:bg-background data-[state=active]:text-black data-[state=active]:shadow-sm transition-all font-semibold">Mobile</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 gap-20 md:gap-32">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="reveal delay-200">
            <ProjectDisplay project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
