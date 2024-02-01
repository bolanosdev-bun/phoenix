import { OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";
import { route } from "./routes/user.route";
import type { User } from '@phoenix/types/users'
import type { GetUserInputType, GetUserOutputType } from './types/user.type'
const app = new OpenAPIHono();

const users = Array.from(Array(10000).keys()).map(it => ({
  userName: ` userName ${it}`,
  firstName: `firstName ${it}`,
  lastName: `lastName ${it}`
})) as unknown as User[] ;

app.get('/', (c) => c.text('hello hono!'));

app.openapi(route, (c) => {
  const { count, page } = c.req.valid('query' as never) as GetUserInputType;

  const initial = page * count

  return c.json<GetUserOutputType>({
    users: users.slice( initial, initial + count) 
  });
});

app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});

app.get("/ui", swaggerUI({ url: "/doc" }));

export default {
  port: 3001,
  fetch: app.fetch,
};
