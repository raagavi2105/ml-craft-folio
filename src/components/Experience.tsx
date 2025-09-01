import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Operations Lead",
      company: "Google Developer Student Clubs",
      location: "SRM IST Ramapuram, Chennai, Tamil Nadu",
      period: "Oct 2023 – Present",
      description: [
        "Lead and manage a team of volunteers to support and execute club activities, including workshops, hackathons, and speaker sessions",
        "Develop and implement strategic plans for club growth, organizing events that align with the club's goals and GDSC's mission",
        "Foster community engagement and knowledge sharing among 200+ student developers"
      ],
      type: "Leadership"
    },
    {
      title: "Technical Intern",
      company: "Vidya Sagar CSO",
      location: "Chennai, Tamil Nadu",
      period: "June 2024 – July 2024",
      description: [
        "Developed and maintained a Django-based student management system with features for student profiles, reports, and data management",
        "Implemented user authentication, authorization, and role-based access controls, reducing hard copy data dependency by 100%",
        "Collaborated with development team to enhance system functionalities and resolve bugs, improving system adoption by 40%",
        "Converted paper-based data into digital format using Tesseract OCR library with comprehensive data cleaning"
      ],
      type: "Internship"
    },
    {
      title: "Research Intern",
      company: "MIT Square",
      location: "London (Remote)",
      period: "Oct 2023 – May 2024",
      description: [
        "Worked on 'Closing the Loop: Sustainable Heat Regulation for Modern Data Centres' under Dr. Bharat, Grambling State University, USA",
        "Designed a closed loop cooling system to reduce freshwater intake by 90% and leverage renewable energy",
        "Researched sustainable heat regulation techniques, contributing to 30% reduction in energy costs",
        "Part of the 'Best Intern Team of the Year' among 60+ interns with cross-functional teamwork"
      ],
      type: "Research"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Leadership':
        return 'bg-secondary/20 text-secondary border-secondary/30';
      case 'Internship':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'Research':
        return 'bg-accent/20 text-accent-foreground border-accent/30';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-primary to-secondary opacity-30"></div>
              )}
              
              {/* Experience Card */}
              <div className="bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card ml-0 md:ml-16 relative">
                {/* Timeline Dot */}
                <div className="absolute -left-4 md:-left-12 top-8 w-8 h-8 bg-gradient-primary rounded-full border-4 border-background shadow-glow"></div>
                
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <span className={`px-3 py-1 rounded-full text-sm border ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-primary font-semibold mb-2">
                      {exp.company}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {exp.description.map((desc, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;