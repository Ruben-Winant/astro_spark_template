import type { APIRoute } from "astro";
import { MailerSend, Sender, Recipient, EmailParams } from "mailersend";
import { contactOptions } from "../[lang]/contact.astro";
import { DEFAULT_LOCALE, useTranslations, type UiType } from "../../i18n/utils";

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const topic = formData.get("topic");
  const message = formData.get("message");
  const lang = (formData.get("lang") as UiType) ?? (DEFAULT_LOCALE as UiType);

  const t = useTranslations(lang);

  const EMAIL: string = "example@hotmail.com";
  const mailerSend = new MailerSend({
    apiKey: import.meta.env.MAILERSEND_API_KEY ?? "",
  });
  const sentFrom = new Sender(
    "sender@hotmail.com",
    "Spark",
  );
  const recipients = [new Recipient(EMAIL, "Ruben Winant")];
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation
  let errors = {
    name: [] as string[],
    topic: [] as string[],
    email: [] as string[],
    message: [] as string[],
    general: [] as string[],
  };

  if (
    !name ||
    typeof name !== "string" ||
    name.length < 1 ||
    !nameRegex.test(name)
  ) {
    errors.name.push(t("contact.error_name"));
  }

  if (
    !email ||
    typeof email !== "string" ||
    email.length < 1 ||
    !emailRegex.test(email)
  ) {
    errors.email.push(t("contact.error_email"));
  }

  if (!topic || typeof topic !== "string" || !contactOptions.includes(topic)) {
    errors.topic.push(t("contact.error_topic"));
  }

  if (!message || typeof message !== "string" || message.length < 1) {
    errors.message.push(t("contact.error_message"));
  }

  if (
    errors.email.length > 0 ||
    errors.name.length > 0 ||
    errors.message.length > 0 ||
    errors.topic.length > 0
  ) {
    return new Response(JSON.stringify(errors), { status: 400 });
  }

  // Sanitize inputs
  const sanitizeInput = (input: FormDataEntryValue) =>
    input.toString().replace(/<[^>]*>?/gm, "");
  const sanitizedData = {
    name: sanitizeInput(name as FormDataEntryValue),
    email: sanitizeInput(email as FormDataEntryValue),
    message: sanitizeInput(message as FormDataEntryValue),
    topic: sanitizeInput(topic as FormDataEntryValue),
  };

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setSubject(sanitizedData.topic)
    .setTemplateId("insert template id")
    .setVariables([
      {
        email: EMAIL,
        substitutions: [
          { var: "from", value: sanitizedData.name },
          { var: "fromEmail", value: sanitizedData.email },
          { var: "message", value: sanitizedData.message },
        ],
      },
    ]);

  // send mail
  try {
    const result = await mailerSend.email.send(emailParams);

    if (result.statusCode >= 200 && result.statusCode < 300) {
      return new Response(JSON.stringify({ success: true }), {
        status: result.statusCode,
      });
    } else {
      return new Response(
        JSON.stringify({ message: t("contact.error_general") }),
        { status: 400 },
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ message: t("contact.error_general") }),
      { status: 400 },
    );
  }
};
