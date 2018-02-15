import * as Slack from '../typed-slack'
import 'jest'

jest.setTimeout(10000)

let slack = new Slack.Webhook(process.env.SLACK_URL as string)

describe('exist options', () => {
  test('notification', async () => {
    const s = await slack.send({text: 'text'})
    expect(s).toBe('ok')
  })
})
