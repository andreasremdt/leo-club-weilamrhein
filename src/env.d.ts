/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "@fancyapps/ui";

interface ImportMetaEnv {
  readonly EMAILJS_USER_ID: string;
  readonly EMAILJS_TEMPLATE_ID: string;
  readonly EMAILJS_SERVICE_ID: string;
  readonly EMAILJS_ACCESS_TOKEN: string;

  readonly PUBLIC_ALGOLIA_APPLICATION_ID: string;
  readonly PUBLIC_ALGOLIA_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
