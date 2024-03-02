import type { APIRoute } from "astro";
import { z } from "astro:content";
import { escapeHtml, getEmailTemplate } from "@/lib/utils";

export const prerender = false;

let schema = z.object({
  name: z
    .string({
      required_error: "Bitte gebe deinen Vor- und Nachnamen an",
    })
    .min(1, "Bitte gebe deinen Vor- und Nachnamen an"),
  email: z
    .string({
      required_error: "Bitte gebe eine gültige E-Mail-Addresse an",
    })
    .email(),
  phone: z.string().optional(),
  message: z
    .string({ required_error: "Bitte schreibe mindestens 10 Buchstaben" })
    .min(10, "Bitte schreibe mindestens 10 Buchstaben"),
});

export let POST: APIRoute = async ({ request }) => {
  let data = await request.formData();
  let result = schema.safeParse(Object.fromEntries(data.entries()));

  if (!result.success) {
    return new Response(null, { status: 400 });
  }

  try {
    let response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: import.meta.env.RESEND_SENDER,
        replyTo: result.data.email,
        to: import.meta.env.RESEND_RECIPIENT,
        subject: "Nachricht von der Leo Club Weil am Rhein Webseite",
        html: getEmailTemplate(escapeHtml(result.data)),
      }),
    });

    let data = await response.json();

    if (response.ok && data.id) {
      return new Response(null, { status: 200 });
    }

    throw new Error(response.statusText);
  } catch (error) {
    return new Response(null, { status: 400 });
  }
};
