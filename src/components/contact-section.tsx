import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="container py-24 md:py-32 reveal">
      <div className="relative rounded-3xl bg-primary/5 px-6 py-16 md:px-12 md:py-24 text-center overflow-hidden">
        
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
            Ready to start your next project?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm currently available for freelance work and open to new opportunities. 
            If you have a project that needs some creative touch, I'd love to hear about it.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="rounded-full h-14 px-6 md:px-8 text-base md:text-lg shadow-xl shadow-primary/20 w-full sm:w-auto overflow-hidden">
              <a href="mailto:officialdhiraj00@gmail.com" className="flex items-center justify-center gap-2">
                <Mail className="flex-shrink-0 h-5 w-5" /> 
                <span className="truncate">officialdhiraj00@gmail.com</span>
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-8">
            Based in India • Available Worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
