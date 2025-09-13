import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  Video,
  MapPin,
  CreditCard,
  CheckCircle,
} from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Sessions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("upcoming");

  const query = new URLSearchParams(location.search);
  const selectedTherapy = query.get("therapy");

  const sessionsData = [
    {
      therapy: "Individual Therapy",
      upcoming: [
        {
          id: 1,
          title: "Individual Therapy Session",
          therapist: {
            name: "Dr. Sarah Thompson",
            experience: "10+ years in cognitive behavioral therapy",
          },
          date: "2025-01-15",
          time: "2:00 PM",
          type: "video",
          status: "confirmed",
          paymentStatus: "paid",
          duration: "50 minutes",
          price: "$120",
          features: [
            "Personalized treatment plan",
            "Weekly or bi-weekly sessions",
            "Homework exercises",
          ],
        },
        {
          id: 2,
          title: "Individual Therapy Session",
          therapist: {
            name: "Dr. Sarah Thompson",
            experience: "10+ years in cognitive behavioral therapy",
          },
          date: "2025-01-22",
          time: "3:00 PM",
          type: "video",
          status: "pending",
          paymentStatus: "unpaid",
          duration: "50 minutes",
          price: "$120",
          features: [
            "Personalized treatment plan",
            "Weekly or bi-weekly sessions",
            "Homework exercises",
          ],
        },
      ],
      past: [
        {
          id: 3,
          title: "Individual Therapy Session",
          therapist: {
            name: "Dr. Sarah Thompson",
            experience: "10+ years in cognitive behavioral therapy",
          },
          date: "2024-12-28",
          time: "2:00 PM",
          type: "video",
          status: "completed",
          paymentStatus: "paid",
          notes: "Discussed coping strategies for stress management",
          duration: "50 minutes",
          price: "$120",
          features: [
            "Personalized treatment plan",
            "Weekly or bi-weekly sessions",
            "Homework exercises",
          ],
        },
      ],
    },
    {
      therapy: "Group Therapy",
      upcoming: [
        {
          id: 4,
          title: "Group Therapy - Anxiety Support",
          therapist: {
            name: "Dr. Michael Chen",
            experience: "8 years in group dynamics and support therapy",
          },
          date: "2025-01-18",
          time: "6:00 PM",
          type: "in-person",
          status: "confirmed",
          paymentStatus: "pending",
          duration: "90 minutes",
          price: "$60",
          features: ["Peer support", "Shared experiences", "Group activities"],
        },
      ],
      past: [],
    },
    {
      therapy: "Yoga Therapy",
      upcoming: [
        {
          id: 5,
          title: "Yoga Therapy Session",
          therapist: {
            name: "Lisa Patel",
            experience: "12 years as a certified yoga therapist",
          },
          date: "2025-01-20",
          time: "10:00 AM",
          type: "in-person",
          status: "pending",
          paymentStatus: "unpaid",
          duration: "60 minutes",
          price: "$80",
          features: [
            "Customized yoga poses",
            "Breathing exercises",
            "Relaxation techniques",
          ],
        },
      ],
      past: [],
    },
    {
      therapy: "Spiritual Therapy",
      upcoming: [
        {
          id: 6,
          title: "Spiritual Therapy Session",
          therapist: {
            name: "Dr. Elena Rodriguez",
            experience: "15 years in spiritual counseling",
          },
          date: "2025-01-25",
          time: "11:00 AM",
          type: "video",
          status: "pending",
          paymentStatus: "unpaid",
          duration: "60 minutes",
          price: "$100",
          features: [
            "Meditation practices",
            "Inner exploration",
            "Emotional guidance",
          ],
        },
      ],
      past: [],
    },
    {
      therapy: "Music Therapy",
      upcoming: [
        {
          id: 7,
          title: "Music Therapy Session",
          therapist: {
            name: "James Carter",
            experience: "7 years as a board-certified music therapist",
          },
          date: "2025-01-27",
          time: "1:00 PM",
          type: "in-person",
          status: "confirmed",
          paymentStatus: "paid",
          duration: "50 minutes",
          price: "$90",
          features: [
            "Instrumental exercises",
            "Listening therapy",
            "Mood enhancement",
          ],
        },
      ],
      past: [],
    },
    {
      therapy: "Arts & Crafts Therapy",
      upcoming: [
        {
          id: 8,
          title: "Arts & Crafts Therapy Session",
          therapist: {
            name: "Emma Wilson",
            experience: "9 years in art therapy and creative expression",
          },
          date: "2025-01-30",
          time: "4:00 PM",
          type: "in-person",
          status: "pending",
          paymentStatus: "unpaid",
          duration: "60 minutes",
          price: "$85",
          features: [
            "Drawing & painting",
            "Craft activities",
            "Emotional expression",
          ],
        },
      ],
      past: [],
    },
  ];

  const filteredSessions = selectedTherapy
    ? [sessionsData.find((data) => data.therapy === selectedTherapy)].filter(
        Boolean,
      )
    : sessionsData;

  const getStatusBadge = (status) => {
    const variants = {
      confirmed: "default",
      pending: "secondary",
      completed: "outline",
    };
    return <Badge variant={variants[status] || "secondary"}>{status}</Badge>;
  };

  const getPaymentBadge = (status) => {
    const variants = {
      paid: "default",
      pending: "secondary",
      unpaid: "destructive",
    };
    const icons = {
      paid: <CheckCircle className="h-3 w-3 mr-1" />,
      pending: <Clock className="h-3 w-3 mr-1" />,
      unpaid: <CreditCard className="h-3 w-3 mr-1" />,
    };
    return (
      <Badge
        variant={variants[status] || "secondary"}
        className="flex items-center"
      >
        {icons[status]}
        {status}
      </Badge>
    );
  };

  const handleViewDetails = (sessionId) => {
    navigate(`/session/${sessionId}`);
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex justify-start">
          <Link to="/therapies">
            <Button variant="outline">← Back to Therapies</Button>
          </Link>
        </div>
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            My Sessions
          </h1>
          <p className="text-muted-foreground text-lg">
            Manage your therapy sessions and track your progress
          </p>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
            <TabsTrigger value="past">Past Sessions</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            {filteredSessions.length > 0 ? (
              filteredSessions.map((therapyData, index) => (
                <div key={index} className="space-y-4">
                  {therapyData.upcoming.length > 0 && (
                    <>
                      <h2 className="text-2xl font-heading font-bold text-foreground">
                        {therapyData.therapy}
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {therapyData.upcoming.map((session) => (
                          <Card key={session.id} className="border-border/50">
                            <CardHeader>
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-end gap-2">
                                  {getStatusBadge(session.status)}
                                  {getPaymentBadge(session.paymentStatus)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <CardTitle className="text-xl font-heading">
                                    {session.title}
                                  </CardTitle>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    with {session.therapist.name} -{" "}
                                    {session.therapist.experience}
                                  </p>
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
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {session.duration}
                                </div>
                                <div className="flex items-center">
                                  <CreditCard className="h-4 w-4 mr-1" />
                                  {session.price}
                                </div>
                              </div>
                              <div className="space-y-2 mt-4">
                                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                  Includes:
                                </p>
                                <ul className="space-y-1">
                                  {session.features.map((feature, idx) => (
                                    <li
                                      key={idx}
                                      className="text-sm text-muted-foreground flex items-start"
                                    >
                                      <span className="text-primary mr-2">
                                        •
                                      </span>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="flex gap-2 mt-4">
                                <Button
                                  variant="secondary"
                                  onClick={() => handleViewDetails(session.id)}
                                >
                                  View Details
                                </Button>
                                {session.paymentStatus === "unpaid" && (
                                  <Button
                                    variant="outline"
                                    onClick={() =>
                                      handleViewDetails(session.id)
                                    }
                                  >
                                    Pay Now
                                  </Button>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))
            ) : (
              <Card className="border-border/50">
                <CardContent className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    No upcoming sessions scheduled
                  </p>
                  <Button onClick={() => navigate("/therapies")}>
                    Book a Session
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            {filteredSessions.length > 0 ? (
              filteredSessions.map((therapyData, index) => (
                <div key={index} className="space-y-4">
                  {therapyData.past.length > 0 && (
                    <>
                      <h2 className="text-2xl font-heading font-bold text-foreground">
                        {therapyData.therapy}
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {therapyData.past.map((session) => (
                          <Card key={session.id} className="border-border/50">
                            <CardHeader>
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-end gap-2">
                                  {getStatusBadge(session.status)}
                                  {getPaymentBadge(session.paymentStatus)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <CardTitle className="text-xl font-heading">
                                    {session.title}
                                  </CardTitle>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    with {session.therapist.name} -{" "}
                                    {session.therapist.experience}
                                  </p>
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
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {session.duration}
                                </div>
                                <div className="flex items-center">
                                  <CreditCard className="h-4 w-4 mr-1" />
                                  {session.price}
                                </div>
                              </div>
                              <div className="space-y-2 mt-4">
                                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                  Includes:
                                </p>
                                <ul className="space-y-1">
                                  {session.features.map((feature, idx) => (
                                    <li
                                      key={idx}
                                      className="text-sm text-muted-foreground flex items-start"
                                    >
                                      <span className="text-primary mr-2">
                                        •
                                      </span>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              {session.notes && (
                                <div className="bg-muted/50 rounded-lg p-3 mt-4">
                                  <p className="text-sm text-muted-foreground">
                                    <span className="font-medium">Notes:</span>{" "}
                                    {session.notes}
                                  </p>
                                </div>
                              )}
                              <Button
                                variant="outline"
                                onClick={() => handleViewDetails(session.id)}
                                className="mt-4"
                              >
                                View Session Details
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))
            ) : (
              <Card className="border-border/50">
                <CardContent className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    No past sessions found
                  </p>
                  <Button onClick={() => navigate("/therapies")}>
                    Book a Session
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto border-primary/20 bg-gradient-soft">
            <CardContent className="py-8">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Ready for Your Next Session?
              </h2>
              <p className="text-muted-foreground mb-6">
                Book your next therapy session and continue your journey to
                wellness.
              </p>
              <Button
                size="lg"
                onClick={() => navigate("/therapies")}
                className="shadow-medium"
              >
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
