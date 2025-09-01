import { Code, Brain, Users, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "ML Expertise",
      description: "Specialized in machine learning algorithms, data analysis, and AI model development"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Proficient in Django, React, Node.js, and modern web technologies"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership",
      description: "Operations Lead at Google Developer Student Clubs with proven team management skills"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Track Record",
      description: "JPMC Code for Good Winner and multiple hackathon achievements"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              Passionate ML Engineer & Full-Stack Developer
            </h3>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am a highly motivated Computer Science engineering student with a strong foundation in 
                machine learning, software development, and technical problem-solving. With a 9.54 CGPA 
                at SRM Institute of Science and Technology, I have consistently demonstrated academic excellence 
                and practical application of knowledge.
              </p>
              
              <p>
                My journey in the tech world began with curiosity about how things work and a desire to 
                build innovative solutions. Over the years, I have honed my skills in Python, JavaScript, 
                Django, Flask, and various ML frameworks, working on projects that span from predictive 
                models to full-stack web applications.
              </p>
              
              <p>
                Through internships at Vidya Sagar CSO and MIT Square, I've gained valuable industry 
                experience in system development and research. As Operations Lead at Google Developer 
                Student Clubs, I've developed strong leadership and team management skills while fostering 
                a community of learning and innovation.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={highlight.title}
                className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    {highlight.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {highlight.title}
                </h4>
                <p className="text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Education</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    SRM Institute of Science and Technology
                  </h4>
                  <p className="text-primary font-medium">B.Tech in Computer Science and Engineering</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    9.54
                  </div>
                  <p className="text-muted-foreground">CGPA</p>
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground">Chennai, Tamil Nadu</p>
                  <p className="text-foreground font-medium">2022 – Expected 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;