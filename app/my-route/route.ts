import { ElementButton } from "@payloadcms/richtext-slate"

export const GET = () => {
  return Response.json({
    typeofElementButton: typeof ElementButton,
  })
}