import { ExternalLink, Github, Award, Code2, Database, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Seraphina: Postpartum Depression Prediction",
      description: "ML model using Random Forest to predict postpartum depression risk, providing early intervention support for new mothers.",
      techStack: ["Python", "Random Forest", "Streamlit", "Machine Learning"],
      features: [
        "87% F1 score accuracy with Random Forest Algorithm",
        "Interactive Streamlit dashboard for healthcare professionals",
        "Early intervention recommendations for new mothers",
        "Real-time risk assessment and personalized insights"
      ],
      recognition: "🏆 1st Place - WTM SheInnovates Hackathon",
      liveLink: "#",
      githubLink: "#",
      category: "Machine Learning",
      gradient: "from-primary to-secondary"
    },
    {
      title: "WorkZen: Developer Productivity Prediction",
      description: "Comprehensive ML solution analyzing work-life balance patterns to predict and enhance developer productivity levels.",
      techStack: ["Python", "Scikit-learn", "Streamlit", "Random Forest"],
      features: [
        "Analyzed 5,000+ developer profiles for productivity patterns",
        "87% F1 score prediction accuracy",
        "Personalized productivity recommendations",
        "30% reduction in prediction processing time"
      ],
      recognition: "✨ 25% increase in user productivity insights",
      liveLink: "#",
      githubLink: "#",
      category: "Machine Learning",
      gradient: "from-secondary to-accent"
    },
    {
      title: "XCRM – Mini CRM Platform",
      description: "Full-stack CRM with customer segmentation, dynamic campaign builder, and AI-powered message suggestions.",
      techStack: ["React.js", "Node.js", "MongoDB", "AI/NLP"],
      features: [
        "Customer segmentation with behavioral analysis",
        "AI-powered campaign message suggestions (60% efficiency boost)",
        "RESTful APIs with Swagger documentation",
        "Real-time analytics and campaign performance tracking"
      ],
      recognition: "🚀 100% feature coverage with scalable architecture",
      liveLink: "#",
      githubLink: "#",
      category: "Full-Stack",
      gradient: "from-accent to-primary"
    },
    {
      title: "FinLit: Financial Literacy Platform",
      description: "Comprehensive financial platform with AI chatbot, expenditure tracking, and personalized investment recommendations.",
      techStack: ["Django", "PostgreSQL", "AI Chatbot", "Chart.js"],
      features: [
        "AI chatbot resolving 95% of financial queries",
        "Handles 100+ concurrent users efficiently",
        "5+ interactive charts for expenditure visualization",
        "40% improvement in financial planning accuracy"
      ],
      recognition: "💰 Comprehensive financial education solution",
      liveLink: "#",
      githubLink: "#",
      category: "FinTech",
      gradient: "from-primary to-accent"
    },
    {
      title: "Vidyasagar Dashboard",
      description: "Comprehensive student management system with multi-role authentication and data digitization capabilities.",
      techStack: ["Django", "PostgreSQL", "Tesseract OCR", "HTML/CSS"],
      features: [
        "Multi-role authentication (Student/Teacher/Management)",
        "100% reduction in hard copy data dependency",
        "OCR integration for paper-to-digital conversion",
        "40% improvement in system adoption rates"
      ],
      recognition: "📊 Complete educational data management solution",
      liveLink: "#",
      githubLink: "#",
      category: "Web Application",
      gradient: "from-secondary to-primary"
    },
    {
      title: "Zeotap CDP Bot",
      description: "Intelligent documentation assistant using semantic search and NLP for Customer Data Platform queries.",
      techStack: ["Flask", "AI/NLP", "Semantic Search", "SentenceTransformer"],
      features: [
        "Semantic search with SentenceTransformer model",
        "Cross-CDP comparison capabilities",
        "Real-time documentation scraping",
        "Advanced query handling for configurations"
      ],
      recognition: "🤖 Intelligent documentation assistance",
      liveLink: "#",
      githubLink: "#",
      category: "AI/NLP",
      gradient: "from-accent to-secondary"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Machine Learning':
        return <Brain className="w-5 h-5" />;
      case 'Full-Stack':
        return <Code2 className="w-5 h-5" />;
      case 'FinTech':
        return <Database className="w-5 h-5" />;
      case 'Web Application':
        return <Code2 className="w-5 h-5" />;
      case 'AI/NLP':
        return <Brain className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions in Machine Learning, Full-Stack Development, and AI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-elevated hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white`}>
                    {getCategoryIcon(project.category)}
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{project.category}</span>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Recognition */}
              <div className="mb-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                <p className="text-primary font-medium text-sm">
                  {project.recognition}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                <div className="space-y-2">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button 
                  variant="default" 
                  className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <ExternalLink className="mr-2" size={16} />
                  Live Demo
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                >
                  <Github size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-card border border-primary/20 rounded-2xl px-8 py-4">
            <Award className="w-8 h-8 text-primary" />
            <div>
              <p className="text-foreground font-semibold">JPMC Code for Good 2025 Winner</p>
              <p className="text-muted-foreground text-sm">Recognized for innovative solutions in social good technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;