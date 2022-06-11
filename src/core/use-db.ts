import { Client, ClientConfig } from 'pg';

type QueryRunner<T> = (client: Client) => Promise<T>

export type Context = {
  connect: () => Promise<void>,
  disconnect: () => Promise<void>,
  run: <Ret extends unknown>(runner: QueryRunner<Ret>) => Promise<Ret>,
  runInTransaction: <Ret extends unknown>(runner: QueryRunner<Ret>) => Promise<Ret>
}

export const useDb = (config: ClientConfig): Context => {
  const client = new Client(config)

  const connect = async (): Promise<void> => {
    await client.connect()
  }

  const disconnect = async (): Promise<void> => {
    await client.end()
  }

  const run = async <Ret extends unknown>(runner: QueryRunner<Ret>): Promise<Ret> => {
    return await runner(client)
  }

  const runInTransaction = async <Ret extends unknown>(runner: QueryRunner<Ret>): Promise<Ret> => {
    await client.query("BEGIN")
    const result = await runner(client)
    await client.query("COMMIT")
  
    return result
  }

  return {
    connect,
    disconnect,
    run,
    runInTransaction
  }
}
