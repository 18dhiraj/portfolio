import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

export function ProjectDisplay({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className={cn("order-1", isEven ? "md:order-1" : "md:order-2")}>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <Carousel>
              <CarouselContent>
                {project.gallery.map((image, idx) => (
                  <CarouselItem key={idx}>
                    <Image
                      src={image.imageUrl}
                      alt={`${project.title} - image ${idx + 1}`}
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover aspect-[4/2]"
                      data-ai-hint={image.imageHint}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
               {project.gallery.length > 1 && (
                <>
                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
                </>
              )}
            </Carousel>
          </CardContent>
        </Card>
      </div>
      <div className={cn("order-2 flex flex-col justify-center", isEven ? "md:order-2" : "md:order-1")}>
        <h3 className="text-2xl md:text-3xl font-bold font-headline">{project.title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <p className="mt-4 text-muted-foreground leading-relaxed">{project.description}</p>
        <div className="mt-6 flex gap-4">
          {project.liveUrl && (
            <Button asChild>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
          {project.repoUrl && (
            <Button variant="outline" asChild>
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
