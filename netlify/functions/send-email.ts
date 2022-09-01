import type { Handler } from "@netlify/functions";
import http from "http";

function send(options: http.RequestOptions, data: any) {
  return new Promise((resolve, reject) => {
    const request = http.request(options, (response) => {
      response.on("data", () => resolve(response.statusCode === 200));
    });

    request.on("error", reject);

    request.write(data);
    request.end();
  });
}

const handler: Handler = async (event) => {
  try {
    const { name, email, phone, message, honeypot } = JSON.parse(event.body!);

    if (honeypot) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "OK" }),
      };
    }

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Bad input" }),
      };
    }

    const data = JSON.stringify({
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_USER_ID,
      accessToken: process.env.EMAILJS_ACCESS_TOKEN,
      template_params: {
        name,
        email,
        phone,
        message,
      },
    });

    const success = await send(
      {
        hostname: "api.emailjs.com",
        port: 80,
        path: "/api/v1.0/email/send",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": data.length,
        },
      },
      data
    );

    if (!success) {
      throw new Error("something went wrong, please try again");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "OK" }),
    };
  } catch (ex: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: ex.message }),
    };
  }
};

export { handler };
