import { z } from "zod";

export const GetUserInputSchema = z.object({
  count: z.coerce.number(),
  page: z.coerce.number(),
});

export const UserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
});

export const GetUserOutputSchema = z.object({
  users: z.array(UserSchema),
});
