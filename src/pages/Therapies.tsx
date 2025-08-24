import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Users, Heart, MessageCircle, User2, Flower2, Sparkles, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Therapies = () => {
  const therapies = [
    {
      icon: Brain,
      title: "Individual Therapy",
      description: "One-on-one sessions tailored to your personal needs and goals.",
      duration: "50 minutes",
      price: "$120",
      features: ["Personalized treatment plan", "Weekly or bi-weekly sessions", "Homework exercises"],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Heart,
      title: "Couples Therapy",
      description: "Strengthen your relationship and improve communication with your partner.",
      duration: "75 minutes",
      price: "$150",
      features: ["Communication skills", "Conflict resolution", "Intimacy building"],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Users,
      title: "Group Therapy",
      description: "Connect and heal with others who share similar experiences.",
      duration: "90 minutes",
      price: "$60",
      features: ["Peer support", "Shared experiences", "Group activities"],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: User2,
      title: "Anonymous Therapy",
      description: "Maintain complete privacy while getting the help you need.",
      duration: "45 minutes",
      price: "$100",
      features: ["Complete anonymity", "Secure platform", "Text or voice options"],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: MessageCircle,
      title: "Chat Therapy",
      description: "Convenient text-based therapy sessions from anywhere.",
      duration: "Unlimited messaging",
      price: "$200/month",
      features: ["Daily check-ins", "Async messaging", "Quick responses"],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Flower2,
      title: "Yoga Therapy",
      description: "Combine physical movement with mental wellness practices.",
      duration: "60 minutes",
      price: "$80",
      features: ["Mind-body connection", "Breathing exercises", "Meditation"],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Sparkles,
      title: "Spiritual Therapy",
      description: "Explore spiritual dimensions of healing and personal growth.",
      duration: "60 minutes",
      price: "$110",
      features: ["Meaning exploration", "Values clarification", "Spiritual practices"],
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Explore Our Therapies
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the therapy approach that resonates with you. We offer various modalities to
            support your unique healing journey.
          </p>
        </div>

        {/* Therapy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapies.map((therapy, index) => (
            <Card
              key={index}
              className="group hover:shadow-large transition-all duration-300 border-border/50"
            >
              <CardHeader>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${therapy.color} mb-3`}>
                  <therapy.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-heading">{therapy.title}</CardTitle>
                <CardDescription className="text-sm">{therapy.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{therapy.duration}</span>
                  </div>
                  <span className="font-semibold text-primary text-lg">{therapy.price}</span>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Includes:
                  </p>
                  <ul className="space-y-1">
                    {therapy.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/sessions">
                  <Button className="w-full group-hover:shadow-medium transition-all">
                    Book Session
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-soft rounded-2xl p-8">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
            Not sure which therapy is right for you?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your needs and find the perfect therapeutic
            approach for your journey.
          </p>
          <Link to="/sessions">
            <Button size="lg" className="shadow-medium">
              Schedule Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Therapies;