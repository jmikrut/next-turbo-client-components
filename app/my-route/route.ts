import { ClientComponent } from "../ClientComponent"

export const GET = () => {
  return Response.json({
    clientComponent: typeof ClientComponent
  })
}