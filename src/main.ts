import { findServiceUserById, fetchFollowUsers } from './queries/sample.queries';
import type { Context } from './core/use-db'

export async function main({ runInTransaction }: Context): Promise<void> {
  const [user, follows] = await runInTransaction(async (connection) => {
    const [users, follows] = await Promise.all([
      findServiceUserById.run({
        userId: 2,
      }, connection),
      fetchFollowUsers.run({
        userId: 2,
      }, connection)
    ])

    return [
      users[0],
      follows
    ]
  })

  console.log('user', user);
  console.log('follows', follows)
}
