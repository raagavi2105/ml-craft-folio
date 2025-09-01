import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePicture from '@/assets/profile-picture.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-primary-glow rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Profile Image */}
          <div className="relative group animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-elevated group-hover:shadow-glow transition-all duration-500">
              <img 
                src={profilePicture} 
                alt="Raagavi G" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  RAAGAVI G
                </span>
              </h1>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Machine Learning Engineer | Software Developer | Web Developer | UI/UX Designer
              </p>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto lg:mx-0">
                Passionate about creating innovative ML solutions and building scalable applications. 
                Currently pursuing B.Tech in Computer Science with a 9.58 CGPA at SRM Institute of Science and Technology.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-slide-up" style={{ animationDelay: '1s' }}>
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg">
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
              <Button variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 px-8 py-6 text-lg">
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '1.2s' }}>
              <a 
                href="https://github.com/raagavi2105" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-card-hover border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <Github size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/in/raagavi-g" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-card-hover border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <Linkedin size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:raagavi2105@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-card-hover border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <Mail size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;