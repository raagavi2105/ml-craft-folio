import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "raagavi2105@gmail.com",
      link: "mailto:raagavi2105@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location", 
      details: "Chennai, Tamil Nadu",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/raagavi2105",
      handle: "@raagavi2105"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/raagavi-g",
      handle: "raagavi-g"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: "Email",
      url: "mailto:raagavi2105@gmail.com",
      handle: "raagavi2105@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting ML projects? Let's connect and build something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex items-center gap-4 p-6 bg-gradient-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow group"
              >
                <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary/20 transition-colors">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {info.title}
                  </h4>
                  <p className="text-muted-foreground">{info.details}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">Connect With Me</h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-6 bg-gradient-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow group min-w-[140px]"
                >
                  <div className="text-primary group-hover:text-primary-glow transition-colors">
                    {social.icon}
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {social.name}
                    </p>
                    <p className="text-sm text-muted-foreground">{social.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;