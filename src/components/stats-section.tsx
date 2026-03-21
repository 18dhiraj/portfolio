export function StatsSection() {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'End-to-End Builds', value: '12+' },
    { label: 'Project Contributions', value: '29+' },
    { label: 'Products Launched', value: '3' },
  ];

  return (
    <section className="py-20 bg-black text-white overflow-hidden">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center justify-center text-center reveal delay-${index * 100}`}
            >
              <span className="text-5xl md:text-7xl font-bold font-headline mb-2">
                {stat.value}
              </span>
              <span className="text-sm md:text-base uppercase tracking-widest text-white/60 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
