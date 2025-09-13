import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Understanding Anxiety: A Comprehensive Guide",
    excerpt:
      "Learn about the different types of anxiety disorders, their symptoms, and effective coping strategies that can help you manage anxiety in daily life.",
    author: "Dr. Sarah Thompson",
    date: "2025-01-10",
    readTime: "5 min read",
    category: "Mental Health",
    featured: true,
    content: `Anxiety disorders are among the most common mental health conditions, affecting millions of people worldwide. Understanding anxiety is the first step towards managing it effectively.

Types of Anxiety Disorders:

1. Generalized Anxiety Disorder (GAD): Characterized by excessive, ongoing worry about various aspects of daily life.

2. Panic Disorder: Involves recurrent panic attacks with intense fear and physical symptoms.

3. Social Anxiety Disorder: Fear of social situations where one might be judged or embarrassed.

4. Specific Phobias: Intense fear of specific objects or situations.

Symptoms of Anxiety:

- Physical: Rapid heartbeat, sweating, trembling, fatigue

- Emotional: Excessive worry, irritability, feeling of impending doom

- Behavioral: Avoidance of triggers, restlessness

Effective Coping Strategies:

- Mindfulness and meditation

- Regular exercise

- Healthy sleep habits

- Cognitive Behavioral Therapy (CBT)

- Medication when necessary

Remember, seeking professional help is crucial if anxiety interferes with daily life.`,
  },
  {
    id: 2,
    title: "The Power of Mindfulness in Therapy",
    excerpt:
      "Discover how mindfulness practices can enhance your therapy experience and promote lasting mental wellness through present-moment awareness.",
    author: "Dr. Sarah Thompson",
    date: "2025-01-08",
    readTime: "7 min read",
    category: "Therapy Techniques",
    featured: false,
    content: `Mindfulness is a practice rooted in ancient traditions but backed by modern science. It involves paying attention to the present moment without judgment.

How Mindfulness Enhances Therapy:

- Increases self-awareness

- Reduces rumination on past events

- Improves emotional regulation

- Enhances focus during therapy sessions

Incorporating Mindfulness:

1. Start with breath awareness: Focus on your inhalation and exhalation.

2. Body scan: Notice sensations in different parts of your body.

3. Mindful walking: Pay attention to each step and your surroundings.

4. Loving-kindness meditation: Cultivate compassion for yourself and others.

Research shows that mindfulness-based therapies like MBSR (Mindfulness-Based Stress Reduction) can significantly reduce symptoms of anxiety and depression.

Integrate mindfulness into your daily routine for lasting benefits in your mental health journey.`,
  },
  {
    id: 3,
    title: "Building Healthy Relationships: Communication Tips",
    excerpt:
      "Effective communication is the foundation of strong relationships. Learn practical strategies to improve how you connect with others.",
    author: "Dr. Sarah Thompson",
    date: "2025-01-05",
    readTime: "6 min read",
    category: "Relationships",
    featured: false,
    content: `Healthy relationships thrive on open, honest communication. Poor communication can lead to misunderstandings and conflicts.

Key Communication Tips:

1. Active Listening: Give your full attention, nod, and paraphrase what you've heard.

2. Use "I" Statements: Express feelings without blame, e.g., "I feel hurt when..." instead of "You always..."

3. Non-Verbal Cues: Be aware of body language, tone, and facial expressions.

4. Timing: Choose the right moment for important discussions.

5. Empathy: Try to understand the other person's perspective.

Common Pitfalls to Avoid:

- Interrupting

- Assuming intentions

- Stonewalling or withdrawing

- Criticism or contempt

Practice these skills in your daily interactions. If issues persist, consider couples therapy to build stronger communication habits.

Remember, good communication is a skill that improves with practice and patience.`,
  },
  {
    id: 4,
    title: "Coping with Stress in the Modern World",
    excerpt:
      "Explore evidence-based techniques for managing stress in our fast-paced society and maintaining balance in your daily life.",
    author: "Dr. Sarah Thompson",
    date: "2025-01-03",
    readTime: "8 min read",
    category: "Stress Management",
    featured: true,
    content: `In today's fast-paced world, stress has become a constant companion for many. Chronic stress can impact physical and mental health.

Understanding Stress:

- Acute stress: Short-term, can be motivating

- Chronic stress: Long-term, harmful to health

Evidence-Based Techniques:

1. Deep Breathing Exercises: Try the 4-7-8 method - inhale for 4, hold for 7, exhale for 8.

2. Progressive Muscle Relaxation: Tense and relax muscle groups systematically.

3. Time Management: Prioritize tasks using tools like Eisenhower Matrix.

4. Social Support: Connect with friends and family.

5. Nature Exposure: Spend time outdoors to reduce cortisol levels.

Lifestyle Factors:

- Regular physical activity

- Balanced nutrition

- Adequate sleep

- Limiting screen time

If stress feels overwhelming, seek professional help. Therapists can provide personalized strategies.

Building resilience through these techniques can help you thrive in the modern world.`,
  },
  {
    id: 5,
    title: "The Benefits of Group Therapy",
    excerpt:
      "Learn why group therapy can be a powerful tool for healing, offering unique advantages through shared experiences and peer support.",
    author: "Dr. Sarah Thompson",
    date: "2024-12-28",
    readTime: "5 min read",
    category: "Therapy Types",
    featured: false,
    content: `Group therapy brings together individuals facing similar challenges under the guidance of a trained therapist.

Unique Benefits:

1. Peer Support: Realize you're not alone in your struggles.

2. Diverse Perspectives: Gain insights from others' experiences.

3. Social Skills Practice: Improve interpersonal skills in a safe environment.

4. Cost-Effective: Often more affordable than individual therapy.

5. Motivation: Seeing others' progress can inspire your own.

Types of Group Therapy:

- Support groups (e.g., for grief or addiction)

- Psychoeducational groups

- Process-oriented groups

- CBT-based groups

What to Expect:

- Confidentiality agreements

- Structured sessions

- Facilitator guidance

- Homework or exercises

Group therapy can complement individual therapy or stand alone. It's particularly effective for issues like anxiety, depression, and substance use.

If you're hesitant, start with a small group or observe a session. The benefits often outweigh initial discomfort.`,
  },
  {
    id: 6,
    title: "Sleep and Mental Health: The Vital Connection",
    excerpt:
      "Understand the crucial relationship between quality sleep and mental well-being, plus tips for improving your sleep hygiene.",
    author: "Dr. Sarah Thompson",
    date: "2024-12-25",
    readTime: "6 min read",
    category: "Wellness",
    featured: false,
    content: `Sleep and mental health are inextricably linked. Poor sleep can exacerbate mental health issues, and vice versa.

The Connection:

- Sleep regulates mood through hormone balance

- REM sleep processes emotions

- Chronic sleep deprivation increases risk of depression and anxiety

- Mental health disorders often disrupt sleep patterns

Signs of Poor Sleep Hygiene:

- Irregular sleep schedule

- Excessive screen time before bed

- Caffeine late in the day

- Uncomfortable sleep environment

Tips for Better Sleep:

1. Consistent Schedule: Wake up and sleep at the same time daily.

2. Wind-Down Routine: Read or meditate before bed.

3. Optimize Environment: Cool, dark, quiet room.

4. Limit Naps: Keep them short if necessary.

5. Exercise Regularly: But not close to bedtime.

If sleep issues persist, consult a professional. Conditions like insomnia may require CBT-I (Cognitive Behavioral Therapy for Insomnia).

Prioritizing sleep is a key investment in your mental health and overall well-being.`,
  },
];

const BlogDetail = () => {
  const params = useParams();
  const id = parseInt(params.id, 10);
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Blog not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <Link to="/blogs">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blogs
          </Button>
        </Link>

        <Card className="border-primary/20 bg-gradient-soft">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Badge>{blog.category}</Badge>
              {blog.featured && (
                <Badge className="bg-primary/10 text-primary">Featured</Badge>
              )}
            </div>
            <CardTitle className="text-3xl md:text-4xl font-heading">
              {blog.title}
            </CardTitle>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {blog.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(blog.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {blog.readTime}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-lg mb-8">
              {blog.excerpt}
            </CardDescription>
            <div className="prose prose-invert max-w-none text-foreground">
              {blog.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogDetail;
