import Image from 'next/image';
import { aboutMe } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Quote } from 'lucide-react';
import ProfilePic from '../assets/gorav.jpg';

export function AboutSection() {
  return (
    <section id="about" className="container py-24 md:py-32 overflow-hidden">
      <div className="text-center mb-16 space-y-4 reveal">
        <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-black">
          Who I Am
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Learn more about my background, skills, and the philosophy behind my work.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center reveal delay-200">
        {/* Image Column */}
        <div className="w-full md:w-5/12 relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] transform rotate-3 scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem]">
            <Image
              src={ProfilePic}
              alt={aboutMe.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              placeholder="blur"
            />
          </div>
          </div>


        {/* Content Column */}
        <div className="w-full md:w-7/12 space-y-8">
          <div className="space-y-6 text-lg text-black/80 leading-relaxed">
            <p>
              I'm <span className="text-black font-bold">{aboutMe.name}</span>, a {aboutMe.title} based in India. 
              My journey in tech is driven by a simple philosophy: <span className="text-black italic font-medium">build things that matter.</span>
            </p>
            <p>
              {aboutMe.bio}
            </p>
            <p>
              I specialize in the React ecosystem, seamlessly bridging the gap between web and mobile development to deliver consistent, high-quality user experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "React & React Native",
              "TypeScript",
              "Next.js",
              "Node.js",
              "UI/UX Design",
              "System Architecture"
            ].map((skill) => (
              <div key={skill} className="flex items-center gap-2 text-sm font-semibold text-black/70">
                <div className="h-1.5 w-1.5 rounded-full bg-black/40" />
                {skill}
              </div>
            ))}
          </div>

          <Card className="bg-muted/30 border-none">
            <CardContent className="p-6 relative">
              <Quote className="h-8 w-8 text-black/10 absolute top-4 left-4" />
              <p className="text-base italic text-black/70 pl-8 relative z-10 font-medium">
                "Striving for simplicity in code and elegance in design. I believe the best software feels invisible to the user."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
