"use client";

import React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    project: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - replace with actual API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // TODO: Send to backend API
    console.log("Contact form submitted:", formData);

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-xl p-8 border border-border text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mt-6 font-serif text-2xl font-bold text-card-foreground">
          Message Sent!
        </h3>
        <p className="mt-4 text-muted-foreground">
          Thank you for reaching out. Our team will contact you within 24 hours.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              subject: "",
              project: "",
              message: "",
            });
          }}
          variant="outline"
          className="mt-6"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="mt-1.5"
          />
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="mt-1.5"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
            className="mt-1.5"
          />
        </div>
        <div>
          <Label htmlFor="subject">Subject</Label>
          <Select
            value={formData.subject}
            onValueChange={(value) =>
              setFormData({ ...formData, subject: value })
            }
          >
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="inquiry">General Inquiry</SelectItem>
              <SelectItem value="site-visit">Schedule Site Visit</SelectItem>
              <SelectItem value="pricing">Pricing Information</SelectItem>
              <SelectItem value="investment">Investment Opportunity</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="project">Interested Project</Label>
        <Select
          value={formData.project}
          onValueChange={(value) =>
            setFormData({ ...formData, project: value })
          }
        >
          <SelectTrigger className="mt-1.5">
            <SelectValue placeholder="Select project (optional)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mshivalik">Mshivalik</SelectItem>
            <SelectItem value="upcoming">Upcoming Projects</SelectItem>
            <SelectItem value="general">General Information</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          placeholder="How can we help you?"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
          rows={5}
          className="mt-1.5"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our privacy policy and consent to
        being contacted regarding your inquiry.
      </p>
    </form>
  );
}
