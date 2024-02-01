import { createRoute } from "@hono/zod-openapi";
import {
  GetUserInputSchema,
  GetUserOutputSchema,
} from "../schemas/user.schema";

export const route = createRoute({
  method: "get",
  path: "/users",
  request: {
    query: GetUserInputSchema,
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetUserOutputSchema,
        },
      },
      description: "Retrieve the users",
    },
  },
});
