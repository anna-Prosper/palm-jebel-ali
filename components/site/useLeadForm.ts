"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

// Shared lead-form state for content pages: any in-page CTA calls openForm to
// pop the modal, pre-filled with an interest, and logs a form_open event.
export function useLeadForm(defaultInterest = "General enquiry") {
  const [formOpen, setFormOpen] = useState(false);
  const [formInterest, setFormInterest] = useState(defaultInterest);

  const openForm = (interest: string, location: string) => {
    setFormInterest(interest);
    setFormOpen(true);
    trackEvent("form_open", { location, interest });
  };

  return {
    formOpen,
    formInterest,
    openForm,
    closeForm: () => setFormOpen(false),
  };
}
