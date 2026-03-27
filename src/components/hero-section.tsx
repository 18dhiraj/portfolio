import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown, MoveRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center min-h-screen py-24 sm:py-32 md:py-48 text-center overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl -z-10 opacity-30 pointer-events-none" />

      <div className="container relative z-10 flex flex-col items-center">
        {/* <div className="inline-flex items-center rounded-full border border-black/10 px-4 py-1.5 text-sm font-semibold transition-colors bg-secondary text-black hover:bg-secondary/80 mb-8 backdrop-blur-sm reveal">
          <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
          Available for new projects
        </div> */}

        <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl font-headline text-black pb-4 reveal delay-300">
          Building Digital <br className="hidden sm:block" />
          <span className="text-primary/80">Experiences.</span>
        </h1>
        
        <p className="mx-auto max-w-[700px] text-xl text-black/60 mt-6 leading-relaxed px-4 reveal delay-600">
          I'm Dhiraj, a Full-Stack Developer specializing in crafting robust web and mobile applications with React and React Native.
        </p>
        
        <div className="mt-10 flex flex-wrap justify-center gap-4 reveal delay-900">
          <Button asChild size="lg" className="rounded-full px-10 h-12 text-base shadow-lg shadow-black/10 hover:shadow-black/20 bg-black text-white hover:bg-black/90 transition-all">
            <Link href="#projects">
              View My Work <MoveRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-12 text-base backdrop-blur-sm bg-background/50 border-black/20 text-black hover:bg-black/5">
            <Link href="#contact">
              Let's Talk
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 mx-auto w-fit flex flex-col items-center gap-2 text-sm text-black/40 opacity-50 animate-bounce pointer-events-none">
        <span className="text-center">Scroll to explore</span>
        <ArrowDown className="h-4 w-4" />
      </div>
    </section>
  );
}
