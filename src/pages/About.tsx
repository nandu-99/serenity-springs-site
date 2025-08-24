import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, GraduationCap, Heart, Calendar } from "lucide-react";

const About = () => {
  const certifications = [
    "Licensed Clinical Psychologist",
    "Certified Cognitive Behavioral Therapist",
    "EMDR Certified Therapist",
    "Mindfulness-Based Stress Reduction (MBSR)",
    "Family Systems Therapy Certified",
  ];

  const expertise = [
    "Anxiety & Depression",
    "Trauma & PTSD",
    "Relationship Issues",
    "Stress Management",
    "Life Transitions",
    "Self-Esteem Issues",
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            About Me
          </h1>
          <p className="text-muted-foreground text-lg">
            Get to know your therapist and my approach to healing
          </p>
        </div>

        {/* Profile Section */}
        <Card className="mb-8 overflow-hidden border-border/50">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Photo Placeholder */}
              <div className="bg-gradient-soft p-8 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-20 w-20 text-primary" />
                </div>
              </div>

              {/* Info */}
              <div className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                    Dr. Sarah Thompson
                  </h2>
                  <p className="text-primary font-medium mb-4">
                    Founder & Lead Therapist
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With over 15 years of experience in mental health counseling, I've dedicated my
                    life to helping individuals find peace, healing, and personal growth. My approach
                    combines evidence-based techniques with compassionate care.
                  </p>
                </div>

                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>15+ Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    <span>1000+ Clients Helped</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy */}
        <Card className="mb-8 border-border/50">
          <CardContent className="p-8">
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-xl font-heading font-semibold">My Philosophy</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I believe that every person has the innate capacity for growth and healing. My role
              is to provide a safe, non-judgmental space where you can explore your thoughts,
              feelings, and experiences freely.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through our work together, we'll identify patterns, develop coping strategies, and
              unlock your potential for positive change. Your journey is unique, and I'm here to
              support you every step of the way.
            </p>
          </CardContent>
        </Card>

        {/* Credentials */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Education */}
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-lg font-heading font-semibold">Education</h3>
              </div>
              <ul className="space-y-2">
                <li className="text-muted-foreground">
                  <span className="font-medium">Ph.D. in Clinical Psychology</span>
                  <br />
                  <span className="text-sm">Stanford University, 2008</span>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-medium">M.A. in Counseling Psychology</span>
                  <br />
                  <span className="text-sm">Columbia University, 2005</span>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-medium">B.A. in Psychology</span>
                  <br />
                  <span className="text-sm">Yale University, 2003</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-lg font-heading font-semibold">Certifications</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <Badge key={cert} variant="secondary" className="text-xs">
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Areas of Expertise */}
        <Card className="border-border/50">
          <CardContent className="p-8">
            <h3 className="text-xl font-heading font-semibold mb-4">Areas of Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {expertise.map((area) => (
                <div
                  key={area}
                  className="flex items-center space-x-2 text-muted-foreground"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;