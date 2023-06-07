import {setup} from '../src/setup'
import {test} from '@jest/globals'

test('sets the shell environment', async () => {
  await setup({path: '../__fixtures__/test.env', mask: true, expr: true})
})
