import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-6">
      <div className="mx-auto max-w-5xl rounded-full border border-border/40 bg-background/60 backdrop-blur-xl shadow-sm supports-[backdrop-filter]:bg-background/30">
        <div className="flex h-14 items-center justify-between px-4 md:px-6">
          <Link href="/" className="font-bold text-lg tracking-tight hover:text-primary transition-colors">
            DK.
          </Link>
          
          <nav className="hidden md:flex items-center gap-1">
            <Button variant="ghost" asChild className="rounded-full text-sm font-medium text-muted-foreground hover:text-foreground">
              <Link href="#about">About</Link>
            </Button>
            <Button variant="ghost" asChild className="rounded-full text-sm font-medium text-muted-foreground hover:text-foreground">
              <Link href="#projects">Work</Link>
            </Button>
            <Button variant="ghost" asChild className="rounded-full text-sm font-medium text-muted-foreground hover:text-foreground">
              <Link href="#contact">Contact</Link>
            </Button>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild className="rounded-full h-8 w-8 text-muted-foreground hover:text-foreground">
              <Link href="https://github.com/18dhiraj" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full h-8 w-8 text-muted-foreground hover:text-foreground">
              <Link href="https://www.linkedin.com/in/dhiraj-kumar-476446164/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
