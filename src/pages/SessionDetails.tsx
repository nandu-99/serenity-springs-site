import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Calendar,
  Clock,
  Video,
  MapPin,
  CreditCard,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import { toast } from "sonner";

const SessionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");

  // Mock session data
  const session = {
    id: id,
    title: "Individual Therapy Session",
    therapist: "Dr. Sarah Thompson",
    date: "2025-01-15",
    time: "2:00 PM - 2:50 PM",
    type: "video",
    status: "confirmed",
    paymentStatus: "unpaid",
    price: "$120",
    description:
      "One-on-one therapy session focused on your personal growth and healing journey.",
    meetingLink: "https://zoom.us/j/123456789",
    location: "123 Wellness Street, Suite 100",
    notes:
      "Please prepare any topics you'd like to discuss. Remember to find a quiet, private space for our session.",
  };

  const handlePayment = () => {
    toast.success("Payment processed successfully!");
    setTimeout(() => {
      navigate("/sessions");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/sessions")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Sessions
        </Button>

        {/* Session Details Card */}
        <Card className="mb-6 border-border/50">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl font-heading">
                  {session.title}
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  with {session.therapist}
                </p>
              </div>
              <div className="flex gap-2">
                <Badge>{session.status}</Badge>
                <Badge
                  variant={
                    session.paymentStatus === "paid" ? "default" : "destructive"
                  }
                >
                  {session.paymentStatus === "paid" ? (
                    <>
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Paid
                    </>
                  ) : (
                    <>
                      <CreditCard className="h-3 w-3 mr-1" />
                      Unpaid
                    </>
                  )}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">{session.description}</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  <span className="font-medium">Date:</span>
                  <span className="ml-2 text-muted-foreground">
                    {new Date(session.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  <span className="font-medium">Time:</span>
                  <span className="ml-2 text-muted-foreground">
                    {session.time}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  {session.type === "video" ? (
                    <>
                      <Video className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-medium">Type:</span>
                      <span className="ml-2 text-muted-foreground">
                        Video Call
                      </span>
                    </>
                  ) : (
                    <>
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-medium">Type:</span>
                      <span className="ml-2 text-muted-foreground">
                        In-Person
                      </span>
                    </>
                  )}
                </div>
                <div className="flex items-center text-sm">
                  <CreditCard className="h-4 w-4 mr-2 text-primary" />
                  <span className="font-medium">Price:</span>
                  <span className="ml-2 text-foreground font-semibold">
                    {session.price}
                  </span>
                </div>
              </div>
            </div>

            {session.notes && (
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm font-medium mb-1">Session Notes:</p>
                <p className="text-sm text-muted-foreground">{session.notes}</p>
              </div>
            )}

            {session.type === "video" && session.meetingLink && (
              <div className="bg-primary/5 rounded-lg p-4">
                <p className="text-sm font-medium mb-1">Meeting Link:</p>
                <a
                  href={session.meetingLink}
                  className="text-sm text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {session.meetingLink}
                </a>
              </div>
            )}

            {session.type === "in-person" && session.location && (
              <div className="bg-primary/5 rounded-lg p-4">
                <p className="text-sm font-medium mb-1">Location:</p>
                <p className="text-sm text-muted-foreground">
                  {session.location}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Payment Section */}
        {session.paymentStatus === "unpaid" && (
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-xl font-heading">
                Payment Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                <span className="font-medium">Session Fee:</span>
                <span className="text-2xl font-bold text-primary">
                  {session.price}
                </span>
              </div>

              <div className="space-y-4">
                <Label className="text-base">Select Payment Method</Label>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                >
                  <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-muted/30 transition-colors">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <span>Credit/Debit Card</span>
                        <span className="text-xs text-muted-foreground">
                          Visa, Mastercard, Amex
                        </span>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-muted/30 transition-colors">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi" className="flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <span>UPI</span>
                        <span className="text-xs text-muted-foreground">
                          Google Pay, PhonePe, Paytm
                        </span>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-muted/30 transition-colors">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <span>PayPal</span>
                        <span className="text-xs text-muted-foreground">
                          Secure payment
                        </span>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button onClick={handlePayment} className="w-full" size="lg">
                <CreditCard className="h-4 w-4 mr-2" />
                Pay Now {session.price}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Your payment information is secure and encrypted. You can cancel
                up to 24 hours before your session.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Already Paid Message */}
        {session.paymentStatus === "paid" && (
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="py-6 text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="font-medium text-lg mb-2">Payment Complete</p>
              <p className="text-sm text-muted-foreground">
                Your session is confirmed and paid. We'll see you on{" "}
                {new Date(session.date).toLocaleDateString()}.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SessionDetails;
