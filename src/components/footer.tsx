import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {/* <Logo className="h-5 w-5 text-muted-foreground" /> */}
          <p className="ml-4 text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Craft Gallery. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/18dhiraj" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          {/* <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button> */}
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/dhiraj-kumar-476446164/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
