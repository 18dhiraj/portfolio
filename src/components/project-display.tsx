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
import { Github, ExternalLink, Smartphone, Globe, CheckCircle2 } from 'lucide-react';
import type { Project } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

export function ProjectDisplay({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className="group relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Project Image/Carousel */}
        <div className={cn(
          "lg:col-span-7 overflow-hidden rounded-2xl shadow-xl transition-all duration-1000 group-hover:scale-[1.01] border border-border/50",
          isEven ? "lg:order-1" : "lg:order-2"
        )}>
          <Card className="border-none bg-transparent overflow-hidden">
            <CardContent className="p-0">
              <Carousel className="w-full">
                <CarouselContent>
                  {project.gallery.map((image, idx) => (
                    <CarouselItem key={idx}>
                      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                        <Image
                          src={image.imageUrl}
                          alt={`${project.title} - image ${idx + 1}`}
                          fill
                          className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {project.gallery.length > 1 && (
                  <>
                    <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 border-none text-white backdrop-blur-sm" />
                    <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 border-none text-white backdrop-blur-sm" />
                  </>
                )}
              </Carousel>
            </CardContent>
          </Card>
        </div>

        {/* Project Info */}
        <div className={cn(
          "lg:col-span-5 flex flex-col justify-center space-y-6",
          isEven ? "lg:order-2 lg:pl-4" : "lg:order-1 lg:pr-4"
        )}>
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-1">
              {project.category === 'mobile' ? (
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary/70">
                  <Smartphone className="h-3.5 w-3.5" />
                  Mobile Application
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary/70">
                  <Globe className="h-3.5 w-3.5" />
                  Web Platform
                </div>
              )}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold font-headline tracking-tight text-black group-hover:text-primary transition-colors duration-500">
              {project.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="outline" 
                className="bg-black/5 text-black border-black/10 font-semibold px-3 py-1 hover:bg-black/10 transition-colors duration-500"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-3 pt-2">
            {project.resp?.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 text-base text-black/80 group/item"
              >
                <div className="flex-shrink-0 pt-1.5">
                  <CheckCircle2 className="h-4 w-4 text-primary opacity-70 group-hover/item:opacity-100 transition-opacity duration-500" />
                </div>
                <span className="leading-relaxed font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            {project.liveUrl && (
              <Button asChild size="lg" className="rounded-full px-10 shadow-lg shadow-black/10 hover:shadow-black/20 bg-black text-white hover:bg-black/90 transition-all duration-500">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Link>
              </Button>
            )}
            {project.androidlink && (
              <Button asChild size="lg" variant="outline" className="rounded-full px-10 border-black/20 text-black hover:bg-black/5 transition-all duration-500">
                <Link href={project.androidlink} target="_blank" rel="noopener noreferrer">
                  <Smartphone className="mr-2 h-4 w-4" /> Android
                </Link>
              </Button>
            )}
            {project.ioslink && (
              <Button asChild size="lg" variant="outline" className="rounded-full px-10 border-black/20 text-black hover:bg-black/5 transition-all duration-500">
                <Link href={project.ioslink} target="_blank" rel="noopener noreferrer">
                  <Smartphone className="mr-2 h-4 w-4" /> iOS App
                </Link>
              </Button>
            )}
            {project.repoUrl && (
              <Button variant="ghost" asChild size="lg" className="rounded-full px-10 group/btn text-black/60 hover:text-black hover:bg-black/5 transition-all duration-500">
                <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-500" /> GitHub
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative background element for large screens */}
      <div className={cn(
        "absolute -z-10 top-1/2 -translate-y-1/2 w-full h-full bg-primary/[0.01] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-2000",
        isEven ? "-right-1/4" : "-left-1/4"
      )} />
    </div>
  );
}
