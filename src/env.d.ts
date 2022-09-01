/// <reference types="astro/client" />

declare module "@fancyapps/ui";

interface ImportMetaEnv {
  readonly EMAILJS_USER_ID: string;
  readonly EMAILJS_TEMPLATE_ID: string;
  readonly EMAILJS_SERVICE_ID: string;
  readonly EMAILJS_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
