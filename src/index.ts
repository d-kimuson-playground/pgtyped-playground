import { useDb } from './core/use-db';
import { main } from './main'

async function entry() {
  const context = useDb({
    host: '127.0.0.1',
    user: 'postgres',
    password: 'password',
    database: 'pgtyped',
    port: 5434
  })

  const {
    connect,
    disconnect,
  } = context

  try {
    await connect()
    await main(context)
  } finally {
    await disconnect()
  }
}

entry()
