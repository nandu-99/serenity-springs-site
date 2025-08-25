import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Understanding Anxiety: A Comprehensive Guide",
      excerpt: "Learn about the different types of anxiety disorders, their symptoms, and effective coping strategies that can help you manage anxiety in daily life.",
      author: "Dr. Sarah Thompson",
      date: "2025-01-10",
      readTime: "5 min read",
      category: "Mental Health",
      featured: true,
    },
    {
      id: 2,
      title: "The Power of Mindfulness in Therapy",
      excerpt: "Discover how mindfulness practices can enhance your therapy experience and promote lasting mental wellness through present-moment awareness.",
      author: "Dr. Sarah Thompson",
      date: "2025-01-08",
      readTime: "7 min read",
      category: "Therapy Techniques",
      featured: false,
    },
    {
      id: 3,
      title: "Building Healthy Relationships: Communication Tips",
      excerpt: "Effective communication is the foundation of strong relationships. Learn practical strategies to improve how you connect with others.",
      author: "Dr. Sarah Thompson",
      date: "2025-01-05",
      readTime: "6 min read",
      category: "Relationships",
      featured: false,
    },
    {
      id: 4,
      title: "Coping with Stress in the Modern World",
      excerpt: "Explore evidence-based techniques for managing stress in our fast-paced society and maintaining balance in your daily life.",
      author: "Dr. Sarah Thompson",
      date: "2025-01-03",
      readTime: "8 min read",
      category: "Stress Management",
      featured: true,
    },
    {
      id: 5,
      title: "The Benefits of Group Therapy",
      excerpt: "Learn why group therapy can be a powerful tool for healing, offering unique advantages through shared experiences and peer support.",
      author: "Dr. Sarah Thompson",
      date: "2024-12-28",
      readTime: "5 min read",
      category: "Therapy Types",
      featured: false,
    },
    {
      id: 6,
      title: "Sleep and Mental Health: The Vital Connection",
      excerpt: "Understand the crucial relationship between quality sleep and mental well-being, plus tips for improving your sleep hygiene.",
      author: "Dr. Sarah Thompson",
      date: "2024-12-25",
      readTime: "6 min read",
      category: "Wellness",
      featured: false,
    },
    {
      id: 7,
      title: "Navigating Life Transitions with Grace",
      excerpt: "Major life changes can be challenging. Discover strategies to adapt and thrive during periods of transition and uncertainty.",
      author: "Dr. Sarah Thompson",
      date: "2024-12-20",
      readTime: "7 min read",
      category: "Personal Growth",
      featured: false,
    },
    {
      id: 8,
      title: "Understanding and Healing from Trauma",
      excerpt: "A compassionate guide to recognizing trauma's impact and the various therapeutic approaches that can support your healing journey.",
      author: "Dr. Sarah Thompson",
      date: "2024-12-15",
      readTime: "10 min read",
      category: "Trauma",
      featured: true,
    },
  ];

  const categories = [...new Set(blogs.map((blog) => blog.category))];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Wellness Blog
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Insights, tips, and resources to support your mental health journey
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
            All Posts
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        {blogs.filter((blog) => blog.featured)[0] && (
          <Card className="mb-12 overflow-hidden border-primary/20 bg-gradient-soft">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-primary/10 text-primary">Featured</Badge>
                <Badge variant="outline">{blogs.filter((blog) => blog.featured)[0].category}</Badge>
              </div>
              <CardTitle className="text-2xl md:text-3xl font-heading">
                {blogs.filter((blog) => blog.featured)[0].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                {blogs.filter((blog) => blog.featured)[0].excerpt}
              </CardDescription>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {blogs.filter((blog) => blog.featured)[0].author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(blogs.filter((blog) => blog.featured)[0].date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {blogs.filter((blog) => blog.featured)[0].readTime}
                </div>
              </div>
              <Button className="group">
                Read More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              className="group hover:shadow-large transition-all duration-300 cursor-pointer border-border/50 h-full flex flex-col"
            >
              <CardHeader className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {blog.category}
                  </Badge>
                  {blog.featured && (
                    <Badge className="bg-primary/10 text-primary text-xs">Featured</Badge>
                  )}
                </div>
                <CardTitle className="text-lg font-heading line-clamp-2">
                  {blog.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 mt-2">
                  {blog.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {blog.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(blog.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {blog.readTime}
                  </div>
                </div>
                <Button variant="secondary" className="w-full group">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <Card className="mt-12 border-primary/20 bg-gradient-soft">
          <CardContent className="py-8 text-center">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Stay Informed
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Subscribe to our newsletter for weekly mental health tips and resources delivered to
              your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blogs;
