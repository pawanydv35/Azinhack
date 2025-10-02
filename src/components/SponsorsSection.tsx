const SponsorsSection = () => {
  const sponsors = [
    { name: "Google", logo: "/src/assets/clothing.jpg" },
    { name: "Microsoft", logo: "/src/assets/docker.jpg" },
    { name: "AWS", logo: "/src/assets/isha.jpg" },
    { name: "GitHub", logo: "/src/assets/kpi.jpg" },
    { name: "OpenAI", logo: "/src/assets/xyz.jpg" },
  ];

  return (
    <section id="sponsors" className="bg-purple py-20 md:py-32">
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-xl md:text-2xl font-bold text-white mb-2">
            AZINHACK 2025 IS BROUGHT TO YOU BY
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-12">
            Our Sponsors
          </h2>
        </div>
        
        {/* Sponsor Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black shadow-bold-sm aspect-square flex items-center justify-center p-6 hover:scale-105 transition-transform rounded-2xl"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="max-h-20 md:max-h-24 object-contain"
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default SponsorsSection;

