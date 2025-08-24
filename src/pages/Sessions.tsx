import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Video, MapPin, CreditCard, CheckCircle, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sessions = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingSessions = [
    {
      id: 1,
      title: "Individual Therapy Session",
      therapist: "Dr. Sarah Thompson",
      date: "2025-01-15",
      time: "2:00 PM",
      type: "video",
      status: "confirmed",
      paymentStatus: "paid",
    },
    {
      id: 2,
      title: "Group Therapy - Anxiety Support",
      therapist: "Dr. Sarah Thompson",
      date: "2025-01-18",
      time: "6:00 PM",
      type: "in-person",
      status: "confirmed",
      paymentStatus: "pending",
    },
    {
      id: 3,
      title: "Yoga Therapy Session",
      therapist: "Dr. Sarah Thompson",
      date: "2025-01-20",
      time: "10:00 AM",
      type: "in-person",
      status: "pending",
      paymentStatus: "unpaid",
    },
  ];

  const pastSessions = [
    {
      id: 4,
      title: "Individual Therapy Session",
      therapist: "Dr. Sarah Thompson",
      date: "2024-12-28",
      time: "2:00 PM",
      type: "video",
      status: "completed",
      paymentStatus: "paid",
      notes: "Discussed coping strategies for stress management",
    },
    {
      id: 5,
      title: "Couples Therapy Session",
      therapist: "Dr. Sarah Thompson",
      date: "2024-12-20",
      time: "4:00 PM",
      type: "in-person",
      status: "completed",
      paymentStatus: "paid",
      notes: "Worked on communication exercises",
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: any = {
      confirmed: "default",
      pending: "secondary",
      completed: "outline",
    };
    return <Badge variant={variants[status] || "secondary"}>{status}</Badge>;
  };

  const getPaymentBadge = (status: string) => {
    const variants: any = {
      paid: "default",
      pending: "secondary",
      unpaid: "destructive",
    };
    const icons: any = {
      paid: <CheckCircle className="h-3 w-3 mr-1" />,
      pending: <Clock className="h-3 w-3 mr-1" />,
      unpaid: <CreditCard className="h-3 w-3 mr-1" />,
    };
    return (
      <Badge variant={variants[status] || "secondary"} className="flex items-center">
        {icons[status]}
        {status}
      </Badge>
    );
  };

  const handleViewDetails = (sessionId: number) => {
    navigate(`/session/${sessionId}`);
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            My Sessions
          </h1>
          <p className="text-muted-foreground text-lg">
            Manage your therapy sessions and track your progress
          </p>
        </div>

        {/* Sessions Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
            <TabsTrigger value="past">Past Sessions</TabsTrigger>
          </TabsList>

          {/* Upcoming Sessions */}
          <TabsContent value="upcoming" className="space-y-4">
            {upcomingSessions.length > 0 ? (
              upcomingSessions.map((session) => (
                <Card key={session.id} className="border-border/50">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl font-heading">{session.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          with {session.therapist}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        {getStatusBadge(session.status)}
                        {getPaymentBadge(session.paymentStatus)}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(session.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {session.time}
                      </div>
                      <div className="flex items-center">
                        {session.type === "video" ? (
                          <>
                            <Video className="h-4 w-4 mr-1" />
                            Video Call
                          </>
                        ) : (
                          <>
                            <MapPin className="h-4 w-4 mr-1" />
                            In-Person
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleViewDetails(session.id)}
                        className="flex-1"
                      >
                        View Details
                      </Button>
                      {session.paymentStatus === "unpaid" && (
                        <Button
                          variant="outline"
                          onClick={() => handleViewDetails(session.id)}
                          className="flex-1"
                        >
                          Pay Now
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="border-border/50">
                <CardContent className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No upcoming sessions scheduled</p>
                  <Button onClick={() => navigate("/therapies")}>Book a Session</Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Past Sessions */}
          <TabsContent value="past" className="space-y-4">
            {pastSessions.map((session) => (
              <Card key={session.id} className="border-border/50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-heading">{session.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        with {session.therapist}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {getStatusBadge(session.status)}
                      {getPaymentBadge(session.paymentStatus)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(session.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {session.time}
                    </div>
                    <div className="flex items-center">
                      {session.type === "video" ? (
                        <>
                          <Video className="h-4 w-4 mr-1" />
                          Video Call
                        </>
                      ) : (
                        <>
                          <MapPin className="h-4 w-4 mr-1" />
                          In-Person
                        </>
                      )}
                    </div>
                  </div>
                  {session.notes && (
                    <div className="bg-muted/50 rounded-lg p-3 mb-4">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Notes:</span> {session.notes}
                      </p>
                    </div>
                  )}
                  <Button variant="outline" onClick={() => handleViewDetails(session.id)}>
                    View Session Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Book New Session CTA */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto border-primary/20 bg-gradient-soft">
            <CardContent className="py-8">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Ready for Your Next Session?
              </h2>
              <p className="text-muted-foreground mb-6">
                Book your next therapy session and continue your journey to wellness.
              </p>
              <Button size="lg" onClick={() => navigate("/therapies")} className="shadow-medium">
                Book New Session
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sessions;