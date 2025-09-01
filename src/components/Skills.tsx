import { Code, Database, Brain, Cloud, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "C/C++", level: 85 },
        { name: "SQL", level: 88 }
      ],
      gradient: "from-primary to-secondary"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Django & Flask", level: 92 },
        { name: "React.js", level: 88 },
        { name: "Node.js & Express", level: 85 },
        { name: "Streamlit", level: 90 }
      ],
      gradient: "from-secondary to-accent"
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 88 },
        { name: "AWS & GCP", level: 80 }
      ],
      gradient: "from-accent to-primary"
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Scikit-learn", level: 92 },
        { name: "Hugging Face", level: 88 },
        { name: "RAG & Semantic Search", level: 85 },
        { name: "TensorFlow", level: 80 }
      ],
      gradient: "from-primary to-accent"
    },
    {
      title: "Tools & Technologies",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 75 },
        { name: "REST APIs", level: 90 },
        { name: "Figma", level: 85 }
      ],
      gradient: "from-secondary to-primary"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: [
        { name: "Team Leadership", level: 95 },
        { name: "Problem Solving", level: 92 },
        { name: "Public Speaking", level: 88 },
        { name: "Project Management", level: 90 }
      ],
      gradient: "from-accent to-secondary"
    }
  ];

  const certifications = [
    "Machine Learning A-Z – Udemy",
    "AWS Solution Architect Certification",
    "GCP DUET AI Certification", 
    "Deloitte Data Analytics Simulation"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning Machine Learning, Full-Stack Development, and Leadership
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(index * 0.1) + (i * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Awards & Certifications */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Awards */}
          <div className="bg-gradient-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20 text-primary">
                🏆
              </div>
              Awards & Recognition
            </h3>
            <div className="space-y-4">
              {[
                "JPMC Code for Good 2025 Winner",
                "She Innovates Hackathon Winner",
                "Best Intern Team of the Year – MIT Square", 
                "Academic Excellence – Dept. 3rd Rank (Sem 1)"
              ].map((award, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground font-medium">{award}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gradient-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary/20 text-secondary">
                📜
              </div>
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-secondary/5 rounded-xl border border-secondary/20">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "9.54", label: "CGPA", suffix: "" },
            { number: "15", label: "Projects", suffix: "+" },
            { number: "3", label: "Internships", suffix: "" },
            { number: "5", label: "Awards", suffix: "+" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}{stat.suffix}
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;