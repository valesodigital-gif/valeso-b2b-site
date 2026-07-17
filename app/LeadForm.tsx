"use client";

import { FormEvent, useState } from "react";

export type LeadFormCopy = {
  headingLabel: string;
  headingTitle: string;
  fields: {
    name: string;
    company: string;
    phone: string;
    email: string;
    city: string;
    businessType: string;
    message: string;
  };
  placeholders: {
    name: string;
    company: string;
    phone: string;
    email: string;
    city: string;
    businessType: string;
    message: string;
  };
  businessTypes: string[];
  goalLegend: string;
  goals: string[];
  interestLegend: string;
  interests: string[];
  submit: string;
  sending: string;
  note: string;
  success: string;
  demoSuccess: string;
  error: string;
};

type LeadFormProps = {
  compact?: boolean;
  copy: LeadFormCopy;
  lang: "uk" | "ru";
};

type SubmitState = "idle" | "sending" | "success" | "demo" | "error";

export function LeadForm({ compact = false, copy, lang }: LeadFormProps) {
  const [status, setStatus] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lang,
          name: formData.get("name"),
          company: formData.get("company"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          city: formData.get("city"),
          businessType: formData.get("businessType"),
          goals: formData.getAll("goals"),
          interests: formData.getAll("interests"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      const result = (await response.json()) as { demo?: boolean };
      setStatus(result.demo ? "demo" : "success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const statusMessage =
    status === "success"
      ? copy.success
      : status === "demo"
        ? copy.demoSuccess
        : status === "error"
          ? copy.error
          : "";

  return (
    <form className={`lead-form ${compact ? "lead-form-compact" : ""}`} onSubmit={handleSubmit}>
      <div className="form-heading">
        <p>{copy.headingLabel}</p>
        <h2>{copy.headingTitle}</h2>
      </div>

      <fieldset>
        <legend>{copy.goalLegend}</legend>
        <div className="checkbox-grid goals-grid">
          {copy.goals.map((goal) => (
            <label className="checkbox-label" key={goal}>
              <input name="goals" type="checkbox" value={goal} defaultChecked />
              <span>{goal}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="form-grid">
        <label>
          <span>{copy.fields.name}</span>
          <input name="name" placeholder={copy.placeholders.name} required />
        </label>
        <label>
          <span>{copy.fields.company}</span>
          <input name="company" placeholder={copy.placeholders.company} required />
        </label>
        <label>
          <span>{copy.fields.phone}</span>
          <input name="phone" type="tel" placeholder={copy.placeholders.phone} required />
        </label>
        <label>
          <span>{copy.fields.email}</span>
          <input name="email" type="email" placeholder={copy.placeholders.email} />
        </label>
        <label>
          <span>{copy.fields.city}</span>
          <input name="city" placeholder={copy.placeholders.city} required />
        </label>
        <label>
          <span>{copy.fields.businessType}</span>
          <select name="businessType" defaultValue="" required>
            <option value="" disabled>
              {copy.placeholders.businessType}
            </option>
            {copy.businessTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
      </div>

      <fieldset>
        <legend>{copy.interestLegend}</legend>
        <div className="checkbox-grid">
          {copy.interests.map((interest, index) => (
            <label className="checkbox-label" key={interest}>
              <input
                name="interests"
                type="checkbox"
                value={interest}
                defaultChecked={index === copy.interests.length - 1}
              />
              <span>{interest}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label>
        <span>{copy.fields.message}</span>
        <textarea name="message" rows={compact ? 3 : 4} placeholder={copy.placeholders.message} />
      </label>

      <button className="button primary form-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? copy.sending : copy.submit}
      </button>

      <p className="form-note">{copy.note}</p>

      {statusMessage && (
        <div
          className={`form-status ${status === "error" ? "form-status-error" : "success-message"}`}
          role="status"
          aria-live="polite"
        >
          {statusMessage}
        </div>
      )}
    </form>
  );
}
