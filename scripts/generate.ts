import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'

const ADOBE_HOSTS_FILE_URL = 'https://a.dove.isdumb.one/list.txt'

const originalHosts = await fetch(ADOBE_HOSTS_FILE_URL).then((res) =>
  res.text(),
)
const lines = originalHosts.split('\n')

let ruleSetFile = 'payload:\n'

for (const line of lines) {
  if (line.startsWith('#') || line.trim() === '') {
    continue
  }
  const host = line.split(' ')[1]
  ruleSetFile += `  - ${host}\n`
}

const outputPath = process.argv[2] ?? './dist/adobe-telemetry.yml'

mkdirSync(dirname(outputPath), { recursive: true })
writeFileSync(outputPath, ruleSetFile)

export {}
