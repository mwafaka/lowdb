// Remember to set type: module in package.json or use .mjs extension
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

// db.json file path
const _dirname = dirname(fileURLToPath(import.meta.url))
const file = join(_dirname, '/db.json')



// Configure lowdb to write data to JSON file
const adapter = new JSONFile(file)

const defaultData = { posts: [] }
const db = new Low(adapter, defaultData)
console.log(db);
// Read data from JSON file, this will set db.data content
// If JSON file doesn't exist, defaultData is used instead
  await db.read()
 //console.log(read);
// Create and query items using plain JavaScript
 db.data.push({ id: 1, name: 'John Doe', email: 'john@example.com' })
const firstPost = db.data


// console.log(firstPost);

// Finally write db.data content to file
await db.write();
