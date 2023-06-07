import * as core from '@actions/core'

type Input = {
  path: string
  mask: boolean
  expr: boolean
}

export async function setup({path, mask, expr}: Input): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const dotenv = require('dotenv').config({path}) // eslint-disable-line @typescript-eslint/no-var-requires
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const dotexp = require('dotenv-expand').expand(dotenv) // eslint-disable-line @typescript-eslint/no-var-requires
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const variables: any = {}

  core.info(`Exporting environment variables from ${path}`)
  core.setOutput('variables', variables)

  for (const name in dotexp.parsed) {
    const key = name.toLocaleLowerCase()
    const value = dotexp.parsed[name]
    // output the value
    variables[key] = value
    // export the value
    if (expr) {
      core.info(`Exporting environment variables ${name}`)
      core.exportVariable(name, value)
    }
  }

  for (const name in dotexp.parsed) {
    const value = dotexp.parsed[name]
    // mask the value
    if (mask) {
      core.info(`Masking environment variables ${name}`)
      core.setSecret(value)
    }
  }
}
