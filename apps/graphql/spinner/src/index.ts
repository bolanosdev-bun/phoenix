import { createSchema, createYoga } from "graphql-yoga";

const yoga = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ `      
      type UserRole {
        id: Int,
        name: String
      }

      type User {
        userName: String
        firstName: String
        lastName: String
        role: UserRole
      }

      input GetUsersInput {
        count: Int!
        page: Int!
      }

      type Query {
        users(input: GetUsersInput): [User]
      }
    `,
    resolvers: {
      Query: {
        users: (parent, args, context) => {
          console.log('f: users.parent', parent)
          console.log('f: users.args', args)
          // console.log('f: users.context', context)
          return [
            {
              userName: 'cbolanos',
              firstName: 'carlos',
              lastName: 'bolanos',
              role: {
                id: 2,
                name: 'user'
              }
            }
          ]
        }
      },
      User: {
        role: (parent, args, context) => {
          console.log('f: User.role.parent', parent)
          console.log('f: User.role.args', args)
          // console.log('f: User.role.context', context)
          return {
            id: 1,
            name: 'admin'
          }
        }
      }      
    },
  }),
});

const server = Bun.serve({
  fetch: yoga,
});

console.info(
  `Server is running on ${new URL(
    yoga.graphqlEndpoint,
    `http://${server.hostname}:${server.port}`,
  )}`,
);

