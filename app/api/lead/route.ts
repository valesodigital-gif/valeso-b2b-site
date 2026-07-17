type LeadPayload = {
  lang?: string;
  name?: unknown;
  company?: unknown;
  phone?: unknown;
  email?: unknown;
  city?: unknown;
  businessType?: unknown;
  goals?: unknown;
  interests?: unknown;
  message?: unknown;
};

export const runtime = "nodejs";

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function asList(value: unknown) {
  return Array.isArray(value)
    ? value.map((item) => asText(item)).filter(Boolean)
    : [];
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatLead(payload: LeadPayload) {
  const lang = payload.lang === "ru" ? "RU" : "UA";
  const goals = asList(payload.goals);
  const interests = asList(payload.interests);

  const rows = [
    "<b>New B2B lead VALESO</b>",
    `<b>Language:</b> ${lang}`,
    `<b>Goals:</b> ${goals.length ? goals.map(escapeHtml).join(", ") : "-"}`,
    `<b>Name:</b> ${escapeHtml(asText(payload.name))}`,
    `<b>Company:</b> ${escapeHtml(asText(payload.company))}`,
    `<b>Phone:</b> ${escapeHtml(asText(payload.phone))}`,
    `<b>Email:</b> ${escapeHtml(asText(payload.email) || "-")}`,
    `<b>City:</b> ${escapeHtml(asText(payload.city))}`,
    `<b>Business type:</b> ${escapeHtml(asText(payload.businessType))}`,
    `<b>Interests:</b> ${interests.length ? interests.map(escapeHtml).join(", ") : "-"}`,
    `<b>Comment:</b> ${escapeHtml(asText(payload.message) || "-")}`,
  ];

  return rows.join("\n");
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const requiredFields = [
    asText(payload.name),
    asText(payload.company),
    asText(payload.phone),
    asText(payload.city),
    asText(payload.businessType),
  ];

  if (requiredFields.some((field) => !field)) {
    return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const text = formatLead(payload);

  if (!token || !chatId) {
    return Response.json({ ok: true, demo: true });
  }

  const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  if (!telegramResponse.ok) {
    return Response.json({ ok: false, error: "Telegram delivery failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
