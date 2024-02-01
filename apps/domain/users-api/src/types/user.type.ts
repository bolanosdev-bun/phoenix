import type { User } from '@phoenix/types/users'

export type GetUserInputType = {
  count: number,
  page: number
}

export type GetUserOutputType = {
  users: User[]
}
