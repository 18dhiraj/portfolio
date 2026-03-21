import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="container py-12 flex flex-col items-center justify-center gap-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-background hover:text-primary transition-colors">
            <Link href="https://github.com/18dhiraj" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-background hover:text-primary transition-colors">
            <Link href="https://www.linkedin.com/in/dhiraj-kumar-476446164/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
        
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Dhiraj Kumar. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Built with Next.js, Tailwind CSS, and Shadcn UI.
          </p>
        </div>
      </div>
    </footer>
  );
}
