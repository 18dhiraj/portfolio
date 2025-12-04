import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="container flex flex-col items-center justify-center py-24 sm:py-32 md:py-48 text-center">
      <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
        Digital Craftsmanship
      </h1>
      <p className="mx-auto max-w-[700px] text-lg text-foreground/80 mt-4">
        A curated collection of projects where design meets technology.
      </p>
      <div className="mt-8">
        <Button asChild size="lg">
          <Link href="#projects">
            View My Work <ArrowDown className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
