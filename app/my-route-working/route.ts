import { ClientComponent } from "../ClientComponent"

export const GET = () => {
  // This import works in Webpack, and used to work in Turbopack.

  // Looks like it was fixed in 14.3.0-canary.8.
  // Corresponding GitHub issue:
  // https://github.com/vercel/next.js/issues/64412

  return Response.json({
    typeofClientComponent: typeof ClientComponent,
  })
}