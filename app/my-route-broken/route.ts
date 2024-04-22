import { LocaleProvider } from "@payloadcms/ui/providers/Locale"

export const GET = () => {
  // This import works in Webpack, and used to work in Turbopack.

  // But any versions after 14.2.0-canary.33 (i.e. 14.2.0) now break Turbopack,
  // even in spite of the errored file indeed having 'use client' at the top.

  return Response.json({
    typeofClientComponent: typeof LocaleProvider,
  })
}