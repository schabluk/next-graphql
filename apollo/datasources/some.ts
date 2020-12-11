import { DataSource } from 'apollo-datasource'

// Uhm, a database.
const db = {
  run: function(statement: string) {
    return new Promise((resolve) => setTimeout(() => resolve({ data: 'wow, much data' }), 1000))
  },
}

export default class Some extends DataSource {
  protected context: any

  constructor(deps: any) {
    super()
  }

  async initialize(config) {
    this.context = config.context
  }

  async getData(): Promise<any> {
    const statement = `SELECT * FROM dummy`

    return await db.run(statement)
  }
}
