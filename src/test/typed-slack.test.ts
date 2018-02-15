import * as Slack from '../typed-slack'
import 'jest'

jest.setTimeout(10000)

let slack = new Slack.IncomingWebhook(process.env.SLACK_URL as string)

describe('only text', () => {
  test('ok', async () => {
    const s = await slack.send({ text: 'text' })
    expect(s).toBe('ok')
  })
})

describe('no options', () => {
  test('error', async () => {
    expect.hasAssertions()
    try {
      const s = await slack.send({})
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
    }
  })
})

describe('full options', () => {
  test('ok', async () => {
    const options = <Slack.IncomingWebhookOptions>{
      text: '@star__hoshi __test__',
      channel: 'debug',
      username: 'hoge',
      icon_emoji: ':smile:',
      link_names: 1,
      attachments: [
        {
          fallback: 'Required plain-text summary of the attachment.',
          color: '#36a64f',
          pretext: 'Optional text that appears above the attachment block',
          author_name: 'Bobby Tables',
          author_link: 'http://flickr.com/bobby/',
          author_icon: 'http://flickr.com/icons/bobby.jpg',
          title: 'Slack API Documentation',
          title_link: 'https://api.slack.com/',
          text: 'Optional text that appears within the attachment',
          fields: [
            {
              title: 'Priority',
              value: 'High'
            },
            {
              title: 'Priority',
              value: 'Middle',
              short: true
            },
            {
              title: 'Priority',
              value: 'Low',
              short: true
            }
          ],
          image_url: 'http://my-website.com/path/to/image.jpg',
          thumb_url: 'http://example.com/path/to/thumb.png',
          footer: 'Slack API',
          footer_icon: 'https://platform.slack-edge.com/img/default_application_icon.png',
          ts: 123456789
        },
        {
          fallback: 'Required plain-text summary of the attachment.',
          color: '#36a64f',
          pretext: 'Optional text that appears above the attachment block',
          author_name: 'Bobby Tables',
          author_link: 'http://flickr.com/bobby/',
          author_icon: 'http://flickr.com/icons/bobby.jpg',
          title: 'Slack API Documentation',
          title_link: 'https://api.slack.com/',
          text: 'Optional text that appears within the attachment',
          fields: [
            {
              title: 'Priority',
              value: 'High',
              short: false
            }
          ],
          image_url: 'http://my-website.com/path/to/image.jpg',
          thumb_url: 'http://example.com/path/to/thumb.png',
          footer: 'Slack API',
          footer_icon: 'https://platform.slack-edge.com/img/default_application_icon.png',
          ts: 123456789
        }
      ]
    }
    const s = await slack.send(options)
    expect(s).toBe('ok')
  })
})
