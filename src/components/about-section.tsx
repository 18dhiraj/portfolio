import Image from 'next/image';
import { aboutMe } from '@/lib/data';

export function AboutSection() {
  return (
    <section id="about" className="container py-12 md:py-24 bg-card rounded-lg my-12 md:my-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center p-8">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src={require('../assets/gorav.jpg')}
            alt={aboutMe.name}
            width={300}
            height={300}
            className="rounded-full object-cover aspect-square border-4 border-primary/20 shadow-lg"
            data-ai-hint={aboutMe.image.imageHint}
          />
        </div>
        <div className="md:col-span-2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">{aboutMe.name}</h2>
          <p className="text-primary text-lg font-medium mt-1">{aboutMe.title}</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {aboutMe.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
