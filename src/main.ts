import * as core from '@actions/core'
import {setup} from './setup'

async function run(): Promise<void> {
  try {
    const path = core.getInput('path')
    const mask = core.getBooleanInput('mask')
    const expr = core.getBooleanInput('export')
    await setup({path, mask, expr})
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
